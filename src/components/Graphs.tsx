import React, { useEffect, useState } from "react"
import ParallelCoords from "./ParallelCoords"
import Histogram from "./Histogram.js"
import {
	CategoryFilterState,
	CountryCode,
	CountryScore,
	countryCodes,
} from "../data/datasets/datasetsMapping"
import { isEmptyObj } from "./functions/helpers"

type props = {
	categoriesFilterState: Array<CategoryFilterState>
	countriesScores: Map<CountryCode, CountryScore> | undefined
}

function Graphs({ categoriesFilterState, countriesScores }: props) {
	const [selectedCategory, setSelectedCategory] =
		useState<String>("Air pollution")
	const [selectedRanges, setSelectedRanges] = useState<Number[]>([])
	const [histogramData, setHistogramData] = useState<Number[]>([])

	useEffect(() => {
		if (countriesScores && !isEmptyObj(countriesScores)) {
			setHistogramData(
				Array.from(
					countryCodes,
					(code) => countriesScores.get(code)?.overallScore || 0
				)
			)
		}
	}, [countriesScores])

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
			/>
			<Histogram
				data={histogramData}
				category={selectedCategory}
				selected={selectedRanges}
				removeSelectedRange={removeSelectedRange}
				addSelectedRange={addSelectedRange}
			/>
		</>
	)
}

export default Graphs
