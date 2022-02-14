import {PCA} from "ml-pca"
import {ThemeMappingItem, ThemeMappingItemField} from "./datasets/datasetsMapping";
import openJson from "./openJSON";
import {getCountryISOCode} from './countryConversion';

interface DataToReduce {
    data: any[],
    fields: ThemeMappingItemField[]
}

function normalizePCAData(reducedData: Map<string, number>) {
    const values = Array.from(reducedData.values());
    let maxValue: number = Number.MIN_VALUE
    let minValue: number = Number.MAX_VALUE

    values.forEach((item) => {
            if (item > maxValue) {
                maxValue = item
            }
            if (item < minValue) {
                minValue = item
            }
        }
    )

    const normalizedValue = values.map((item) =>
        Math.abs(item - minValue) / Math.abs(maxValue - minValue)
    )

    const normalizedData: Map<string, number> = new Map<string, number>()
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

export async function getReducedData<T>(originalField: T, themeMappingItems: ThemeMappingItem[], fieldToGroupBy: string,): Promise<Map<string, number[]>> {
    const dataToReduce = await treatThemeMapping(themeMappingItems)
    return reduceData(
        dataToReduce,
        fieldToGroupBy,
        originalField
    )
}

function reduceData<T>(dataToReduce: DataToReduce[], fieldToGroupBy: string, originalField: T): Map<string, number[]> {
    const data: Map<string, T> = new Map<string, T>()
    dataToReduce.forEach(dataToReduceItem =>
        dataToReduceItem.data.forEach(dataItem => {
            let obj = data.get(dataItem[fieldToGroupBy])
            if (!obj) {
                obj = {...originalField}
                data.set(dataItem[fieldToGroupBy], obj)
            }

            dataToReduceItem.fields.forEach(fieldItem => {
                try {
                    const number = parseFloat(dataItem[fieldItem.field])
                    if (!isNaN(number)) {
                        // @ts-ignore
                        obj[fieldItem.field] = (fieldItem.isDecreasing ? (number * (-1)) : number)
                    }
                } catch (e) {
                }
            })
        }))

    const reducedData: Map<string, number[]> = new Map()
    Array.from(data.entries()).forEach(([key, value]) => {
        reducedData.set(key, Object.values(value))
    })
    return reducedData
}

export function executePCA(reducedData: Map<string, number[]>): Map<string, number> {
    if (reducedData.size === 0) {
        return new Map()
    } else {
        const pca = new PCA(Array.from(reducedData.values()))
        const variance = pca.getExplainedVariance()

        const pcaMatrix = new Map<string, number>()

        Array.from(reducedData.entries()).forEach(([key, value]) => {
            const pcaValue = value.map((item, index) => item * variance[index])
                .reduce((acc, item) => acc + item)
            pcaMatrix.set(getCountryISOCode(key), pcaValue)
        })
        return normalizePCAData(pcaMatrix)
    }
}
