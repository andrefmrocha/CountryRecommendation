import {executePCA, getReducedData} from "./pca";
import {
    originalAirPollutionPCA,
    originalClimateChangePCA,
    originalDemocracyPCA,
    originalEducationPCA,
    originalFoodPCA,
    originalGenderRightsPCA,
    originalHappinessPCA,
    originalHealthPCA,
    originalIncomePCA,
    originalLanguagePCA, originalLGBTQIRightsPCA,
    originalNaturalDisasterPCA,
    originalSafetyPCA
} from "./pcaModels";
import {ThemeMapping} from "./datasets/datasetsMapping";

export async function getAirPollutionPCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalAirPollutionPCA, datasetsMappingByTheme["Air Pollution"], "Entity")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getNaturalDisastersPCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalNaturalDisasterPCA, datasetsMappingByTheme["Natural Disaster"], "Entity")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getClimateChangePCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalClimateChangePCA, datasetsMappingByTheme["Climate Change"], "Entity")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getFoodPCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalFoodPCA, datasetsMappingByTheme.Food, "Entity")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getIncomePCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalIncomePCA, datasetsMappingByTheme.Income, "Entity")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getEducationPCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalEducationPCA, datasetsMappingByTheme.Education, "Entity")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getDemocracyPCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalDemocracyPCA, datasetsMappingByTheme.Democracy, "Entity")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getGenderRightsPCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalGenderRightsPCA, datasetsMappingByTheme["Gender Rights"], "Entity")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getLanguagePCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalLanguagePCA, datasetsMappingByTheme.Language, "Country")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getSafetyPCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalSafetyPCA, datasetsMappingByTheme.Safety, "Entity")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getHappinessPCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalHappinessPCA, datasetsMappingByTheme.Happiness, "Entity")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getHealthPCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalHealthPCA, datasetsMappingByTheme.Health, "Entity")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}

export async function getLGBTQIRightsPCAMatrix(datasetsMappingByTheme: ThemeMapping) {
    const reducedData = await getReducedData(originalLGBTQIRightsPCA, datasetsMappingByTheme["LGBTQI+ Rights"], "country")
    const pcaMatrix = executePCA(reducedData)
    console.log(pcaMatrix)
    return pcaMatrix
}
