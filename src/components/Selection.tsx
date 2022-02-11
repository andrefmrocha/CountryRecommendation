import { useState } from 'react'
import Category from './Category'
import Parameter from './Parameter'
import { Categories, ThemeMappingItem } from '../data/datasets/datasetsMapping'
import { getPCAMatrix } from "../data/pcaMatrices";

type props = {
  setCountriesValues: React.Dispatch<React.SetStateAction<{} | Map<string, number>>>
}

function Selection({ setCountriesValues }: props) {
  const [importanceFactor, setImportanceFactor] = useState<number>(0)
  const [selectedCategory, setSelectedCategory] = useState<Categories>()
  const [includeCategory, setIncludeCategory] = useState<boolean>(false)

  function calculate(datasetMappingByTheme: ThemeMappingItem[]) {
    console.log(importanceFactor)
    console.log(selectedCategory)

    switch(selectedCategory) {
      case "Air Pollution":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "Natural Disasters":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "Climate Change":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "Food":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "Income":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "Education":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "Democracy":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "Gender Rights":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "Language":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "Safety":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "Happiness":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "Health":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
      case "LGBTQI+ Rights":
        getPCAMatrix(selectedCategory, datasetMappingByTheme).then(matrix => setCountriesValues(matrix))
        break
    }

    setCountriesValues({})
  }

  return (
    <>
        <Category importanceFactor={importanceFactor} selectedCategory={selectedCategory} includeCategory={includeCategory} setImportanceFactor={setImportanceFactor} setSelectedCategory={setSelectedCategory} setIncludeCategory={setIncludeCategory} />
        <Parameter selectedCategory={selectedCategory} includeCategory={includeCategory} calculate={calculate}/>
    </>
  )
}

export default Selection