import {DeathRatesFromAmbientPollution, PM25AirPollution} from "./datasets/models";
import {PCA} from "ml-pca"

export interface EnvironmentPCA {
    "Deaths - Cause: All causes - Risk: Ambient particulate matter pollution - Sex: Both - Age: Age-standardized (Rate)": number,
    PM2: number
}

interface DataToReduce<T> {
    data: T[],
    fields: string[]
}

function normalizeData(reducedData: Map<String, number[]>) {
    const values = Array.from(reducedData.values());
    const length = values[0].length
    const maxValue: number[] = Array(length)

    values.forEach((rows) =>
        rows.forEach((item, index) => {
            if (!maxValue[index] || item > maxValue[index]) {
                maxValue[index] = item
            }
        })
    )

    const normalizedValue = values.map((rows) =>
        rows.map((item, index) => item / maxValue[index])
    )

    const normalizedData: Map<String, number[]> = new Map<String, number[]>()
    Array.from(reducedData.keys()).forEach((key, index) => {
        normalizedData.set(key, normalizedValue[index])
    })

    return normalizedData
}

export function treatEnvironmentData(pm25AirPollution: PM25AirPollution[], deathRatesFromAmbientPollution: DeathRatesFromAmbientPollution[]): Map<String, number[]> {
    const pm25Reduction: DataToReduce<PM25AirPollution> = {
        data: pm25AirPollution,
        fields: ["PM2"]
    }

    const deathRatesFromAmbientPollutionReduction: DataToReduce<DeathRatesFromAmbientPollution> = {
        data: deathRatesFromAmbientPollution,
        fields: ["Deaths - Cause: All causes - Risk: Ambient particulate matter pollution - Sex: Both - Age: Age-standardized (Rate)"]
    }

    const environmentPCA: EnvironmentPCA = {
        "Deaths - Cause: All causes - Risk: Ambient particulate matter pollution - Sex: Both - Age: Age-standardized (Rate)": 0,
        "PM2": 0
    } as EnvironmentPCA

    const reducedData = reduceData(
        [pm25Reduction, deathRatesFromAmbientPollutionReduction],
        "Entity",
        environmentPCA
    )

    return normalizeData(reducedData)
}

function reduceData<T>(dataToReduce: DataToReduce<any>[], fieldToGroupBy: string, originalField: T): Map<String, number[]> {
    const data: Map<String, T> = new Map<String, T>()
    dataToReduce.forEach(dataToReduceItem =>
        dataToReduceItem.data.forEach(dataItem => {
            let obj = data.get(dataItem[fieldToGroupBy])
            if (!obj) {
                obj = {...originalField}
                data.set(dataItem[fieldToGroupBy], obj)
            }

            dataToReduceItem.fields.forEach(field => {
                let number = 0
                try {
                    number = parseFloat(dataItem[field])
                } catch (e) {
                }
                // @ts-ignore
                obj[field] = number
            })
        }))

    const reducedData: Map<String, number[]> = new Map()
    Array.from(data.entries()).forEach(([key, value]) => {
        reducedData.set(key, Object.values(value))
    })
    return reducedData
}

export function executePCA(normalizedData: Map<String, number[]>): Map<String, number> {
    const pca = new PCA(Array.from(normalizedData.values()))
    const variance = pca.getExplainedVariance()

    const pcaMatrix = new Map<String, number>()

    Array.from(normalizedData.entries()).forEach(([key, value]) => {
        const pcaValue = value.map((item, index) => item * variance[index])
            .reduce((acc, item) => acc + item)
        pcaMatrix.set(key, pcaValue)
    })
    return pcaMatrix
}
