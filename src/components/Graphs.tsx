import React from "react"
import ParallelCoords from "./ParallelCoords"
import Histogram from "./Histogram"

type props = {
	countriesValues: Map<string, number> | undefined
}

function Graphs({ countriesValues }: props) {
	return (
		<>
			<ParallelCoords countriesValues={countriesValues} />
			<Histogram />
		</>
	)
}

export default Graphs
