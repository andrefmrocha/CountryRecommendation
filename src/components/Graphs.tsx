import React from "react"
import ParallelCoords from "./ParallelCoords"
import Histogram from "./Histogram"
import {
	CategoryFilterState,
	CountryCode,
	CountryScore,
} from "../data/datasets/datasetsMapping"

type props = {
	categoriesFilterState: Array<CategoryFilterState>
	countriesScores: Map<CountryCode, CountryScore> | undefined
}

function Graphs({ categoriesFilterState, countriesScores }: props) {
	return (
		<>
			<ParallelCoords
				categoriesFilterState={categoriesFilterState}
				countriesScores={countriesScores}
			/>
			<Histogram />
		</>
	)
}

export default Graphs
