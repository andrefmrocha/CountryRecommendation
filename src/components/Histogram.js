import { useEffect, useRef } from "react"
import * as d3 from "d3"
import { countryCodes } from "../data/datasets/datasetsMapping"

function Histogram({ countriesScores, category, range, changeFilterRange }) {
	const ref = useRef()
	const margin = { top: 30, right: 30, bottom: 20, left: 30 }
	const width = 540 - margin.left - margin.right
	const height = 330 - margin.top - margin.bottom
	const groups = [0, 20, 40, 60, 80]

	const isAllIncluded = (data) => {
		return data.filter((element) => !element.isIncluded).length === 0
	}

	const isIncluded = (score) => {
		if (!score || range?.length === 0) return false

		if (score >= range[0] && score <= range[1]) {
			return true
		}

		return false
	}

	const isSelected = (interval) => {
		if (range?.length === 0) {
			return false
		}

		if (interval[0] >= range[0] && interval[1] <= range[1]) {
			return true
		}

		return false
	}

	const getIncludedPercentage = (bin) => {
		let count = 0
		let includedCount = 0
		for (let i = 0; i < bin.length; i++) {
			if (bin[i] && bin[i].isIncluded !== undefined) {
				count += 1
				if (bin[i].isIncluded) {
					includedCount += 1
				}
			}
		}
		return includedCount / count
	}

	useEffect(() => {
		const svg = d3
			.select(ref.current)
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", `translate(${margin.left},${margin.top})`)
	}, [])

	useEffect(() => {
		if (countriesScores) {
			const data = Array.from(countryCodes, (code) => ({
				score: countriesScores.get(code)?.scores.get(category) || 0,
				isIncluded: countriesScores.get(code)?.isIncluded,
			}))
			draw(data)
		}
	}, [countriesScores, category, range])

	useEffect(() => {
		countriesScores?.forEach(function (countryScore, key) {
			countriesScores.set(key, {
				...countryScore,
				isIncluded:
					countriesScores.get(key)?.isIncluded ||
					isIncluded(countriesScores.get(key)?.scores.get(category)),
			})
		})
	}, [category, range])

	const draw = (data) => {
		const svg = d3.select(ref.current).select("g")
		svg.selectAll("*").remove()

		svg.append("text").text(category).attr("class", "category-text")

		const xScale = d3
			.scaleLinear()
			.domain([0, 100]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
			.range([0, width])

		var x = d3
			.scaleBand()
			.range([0, width])
			.domain(
				groups.map(function (d) {
					return d
				})
			)
			.padding(0.5)

		svg
			.append("g")
			.attr("transform", `translate(0, ${height})`)
			.call(d3.axisBottom(x))
			.selectAll("text")
			.text(function (d) {
				return `[${d},${d + 20}${d !== 80 ? "[" : "]"}`
			})

		let histogram = d3
			.bin()
			.value(function (d) {
				return d.score * 100.0
			})
			.domain(xScale.domain())
			.thresholds(5)

		let bins = histogram(data)

		let yScale = d3.scaleLinear().range([height, 0])

		yScale.domain([
			0,
			d3.max(bins, function (d) {
				return d.length
			}),
		]) // d3.hist has to be called before the Y axis obviously

		svg
			.append("g")
			.call(d3.axisLeft(yScale))
			.append("text")
			.attr("class", "y-label")
			.attr("id", "axis")
			.attr("text-anchor", "end")
			.text("Count")

		const notSelected = svg.append("g")

		notSelected
			.selectAll("rect")
			.data(bins)
			.enter()
			.append("rect")
			.attr("class", function (d) {
				return "histogram-bar"
			})
			.attr("x", function (d) {
				return x(d.x0)
			})
			.attr("y", function (d) {
				return yScale(d.length)
			})
			.attr("width", x.bandwidth())
			.attr("height", function (d) {
				return height - yScale(d.length)
			})
			.on("click", function (e, d) {
				return isSelected([d.x0, d.x1 - 0.0000000000000001])
					? changeFilterRange(category, [])
					: changeFilterRange(category, [
							d.x0,
							d.x1 !== 100 ? d.x1 - 0.0000000000000001 : d.x1,
					  ])
			})

		const selected = svg.append("g")

		selected
			.selectAll("rect")
			.data(bins)
			.enter()
			.append("rect")
			.attr("class", function (d) {
				return "histogram-bar selected"
			})
			.attr("x", function (d) {
				return x(d.x0)
			})
			.attr("y", function (d) {
				return (
					yScale(d.length) +
					(height - yScale(d.length)) -
					(height - yScale(d.length)) * getIncludedPercentage(d)
				)
			})
			.attr("width", x.bandwidth())
			.attr("height", function (d) {
				return !isAllIncluded(data)
					? (height - yScale(d.length)) * getIncludedPercentage(d)
					: 0
			})
			.on("click", function (e, d) {
				return isSelected([d.x0, d.x1 - 1e-15])
					? changeFilterRange(category, [])
					: changeFilterRange(category, [
							d.x0,
							d.x1 !== 100 ? d.x1 - 1e-15 : d.x1,
					  ])
			})
	}

	return (
		<div className="histogram-panel">
			<svg ref={ref}></svg>
		</div>
	)
}

export default Histogram
