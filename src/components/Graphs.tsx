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
	countriesScores: Map<CountryCode, CountryScore> | undefined,
	setFilterRange: (
		category: Category,
		range: Array<Array<number>> | [],
	) => void
}

function Graphs({ categoriesFilterState, countriesScores, setFilterRange }: props) {
	const [selectedCategory, setSelectedCategory] = useState<Category>(
		categoriesFilterState[0]?.category
	)

	const getCategoryRange = (categoriesFilterState: Array<CategoryFilterState>, category: Category) => {
		const filterIndex = categoriesFilterState.findIndex(
			(filter) => filter.category === category
		)
		return categoriesFilterState[filterIndex]?.range ? categoriesFilterState[filterIndex]?.range : []
	}

	const addFilterRange = (category: Category, newRange: Array<number>) => {
		const filterIndex = categoriesFilterState.findIndex(
			(filter) => filter.category === category
		)
		const newRanges = [...categoriesFilterState[filterIndex]?.range]
	
		let isInList = false;
		for (let i = 0; i < newRanges.length; i++) {
			const currentRange = newRanges[i]
			if (currentRange[0] == newRange[0] && currentRange[1] == newRange[1]) {
				isInList = true;
			}
		}

		if (!isInList) {
			newRanges.push(newRange);
			newRanges.sort((a, b) => a[0] - b[0]);
			setFilterRange(category, newRanges);
		}

	}

	const removeFilterRange = (category: Category, rangeToBeRemoved: Array<number>) => {
		const filterIndex = categoriesFilterState.findIndex(
			(filter) => filter.category === category
		)
		const newRanges = [...categoriesFilterState[filterIndex]?.range];

		for (let i = 0; i < newRanges.length; i++) {
			const currentRange = newRanges[i]
			if (currentRange[0] == rangeToBeRemoved[0] && currentRange[1] == rangeToBeRemoved[1]) {
				newRanges.splice(i,1);
				setFilterRange(category, newRanges);
				return;
			}
		}

		// We have to split a range.
		// This happens if an interval is set with PC and then removed by the histogram
		for (let i = 0; i < newRanges.length; i++) {
			const oldRange = newRanges[i];

			// This is the interval containing the one to be removed
			if (rangeToBeRemoved[0] >= oldRange[0] && rangeToBeRemoved[1] <= oldRange[1]) {
				const firstRange = [oldRange[0], rangeToBeRemoved[0]];
				const secondRange = [rangeToBeRemoved[1], oldRange[1]]

				// Remove the old range
				newRanges.splice(i,1)
				newRanges.push(firstRange)
				newRanges.push(secondRange)
				setFilterRange(category, newRanges.sort((a, b) => a[0] - b[0]))

			}
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
				ranges={getCategoryRange(categoriesFilterState, selectedCategory)}
				addFilterRange={addFilterRange}
				removeFilterRange={removeFilterRange}
			/>
		</>
	)
}

export default Graphs
