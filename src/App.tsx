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
    const [isAnyRangesSelected, setIsAnyRangesSelected] = useState<boolean>(false)
	const [pcSelectionExists, setPcSelectionExists] = useState<boolean>(false)


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

        const isRanges = newCategoriesFilterState.filter(filter => filter.range && filter.range.length > 0).length > 0;
        setIsAnyRangesSelected(isRanges)
    }

    function addFilterState(
        selectedCategory: Category,
        importanceFactor: number,
        matrix: Map<string, number> | null,
    ) {
        if (!matrix) return

        const categoryFilterState = {
            category: selectedCategory,
            importanceFactor: importanceFactor,
            matrix: matrix,
            range: []
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

    function setFilterRange(
        selectedCategory: Category,
        range: Array<Array<number>>
    ) {
        let newCategoriesFilterState = [...categoriesFilterState]

        let filterIndex = newCategoriesFilterState.findIndex(
            (filter) => filter.category === selectedCategory
        )

        newCategoriesFilterState[filterIndex].range = range;

        const isRanges = newCategoriesFilterState.filter(filter => filter.range && filter.range.length > 0).length > 0;

        if (countriesScores) {
            const newCountriesScores = new Map(countriesScores)

            newCountriesScores.forEach(countryElement => {
                const entries = Array.from(countryElement.scores)
                countryElement.isIncluded = true

                for(let i=0; i<entries.length; i++ ){
                    let filterIndex = newCategoriesFilterState.findIndex(
                        (filter) => filter.category === entries[i][0]
                    )
                    const currentRanges = newCategoriesFilterState[filterIndex].range
                    const countryScore = entries[i][1]
                    let isInRange = false;
                    if(currentRanges && currentRanges.length >0) {
                        currentRanges.forEach(range => {
                            if(countryScore*100 >= range[0] && countryScore*100 <= range[1]){
                                isInRange = true;
                            }
                        })
                        if(!isInRange) {
                            countryElement.isIncluded = false;
                            break;
                        }
                    }
                }
            })
            setCountriesScores(newCountriesScores);
        }

        setCategoriesFilterState(newCategoriesFilterState);
        setIsAnyRangesSelected(isRanges)
    }




    return (
        <div className="main-panel">
            <WorldMap
                countriesScores={countriesScores}
                topScoreCountries={topScoreCountries}
                isAnyRangesSelected={isAnyRangesSelected}
                pcSelectionExists={pcSelectionExists}
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
                setFilterRange={setFilterRange}
                isAnyRangesSelected={isAnyRangesSelected}
                pcSelectionExists={pcSelectionExists}
                setPcSelectionExists={setPcSelectionExists}
            />
        </div>
    )
}

export default App
