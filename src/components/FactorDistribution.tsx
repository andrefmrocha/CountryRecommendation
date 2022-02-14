import React, { useState, useEffect } from "react"
import { CategoryFilterState } from "../data/datasets/datasetsMapping"

type props = {
	categoriesFilterState: Array<CategoryFilterState>
}

function FactorDistribution({ categoriesFilterState }: props) {
	const [categorySegments, setCategorySegments] = useState<Array<JSX.Element>>(
		[]
	)

	useEffect(() => {
		if (categoriesFilterState.length === 0) setCategorySegments([])

		// console.log(categoriesFilterState)

		let factorSum =
			categoriesFilterState.reduce(
				(sum, { category, importanceFactor, matrix }) => sum + importanceFactor,
				0
			) || 1

		setCategorySegments(
			categoriesFilterState
				.filter((state) => state.importanceFactor > 0)
				.map(({ category, importanceFactor, matrix }) => {
					const percentage = (importanceFactor / factorSum) * 100

					return (
						<div
							className="category-segment"
							style={{ width: `${percentage}%` }}
						>
							<span>{`${category}: ${percentage.toPrecision(4)}%`}</span>
						</div>
					)
				})
		)
	}, [categoriesFilterState])

	return (
		<div className="importance-factor-distribution">
			<label>Importance Factor Distribution</label>
			<div className="distribution-bar">{categorySegments}</div>
		</div>
	)
}

export default FactorDistribution
