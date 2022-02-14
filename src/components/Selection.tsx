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
	setCategoriesFilterState: React.Dispatch<
		React.SetStateAction<CategoryFilterState[]>
	>
	addFilterState: (
		selectedCategory: Category,
		importanceFactor: number,
		matrix: Map<string, number> | null
	) => void
	removeFilterState: (selectedCategory: Category) => void
}

function Selection({
	categoriesFilterState,
	setCategoriesFilterState,
	addFilterState,
	removeFilterState,
}: props) {
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

	useEffect(() => {
		if (!selectedCategory) return

		let newCategoriesFilterState = categoriesFilterState.filter(
			(filter) => !!filter.matrix
		)

		let filterIndex = newCategoriesFilterState.findIndex(
			(filter) => filter.category === selectedCategory
		)

		const categoryFilterState = {
			category: selectedCategory,
			importanceFactor: importanceFactor,
			matrix: newCategoriesFilterState[filterIndex]?.matrix,
		}

		if (filterIndex < 0) {
			newCategoriesFilterState.push(categoryFilterState)
		} else {
			newCategoriesFilterState[filterIndex] = categoryFilterState
		}

		setCategoriesFilterState(newCategoriesFilterState)
	}, [selectedCategory, importanceFactor])

	function addCategory(datasetMappingByTheme: ThemeMappingItem[]) {
		switch (selectedCategory) {
			case "Air Pollution":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Natural Disasters":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Climate Change":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Food":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Income":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Education":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Democracy":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Gender Rights":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Language":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Safety":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Happiness":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "Health":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
			case "LGBTQI+ Rights":
				getPCAMatrix(selectedCategory, datasetMappingByTheme).then((matrix) =>
					addFilterState(selectedCategory, importanceFactor, matrix)
				)
				break
		}
	}

	function removeCategory() {
		if (selectedCategory) removeFilterState(selectedCategory)
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
				addCategory={addCategory}
				removeCategory={removeCategory}
				categoriesFilterState={categoriesFilterState}
			/>
		</>
	)
}

export default Selection
