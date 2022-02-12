import { useState, useEffect } from "react"
import CategorySelection from "./CategorySelection"
import ParameterSelection from "./ParameterSelection"
import {
	Category,
	ThemeMappingItem,
	CategoryFilterState,
} from "../data/datasets/datasetsMapping"
import { getPCAMatrix } from "../data/pcaMatrices"

type props = {
	categoriesFilterState: Array<CategoryFilterState>
	changeFilterState: (
		selectedCategory: Category,
		importanceFactor: number,
		matrix: Map<string, number> | null
	) => void
}

function Selection({ categoriesFilterState, changeFilterState }: props) {
	const [importanceFactor, setImportanceFactor] = useState<number>(0)
	const [selectedCategory, setSelectedCategory] = useState<Category>()
	const [includeCategory, setIncludeCategory] = useState<boolean>(false)
	const [categoryState, setCategoryState] = useState<CategoryFilterState>()

	useEffect(() => {
		const newCategoryState = categoriesFilterState.find(
			({ category, importanceFactor, matrix }) => category === selectedCategory
		)

		if (newCategoryState) {
			setCategoryState(newCategoryState)
			setIncludeCategory(true)
			setImportanceFactor(newCategoryState.importanceFactor)
		}
	}, [selectedCategory])

	function calculate(datasetMappingByTheme: ThemeMappingItem[]) {
		switch (selectedCategory) {
			case "Air Pollution":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Natural Disasters":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Climate Change":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Food":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Income":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Education":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Democracy":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Gender Rights":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Language":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Safety":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Happiness":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Health":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "LGBTQI+ Rights":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					changeFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
		}
	}

	return (
		<>
			<CategorySelection
				importanceFactor={importanceFactor}
				selectedCategory={selectedCategory}
				includeCategory={includeCategory}
				setImportanceFactor={setImportanceFactor}
				setSelectedCategory={setSelectedCategory}
				setIncludeCategory={setIncludeCategory}
			/>
			<ParameterSelection
				selectedCategory={selectedCategory}
				includeCategory={includeCategory}
				calculate={calculate}
				categoriesFilterState={categoriesFilterState}
			/>
		</>
	)
}

export default Selection
