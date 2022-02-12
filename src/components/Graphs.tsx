import React, { useEffect, useState } from "react"
import ParallelCoords from "./ParallelCoords"
import Histogram from "./Histogram"
import { getNumbersFromMap, isEmptyObj } from "./functions/helpers";

type props = {
	countriesValues: Map<string, number> | {},
}

function Graphs({ countriesValues }: props) {
	const [selectedCategory, setSelectedCategory] = useState<String>("Air pollution");
	const [selectedRanges, setSelectedRanges] = useState<Number[]>([]);
	const [histogramData, setHistogramData] = useState<Number[]>([]);

	useEffect(() => {
		if (countriesValues && !isEmptyObj(countriesValues)) {
			setHistogramData(getNumbersFromMap(countriesValues));
		}
	}, [countriesValues])

	// TEMP functionn before multiple categories and ranges are added
	const removeSelectedRange = (range: Number) => {
		setSelectedRanges(selectedRanges => selectedRanges.filter(element => element !== range));
	}

	// TEMP functionn before multiple categories and ranges are added
	const addSelectedRange = (range: Number) => {
		if (selectedRanges.indexOf(range) === -1) {
			const newList = selectedRanges.slice();
			newList.push(range);
			setSelectedRanges(newList)
		}
	}

	return (
		<>
			<ParallelCoords />
			<Histogram
				data={histogramData}
				category={selectedCategory}
				selected={selectedRanges}
				removeSelectedRange={removeSelectedRange}
				addSelectedRange={addSelectedRange} />
		</>
	)
}

export default Graphs
