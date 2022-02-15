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
	setCategoriesFilterState: React.Dispatch<
		React.SetStateAction<CategoryFilterState[]>
	>
	setSelectedCountries: React.Dispatch<
		React.SetStateAction<Array<CountryCode> | []>
	>
}

function Graphs({
	categoriesFilterState,
	countriesScores,
	setCategoriesFilterState,
	setSelectedCountries,
}: props) {
	const [selectedCategory, setSelectedCategory] = useState<Category>(
		categoriesFilterState[0]?.category
	)
	const [histogramRanges, setHistogramRanges] = useState<Array<FilterRange>>()
	const [parallelCoordsRanges, setParallelCoordsRanges] =
		useState<Array<FilterRange>>()

	useEffect(() => {
		let selectedCountries: Array<CountryCode> = []

		countryCodes.forEach((code) => {
			const country = countriesScores?.get(code)
			let notIncluded = false

			histogramRanges?.forEach(({ category, range }) => {
				const score = (country?.scores.get(category) || 0) * 100

				if (
					range.length > 0 &&
					range[0] !== undefined &&
					range[1] !== undefined
				)
					notIncluded = notIncluded || score < range[0] || score > range[1]
			})

			parallelCoordsRanges?.forEach(({ category, range }) => {
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
	}, [histogramRanges, parallelCoordsRanges])

	useEffect(() => {
		const newRanges =
			histogramRanges?.filter(({ category, range }) =>
				categoriesFilterState.some(
					({ category: stateCategory, importanceFactor, matrix }) =>
						stateCategory === category
				)
			) || []

		setHistogramRanges(newRanges)
		setParallelCoordsRanges(newRanges)
	}, [categoriesFilterState])

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

	const changeFilterRange = (
		category: Category,
		newRange: [number, number] | [],
		ranges: FilterRange[] | undefined,
		stateFunc: React.Dispatch<React.SetStateAction<FilterRange[] | undefined>>
	) => {
		const newFilterRange = {
			category: category,
			range: newRange,
		}

		if (!ranges) {
			if (newRange !== []) stateFunc([newFilterRange])

			return
		}

		let newRanges = [...ranges]

		if (newRange === []) {
			stateFunc(newRanges.filter((range) => range.category !== category))

			return
		}

		const filterIndex = ranges?.findIndex(
			(range) => range.category === category
		)

		if (filterIndex < 0) newRanges.push(newFilterRange)
		else newRanges[filterIndex] = newFilterRange

		stateFunc(newRanges)
	}

	const changeFilterRangeFromHist = (
		category: Category,
		newRange: [number, number] | []
	) => {
		changeFilterRange(
			category,
			newRange,
			parallelCoordsRanges,
			setParallelCoordsRanges
		)
		changeFilterRange(category, newRange, histogramRanges, setHistogramRanges)
	}

	const changeFilterRangeFromPC = (
		category: Category,
		newRange: [number, number] | []
	) => {
		changeFilterRange(category, newRange, histogramRanges, setHistogramRanges)
	}

	return (
		<>
			{parallelCoordsRanges && (
				<ParallelCoords
					categoriesFilterState={categoriesFilterState}
					countriesScores={countriesScores}
					parallelCoordsRanges={parallelCoordsRanges}
					setSelectedCategory={setSelectedCategory}
					histogramRangeExist={!!histogramRanges && histogramRanges.length > 0}
					changeFilterRange={changeFilterRangeFromPC}
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
