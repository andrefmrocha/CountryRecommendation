import React, { useEffect, useState } from "react"
import ParallelCoords from "./ParallelCoords"
import Histogram from "./Histogram.js"
import {
	CategoryFilterState,
	CountryCode,
	CountryScore,
	countryCodes,
	Category,
} from "../data/datasets/datasetsMapping"

type props = {
	categoriesFilterState: Array<CategoryFilterState>
	countriesScores: Map<CountryCode, CountryScore> | undefined
}

function Graphs({ categoriesFilterState, countriesScores }: props) {
	const [selectedCategory, setSelectedCategory] = useState<Category>(
		categoriesFilterState[0]?.category
	)
	const [selectedRanges, setSelectedRanges] = useState<Number[]>([])

	// TEMP functionn before multiple categories and ranges are added
	const removeSelectedRange = (range: Number) => {
		setSelectedRanges((selectedRanges) =>
			selectedRanges.filter((element) => element !== range)
		)
	}

	// TEMP functionn before multiple categories and ranges are added
	const addSelectedRange = (range: Number) => {
		if (selectedRanges.indexOf(range) === -1) {
			const newList = selectedRanges.slice()
			newList.push(range)
			setSelectedRanges(newList)
		}
	}

	return (
		<>
			<ParallelCoords
				categoriesFilterState={categoriesFilterState}
				countriesScores={countriesScores}
				setSelectedCategory={setSelectedCategory}
			/>
			<Histogram
				countriesScores={countriesScores}
				category={selectedCategory}
				selected={selectedRanges}
				removeSelectedRange={removeSelectedRange}
				addSelectedRange={addSelectedRange}
			/>
		</>
	)
}

export default Graphs
