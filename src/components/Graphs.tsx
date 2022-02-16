import React, { useEffect, useState } from "react"
import ParallelCoords from "./ParallelCoords"
import Histogram from "./Histogram.js"
import {
	CategoryFilterState,
	CountryCode,
	CountryScore,
	countryCodes,
	FilterRange,
	Category,
} from "../data/datasets/datasetsMapping"

type props = {
	categoriesFilterState: Array<CategoryFilterState>
	countriesScores: Map<CountryCode, CountryScore> | undefined
	hoveredCountry: CountryCode | undefined
	setSelectedCountries: React.Dispatch<
		React.SetStateAction<Array<CountryCode> | []>
	>
}

function Graphs({
	categoriesFilterState,
	countriesScores,
	setSelectedCountries,
	hoveredCountry,
}: props) {
	const [selectedCategory, setSelectedCategory] = useState<Category>(
		categoriesFilterState[0]?.category
	)
	const [histogramRanges, setHistogramRanges] = useState<Array<FilterRange>>()
	const [parallelCoordsRanges, setParallelCoordsRanges] =
		useState<Array<FilterRange>>()

	useEffect(() => {
		const newRanges =
			combineRanges(histogramRanges, parallelCoordsRanges)?.filter(
				({ category, range }) =>
					categoriesFilterState.some(
						({ category: stateCategory, importanceFactor, matrix }) =>
							stateCategory === category
					)
			) || []

		setHistogramRanges(newRanges)
		setParallelCoordsRanges(newRanges)
	}, [categoriesFilterState])

	useEffect(() => {
		if(categoriesFilterState && !selectedCategory) {
			setSelectedCategory(categoriesFilterState[0]?.category)
		}
	},[categoriesFilterState])

	const updateSelectedCountries = (range: FilterRange[] | undefined) => {
		let selectedCountries: Array<CountryCode> = []

		countryCodes.forEach((code) => {
			const country = countriesScores?.get(code)
			let notIncluded = false

			range?.forEach(({ category, range }) => {
				const score = (country?.scores.get(category) || 0) * 100

				if (
					range.length > 0 &&
					range[0] !== undefined &&
					range[1] !== undefined
				)
					notIncluded = notIncluded || score < range[0] || score > range[1]
			})

			if (!notIncluded) selectedCountries.push(code)
		})

		setSelectedCountries(selectedCountries)
	}

	const combineRanges = (
		primary: FilterRange[] | undefined,
		secondary: FilterRange[] | undefined
	) => {
		if (!primary) return secondary

		let combination = [...primary]

		secondary?.forEach(({ category, range }) => {
			if (!combination.some((c) => c.category === category))
				combination.push({ category, range })
		})

		return combination
	}

	const getCategoryRange = (
		filterRanges: Array<FilterRange>,
		category: Category
	) => {
		const filterIndex = filterRanges.findIndex(
			(filter) => filter.category === category
		)

		return filterRanges[filterIndex]?.range
			? filterRanges[filterIndex]?.range
			: []
	}

	const changeFilterRangeFromHist = (
		category: Category,
		newRange: [number, number] | []
	) => {
		let ranges = combineRanges(histogramRanges, parallelCoordsRanges)
		const newFilterRange = {
			category: category,
			range: newRange,
		}

		if (!ranges) {
			if (newRange !== []) setParallelCoordsRanges([newFilterRange])

			return
		}

		let newRanges = [...ranges]

		const filterIndex = ranges?.findIndex(
			(range) => range.category === category
		)

		if (filterIndex < 0) newRanges.push(newFilterRange)
		else newRanges[filterIndex] = newFilterRange

		setParallelCoordsRanges(newRanges)
		setHistogramRanges(newRanges)
		updateSelectedCountries(newRanges)
	}

	const changeFilterRangesFromPC = (newRanges: Array<FilterRange>) => {
		let ranges = combineRanges(newRanges, histogramRanges)

		setHistogramRanges(ranges)
		updateSelectedCountries(ranges)
	}

	return (
		<>
			{parallelCoordsRanges && (
				<ParallelCoords
					categoriesFilterState={categoriesFilterState}
					countriesScores={countriesScores}
					parallelCoordsRanges={parallelCoordsRanges}
					setSelectedCategory={setSelectedCategory}
					changeFilterRanges={changeFilterRangesFromPC}
					hoveredCountry={hoveredCountry}
				/>
			)}
			{histogramRanges && (
				<Histogram
					countriesScores={countriesScores}
					category={selectedCategory}
					range={getCategoryRange(histogramRanges, selectedCategory)}
					changeFilterRange={changeFilterRangeFromHist}
				/>
			)}
		</>
	)
}

export default Graphs
