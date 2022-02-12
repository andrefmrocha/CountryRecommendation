import React from "react"
import {
	datasetsMappingByTheme,
	Category,
	CategoryFilterState,
} from "../data/datasets/datasetsMapping"
import Checkbox from "./common/Checkbox"

type props = {
	importanceFactor: number
	selectedCategory: Category | undefined
	includeCategory: boolean
	setImportanceFactor: React.Dispatch<React.SetStateAction<number>>
	setSelectedCategory: React.Dispatch<
		React.SetStateAction<Category | undefined>
	>
	setIncludeCategory: React.Dispatch<React.SetStateAction<boolean>>
}

function CategorySelection({
	importanceFactor,
	selectedCategory,
	includeCategory,
	setImportanceFactor,
	setSelectedCategory,
	setIncludeCategory,
}: props) {
	function changeImportanceFactor(e: React.ChangeEvent<HTMLInputElement>) {
		setImportanceFactor(
			Math.min(1.0, Math.max(0.0, parseFloat(e.currentTarget.value)))
		)
	}

	function getOptions() {
		const categories = Object.keys(datasetsMappingByTheme) as Array<Category>

		if (!selectedCategory) {
			setSelectedCategory(categories[0])
		}

		return categories.map((category) => (
			<option value={category}>{category}</option>
		))
	}

	return (
		<div className="category-panel">
			<div className="category-selection">
				<label htmlFor="category">Category</label>
				<select
					name="category"
					id="category"
					value={selectedCategory}
					onChange={(e) => {
						console.log(e.currentTarget.value)
						setSelectedCategory(e.currentTarget.value as Category)
						setIncludeCategory(false)
						setImportanceFactor(0)
					}}
				>
					{getOptions()}
				</select>
				<Checkbox
					checked={includeCategory}
					onClick={() => setIncludeCategory(!includeCategory)}
					type="large"
				/>
			</div>
			<div className="importance-factor-selection">
				<label htmlFor="importance-factor">Importance Factor</label>
				<input
					type="range"
					id="importance-factor"
					name="importance-factor"
					min="0"
					max="1"
					value={importanceFactor}
					step="0.01"
					disabled={!includeCategory}
					onChange={changeImportanceFactor}
				/>
				<span
					className="thumb"
					data-disabled={!includeCategory}
					style={{ left: `${importanceFactor * 360 + 10}px` }}
				></span>
				<input
					type="number"
					name="importance-factor"
					min="0"
					max="1"
					value={importanceFactor}
					step="0.01"
					disabled={!includeCategory}
					onChange={changeImportanceFactor}
				/>
			</div>
		</div>
	)
}

export default CategorySelection
