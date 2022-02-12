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
	calculate: (datasetMappingByTheme: ThemeMappingItem[]) => void
}

function ParameterSelection({
	selectedCategory,
	categoriesFilterState,
	includeCategory,
	calculate,
}: props) {
	const [parameters, setParameters] = useState<Array<ThemeMappingItem>>()

	useEffect(() => {
		if (!selectedCategory) return

		const params: Array<ThemeMappingItem> =
			datasetsMappingByTheme[selectedCategory]

		setParameters(params)
	}, [selectedCategory])

	function onClick() {
		if (parameters) calculate(parameters)
	}

	function getParameters() {
		return parameters?.map((parameter, index) => (
			<div className="parameter">
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

	return (
		<div className="parameter-panel">
			<label htmlFor="parameters">{selectedCategory} Parameters</label>
			<section className="parameters-selection">{getParameters()}</section>
			<button disabled={!includeCategory} onClick={onClick}>
				Calculate
			</button>
		</div>
	)
}

export default ParameterSelection
