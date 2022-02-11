import {PCA} from "ml-pca"
import {ThemeMappingItem} from "./datasets/datasetsMapping";
import openJson from "./openJSON";

interface DataToReduce {
    data: any[],
    fields: string[]
}

function normalizePCAData(reducedData: Map<String, number>) {
    const values = Array.from(reducedData.values());
    let maxValue: number = Number.MIN_VALUE

    values.forEach((item) => {
            if (item > maxValue) {
                maxValue = item
            }
        }
    )

    const normalizedValue = values.map((item) =>
        item / maxValue
    )

    const normalizedData: Map<String, number> = new Map<String, number>()
    Array.from(reducedData.keys()).forEach((key, index) => {
        normalizedData.set(key, normalizedValue[index])
    })

    return normalizedData
}

async function treatThemeMapping(themeMappingItems: ThemeMappingItem[]): Promise<DataToReduce[]> {
    const promises = themeMappingItems.filter(item => item.isUsed)
        .map(async (item) => {
            const data = await openJson(item.dataset)

            return {
                data: item.treatData ? item.treatData(data) : data,
                fields: item.fields
            } as DataToReduce
        })

    return Promise.all(promises)
}

export async function getReducedData<T>(originalField: T, themeMappingItems: ThemeMappingItem[], fieldToGroupBy: string,) {
    const dataToReduce = await treatThemeMapping(themeMappingItems)
    return reduceData(
        dataToReduce,
        fieldToGroupBy,
        originalField
    )
}

function reduceData<T>(dataToReduce: DataToReduce[], fieldToGroupBy: string, originalField: T): Map<String, number[]> {
    const data: Map<String, T> = new Map<String, T>()
    dataToReduce.forEach(dataToReduceItem =>
        dataToReduceItem.data.forEach(dataItem => {
            let obj = data.get(dataItem[fieldToGroupBy])
            if (!obj) {
                obj = {...originalField}
                data.set(dataItem[fieldToGroupBy], obj)
            }

            dataToReduceItem.fields.forEach(field => {
                try {
                    const number = parseFloat(dataItem[field])
                    if (!isNaN(number)) {
                        // @ts-ignore
                        obj[field] = number
                    }
                } catch (e) {
                }
            })
        }))

    const reducedData: Map<String, number[]> = new Map()
    Array.from(data.entries()).forEach(([key, value]) => {
        reducedData.set(key, Object.values(value))
    })
    return reducedData
}

export function executePCA(reducedData: Map<String, number[]>): Map<String, number> {
    if (reducedData.size === 0) {
        return new Map()
    } else {
        const pca = new PCA(Array.from(reducedData.values()))
        const variance = pca.getExplainedVariance()

        const pcaMatrix = new Map<String, number>()

        Array.from(reducedData.entries()).forEach(([key, value]) => {
            const pcaValue = value.map((item, index) => item * variance[index])
                .reduce((acc, item) => acc + item)
            pcaMatrix.set(key, pcaValue)
        })
        return normalizePCAData(pcaMatrix)
    }
}
