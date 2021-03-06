import React, { useState, useEffect } from "react"
import {
	datasetsMappingByTheme,
	ThemeMappingItem,
	Category,
	CategoryFilterState,
} from "../data/datasets/datasetsMapping"
import Checkbox from "./common/Checkbox"
import InfoIcon from "./common/InfoIcon"

type props = {
	selectedCategory: Category | undefined
	includeCategory: boolean
	categoriesFilterState: Array<CategoryFilterState>
	addCategory: (datasetMappingByTheme: ThemeMappingItem[]) => void
	removeCategory: () => void
}

function ParameterSelection({
	selectedCategory,
	categoriesFilterState,
	includeCategory,
	addCategory,
	removeCategory,
}: props) {
	const [parameters, setParameters] = useState<Array<ThemeMappingItem>>()

	useEffect(() => {
		if (!selectedCategory) return

		const params: Array<ThemeMappingItem> =
			datasetsMappingByTheme[selectedCategory]

		const previousParams = categoriesFilterState.find(
			(state) => state.category === selectedCategory
		)?.parameters

		setParameters(
			params.map((param) => {
				return {
					...param,
					isUsed: !!previousParams?.some(
						(prevParam: string) => prevParam === param.name
					),
				}
			})
		)
	}, [selectedCategory, categoriesFilterState])

	function onClick() {
		if (
			parameters &&
			parameters.some((parameter) => parameter.isUsed) &&
			includeCategory
		)
			addCategory(parameters)
		else if (
			!includeCategory &&
			!!categoriesFilterState.find(
				(state) => state.category === selectedCategory
			)
		)
			removeCategory()
	}

	function getParameters() {
		return parameters?.map((parameter, index) => (
			<div className="parameter" key={index}>
				<Checkbox
					checked={parameter.isUsed}
					disabled={!includeCategory}
					onClick={() => {
						setParameters([
							...parameters.map((param) => {
								return {
									...param,
									isUsed:
										param.name !== parameter.name
											? param.isUsed
											: !param.isUsed,
								}
							}),
						])
					}}
					type="small"
				/>
				<p>{parameter.name}</p>
				<InfoIcon
					parameter={parameter.name}
					dataset={parameter.dataset}
					fields={parameter.fields}
				/>
			</div>
		))
	}

	function getButton() {
		return includeCategory ? (
			<button
				onClick={onClick}
				disabled={
					parameters && !parameters.some((parameter) => parameter.isUsed)
				}
			>
				Calculate
			</button>
		) : (
			<button
				onClick={onClick}
				disabled={
					!categoriesFilterState.some(
						(state) => state.category === selectedCategory
					)
				}
			>
				Remove
			</button>
		)
	}

	return (
		<div className="parameter-panel">
			<label htmlFor="parameters">{selectedCategory} Parameters</label>
			<section className="parameters-selection">{getParameters()}</section>
			{getButton()}
		</div>
	)
}

export default ParameterSelection
