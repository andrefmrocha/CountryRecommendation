import React, { useState } from "react"
import "./App.scss"
import "./sass/common.scss"
import WorldMap from "./components/WorldMap"
import Selection from "./components/Selection"
import Graphs from "./components/Graphs"
import {
	CategoryFilterState,
	Category,
	CountryCode,
	CountryScore,
	countryCodes,
} from "./data/datasets/datasetsMapping"

function getPercentile(position: number, total: number) {
	const relativePosition = position / total

	if (relativePosition < 0.01) {
		return "1%"
	} else if (relativePosition < 0.1) {
		return "10%"
	} else if (relativePosition < 0.5) {
		return "50%"
	} else {
		return "100%"
	}
}

function App() {
	const [categoriesFilterState, setCategoriesFilterState] = useState<
		Array<CategoryFilterState>
	>([])
	const [countriesScores, setCountriesScores] =
		useState<Map<CountryCode, CountryScore>>()
	const [topScoreCountries, setTopScoreCountries] = useState<
		Array<CountryScore> | []
	>([])
	const [selectedCountries, setSelectedCountries] = useState<
		Array<CountryCode>
	>([])

	function updateCountryScores(state: CategoryFilterState[]) {
		let newCountriesScores: Map<CountryCode, CountryScore> = new Map<
			CountryCode,
			CountryScore
		>()
		let countryArray: Array<any> = []

		let sumFactors =
			state.reduce(
				(sum, { category, importanceFactor, matrix }) => sum + importanceFactor,
				0
			) || 1

		countryCodes.forEach((code) => {
			let overallScore = 0.0
			let scores: Map<Category, number> = new Map<Category, number>()

			state.forEach(({ category, importanceFactor, matrix }) => {
				scores.set(category, matrix?.get(code) || 0)
				overallScore +=
					(matrix?.get(code) || 0) * (importanceFactor / sumFactors)
			})

			countryArray.push({
				code: code,
				scores: scores,
				overallScore: overallScore,
			})
		})

		countryArray.sort((a, b) => b.overallScore - a.overallScore)

		countryArray.forEach(({ code, scores, overallScore }, index) =>
			newCountriesScores.set(code, {
				code: code,
				overallScore: overallScore,
				scores: scores,
				percentile: getPercentile(index, countryArray.length),
				isIncluded: countriesScores?.get(code)?.isIncluded || false,
			})
		)

		let newTopScoreCountries = countryArray
			.slice(0, 5)
			.map(({ code, scores, overallScore }, index) => {
				return {
					code: code,
					overallScore: overallScore,
					scores: scores,
					percentile: getPercentile(index, countryArray.length),
					isIncluded: countriesScores?.get(code)?.isIncluded || false,
				} as CountryScore
			})

		setCountriesScores(newCountriesScores)
		setTopScoreCountries(newTopScoreCountries)
	}

	function removeFilterState(selectedCategory: Category) {
		let newCategoriesFilterState = categoriesFilterState.filter(
			(filter) => filter.category !== selectedCategory
		)

		updateCountryScores(newCategoriesFilterState)
		setCategoriesFilterState(newCategoriesFilterState)
	}

	function addFilterState(
		selectedCategory: Category,
		importanceFactor: number,
		matrix: Map<string, number> | null
	) {
		if (!matrix) return

		const categoryFilterState = {
			category: selectedCategory,
			importanceFactor: importanceFactor,
			matrix: matrix,
			range: [],
		}

		let newCategoriesFilterState = [...categoriesFilterState]

		let filterIndex = newCategoriesFilterState.findIndex(
			(filter) => filter.category === selectedCategory
		)

		if (filterIndex < 0) {
			newCategoriesFilterState.push(categoryFilterState)
		} else {
			newCategoriesFilterState[filterIndex] = categoryFilterState
		}

		updateCountryScores(newCategoriesFilterState)
		setCategoriesFilterState(newCategoriesFilterState)
	}

	return (
		<div className="main-panel">
			<WorldMap
				countriesScores={countriesScores}
				topScoreCountries={topScoreCountries}
				selectedCountries={selectedCountries}
			/>
			<Selection
				categoriesFilterState={categoriesFilterState}
				addFilterState={addFilterState}
				removeFilterState={removeFilterState}
				setCategoriesFilterState={setCategoriesFilterState}
			/>
			<Graphs
				categoriesFilterState={categoriesFilterState}
				countriesScores={countriesScores}
				setCategoriesFilterState={setCategoriesFilterState}
				setSelectedCountries={setSelectedCountries}
			/>
		</div>
	)
}

export default App
