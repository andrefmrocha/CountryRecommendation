import React from "react"
import * as d3 from "d3"
import { useD3 } from "./hooks/useD3"
import {
	CategoryFilterState,
	CountryCode,
	CountryScore,
	Percentile,
} from "../data/datasets/datasetsMapping"

type props = {
	categoriesFilterState: Array<CategoryFilterState>
	countriesScores: Map<CountryCode, CountryScore> | undefined
}

function ParallelCoords({ categoriesFilterState, countriesScores }: props) {
	const ref = useD3(
		(container) => {
			if (!countriesScores || categoriesFilterState.length === 0) return

			var margin = { top: 30, right: 20, bottom: 20, left: 40 },
				width = 800 - margin.left - margin.right,
				height = 354 - margin.top - margin.bottom,
				innerHeight = height - 2

			var devicePixelRatio = window.devicePixelRatio || 1

			var normalColor = d3
				.scaleOrdinal()
				.domain(["1%", "10%", "50%", "100%"])
				.range(["#08519C", "#3182BD", "#6BAED6", "#BDD7E7"])

			let color = (percentile: Percentile, isIncluded: boolean) => {
				// if (isIncluded) return normalColor(percentile)
				// else return "#cecece"
				return isIncluded ? "#0ead69" : "#cecece"
			}

			var types = {
				Number: {
					key: "Number",
					coerce: function (d: number) {
						return Math.max(d, 0) * 100
					},
					extent: d3.extent,
					within: function (d: number, extent: Array<number>, dim: any) {
						const value = dim.type.coerce(d)
						return (
							extent[0] <= dim.scale(value) && dim.scale(value) <= extent[1]
						)
					},
					defaultScale: d3.scaleLinear().range([innerHeight, 0]),
				},
			}

			var dimensions = categoriesFilterState.map(
				({ category, importanceFactor, matrix }) => {
					return {
						key: category,
						description: category,
						type: types["Number"],
						domain: [0, 100],
						scale: d3.scaleLinear().domain([0, 100]).range([innerHeight, 0]),
						brush: d3.brush(),
					}
				}
			)

			var xscale = d3
				.scalePoint<number>()
				.domain(d3.range(dimensions.length))
				.range([0, width])

			var yAxis = d3.axisLeft(d3.scaleLinear().range([innerHeight, 0]))

			container.select("svg").remove()
			container.select("canvas").remove()

			let svg = container
				.append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")")

			var canvas = container
				.append("canvas")
				.attr("width", width * devicePixelRatio)
				.attr("height", height * devicePixelRatio)
				.style("width", width + "px")
				.style("height", height + "px")
				.style("margin-top", margin.top + "px")
				.style("margin-left", margin.left + "px")

			var ctx = canvas.node()?.getContext("2d")

			if (!ctx) return

			ctx.globalCompositeOperation = "darken"
			ctx.globalAlpha = 0.15
			ctx.lineWidth = 1.5
			ctx.scale(devicePixelRatio, devicePixelRatio)

			var axes = svg
				.selectAll(".axis")
				.data(dimensions)
				.enter()
				.append("g")
				.attr("class", function (d) {
					return "axis " + d.key.replace(/ /g, "_")
				})
				.attr("transform", function (d, i) {
					return "translate(" + xscale(i) + ")"
				})

			// type/dimension default setting happens here
			dimensions.forEach(function (dim) {
				dim.scale.domain(dim.domain)
			})

			render(ctx, countriesScores)

			axes
				.append("g")
				.each(function (d) {
					var renderAxis = yAxis.scale(d.scale) // default axis
					d3.select(this).call(renderAxis)
				})
				.append("text")
				.attr("class", "title")
				.attr("text-anchor", "start")
				.text(function (d) {
					return "description" in d ? d.description : d.key
				})

			// Add and store a brush for each axis.
			axes
				.append("g")
				.attr("class", "brush")
				.each(function (d) {
					d3.select(this).call(
						(d.brush = d3
							.brushY()
							.extent([
								[-10, 0],
								[10, innerHeight],
							])
							.on("start", brushstart)
							.on("brush", brush)
							.on("end", brush))
					)
				})
				.selectAll("rect")
				.attr("x", -8)
				.attr("width", 16)

			d3.selectAll(".axis.pl_discmethod .tick text").style("fill", "#EFF3FF")

			function render(
				ctx: CanvasRenderingContext2D,
				data: Map<CountryCode, CountryScore>
			) {
				ctx.clearRect(0, 0, width, height)
				ctx.globalAlpha =
					d3.min([1.15 / Math.pow(categoriesFilterState.length, 0.3), 1]) || 1

				// Draw the highlighted lines last
				data.forEach((score) => {
					if (!score.isIncluded) draw(score)
				})
				data.forEach((score) => {
					if (score.isIncluded) draw(score)
				})
			}

			function project(
				data: CountryScore
			): Array<[number | undefined, number] | null> {
				return dimensions.map(function (p, i) {
					const score = data.scores.get(p.key)

					if (score === undefined) return null

					return [xscale(i), p.scale(p.type.coerce(score))]
				})
			}

			function draw(data: CountryScore) {
				if (!ctx) return

				ctx.strokeStyle = color(data.percentile, data.isIncluded) as string
				ctx.beginPath()
				var coords = project(data)

				coords.forEach(function (p, i) {
					if (!ctx) return

					// this tricky bit avoids rendering null values as 0
					if (p === null) {
						// this bit renders horizontal lines on the previous/next
						// dimensions, so that sandwiched null values are visible
						if (i > 0) {
							var prev = coords[i - 1]
							if (prev !== null) {
								ctx.moveTo(prev[0] || 0, prev[1])
								ctx.lineTo((prev[0] || 0) + 6, prev[1])
							}
						}
						if (i < coords.length - 1) {
							var next = coords[i + 1]
							if (next !== null) {
								ctx.moveTo((next[0] || 0) - 6, next[1])
							}
						}
						return
					}

					if (i == 0) {
						ctx.moveTo(p[0] || 0, p[1])
						return
					}

					ctx.lineTo(p[0] || 0, p[1])
				})
				ctx.stroke()
			}

			function brushstart(event: any) {
				// @ts-ignore
				event.sourceEvent.stopPropagation()
			}

			// Handles a brush event, toggling the display of foreground lines.
			function brush() {
				if (!ctx || !countriesScores) return

				var actives: Array<any> = []
				svg
					.selectAll(".axis .brush")
					// @ts-ignore
					.filter(function (d) {
						// @ts-ignore
						return d3.brushSelection(this)
					})
					.each(function (d) {
						actives.push({
							dimension: d,
							// @ts-ignore
							extent: d3.brushSelection(this),
						})
					})

				countriesScores?.forEach(function (
					countryScore: CountryScore,
					key: CountryCode
				) {
					let isIncluded = actives.every(function (active) {
						var dim = active.dimension
						// test if point is within extents for each active brush
						return dim.type.within(
							countryScore.scores.get(dim.key),
							active.extent,
							dim
						)
					})

					countriesScores.set(key, {
						...countryScore,
						isIncluded: isIncluded,
					})
				})

				render(ctx, countriesScores)
			}
		},
		[categoriesFilterState, countriesScores]
	)

	return <div className="parallel-panel" ref={ref}></div>
}

export default ParallelCoords
