import React from "react"
import * as d3 from "d3"
import { useD3 } from "./hooks/useD3"

type props = {
	countriesValues: Map<string, number> | undefined
}

function ParallelCoords({ countriesValues }: props) {
	const ref = useD3(
		(container) => {
			if (!countriesValues) return

			var margin = { top: 30, right: 30, bottom: 30, left: 30 },
				width = 800 - margin.left - margin.right,
				height = 354 - margin.top - margin.bottom,
				innerHeight = height - 2

			var devicePixelRatio = window.devicePixelRatio || 1

			var color = "#0EAD69"

			var types = {
				Number: {
					key: "Number",
					coerce: function (d: number) {
						return +d
					},
					extent: d3.extent,
					within: function (d: number, extent: Array<number>, dim: any) {
						return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1]
					},
					defaultScale: d3.scaleLinear().range([innerHeight, 0]),
				},
			}

			var dimensions = [
				{
					key: "category_1",
					description: "Category",
					type: types["Number"],
					domain: [0, 100],
					scale: d3.scaleLinear().range([innerHeight, 0]),
				},
				{
					key: "category_2",
					description: "Category",
					type: types["Number"],
					domain: [0, 100],
					scale: d3.scaleLinear().range([innerHeight, 0]),
				},
				{
					key: "category_3",
					description: "Category",
					type: types["Number"],
					domain: [0, 100],
					scale: d3.scaleLinear().range([innerHeight, 0]),
				},
				{
					key: "category_4",
					description: "Category",
					type: types["Number"],
					domain: [0, 100],
					scale: d3.scaleLinear().range([innerHeight, 0]),
				},
				{
					key: "category_5",
					description: "Category",
					type: types["Number"],
					domain: [0, 100],
					scale: d3.scaleLinear().range([innerHeight, 0]),
				},
			]

			var xscale = d3
				.scalePoint<number>()
				.domain(d3.range(dimensions.length))
				.range([0, width])

			var yAxis = d3.axisLeft(
				d3.scaleLinear().domain([0, 100]).range([height, 0])
			)

			container
				.select("body")
				.append("div")
				.attr("class", "parcoords")
				.style("width", width + margin.left + margin.right + "px")
				.style("height", height + margin.top + margin.bottom + "px")

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

			var output = d3.select("body").append("pre")

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

			countriesValues.forEach((value, key) => {
				dimensions.forEach(function (p) {
					// Temporary logic
					countriesValues.set(key, p.type.coerce(value))
				})
			})

			// type/dimension default setting happens here
			dimensions.forEach(function (dim) {
				dim.scale.domain(dim.domain)
			})

			ctx.clearRect(0, 0, width, height)
			ctx.globalAlpha =
				d3.min([1.15 / Math.pow(countriesValues.size, 0.3), 1]) || 1
			render(countriesValues)

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
						// @ts-ignore
						(d.brush = d3
							.brushY()
							.extent([
								[-10, 0],
								[10, height],
							])
							.on("start", brushstart)
							.on("brush", brush)
							.on("end", brush))
					)
				})
				.selectAll("rect")
				.attr("x", -8)
				.attr("width", 16)

			d3.selectAll(".axis.pl_discmethod .tick text").style("fill", color)

			function render(data: any) {
				data.forEach((d: any) => {
					draw(d)
				})
			}

			function project(d: any) {
				console.log(d)
				return dimensions.map(function (p, i) {
					// check if data element has property and contains a value
					// if (!(p.key in d) || d[p.key] === null) return null

					return [xscale(i), p.scale(d * 100.0)]
				})
			}

			function draw(d: any) {
				if (!ctx) return

				ctx.strokeStyle = color
				ctx.beginPath()
				var coords = project(d)

				coords.forEach(function (p, i) {
					if (!ctx) return

					// this tricky bit avoids rendering null values as 0
					if (p === null) {
						// this bit renders horizontal lines on the previous/next
						// dimensions, so that sandwiched null values are visible
						if (i > 0) {
							var prev = coords[i - 1]
							if (prev !== null) {
								ctx.moveTo(prev[0] || 0, prev[1] || 1)
								ctx.lineTo((prev[0] || 0) + 6, prev[1] || 1)
							}
						}
						if (i < coords.length - 1) {
							var next = coords[i + 1]
							if (next !== null) {
								ctx.moveTo((next[0] || 0) - 6, next[1] || 1)
							}
						}
						return
					}

					if (i == 0) {
						ctx.moveTo(p[0] || 0, p[1] || 1)
						return
					}

					ctx.lineTo(p[0] || 0, p[1] || 1)
				})
				ctx.stroke()
			}

			function brushstart(this: SVGGElement, event: any, _: any) {
				event.sourceEvent.stopPropagation()
			}

			// Handles a brush event, toggling the display of foreground lines.
			function brush(this: SVGGElement, event: any, data: any) {
				event.render.invalidate()

				if (!ctx) return

				var actives: Array<any> = []
				svg
					.selectAll(".axis .brush")
					// @ts-ignore
					.filter(function (d) {
						return d3.brushSelection(this as SVGGElement)
					})
					.each(function (d) {
						actives.push({
							dimension: d,
							extent: d3.brushSelection(this as SVGGElement),
						})
					})

				var selected = data.filter(function (d: any) {
					if (
						actives.every(function (active: any) {
							var dim = active.dimension
							// test if point is within extents for each active brush
							return dim.type.within(d[dim.key], active.extent, dim)
						})
					) {
						return true
					}
				})

				ctx.clearRect(0, 0, width, height)
				ctx.globalAlpha =
					d3.min([0.85 / Math.pow(selected.length, 0.3), 1]) || 1
				render(selected)

				output.text(d3.tsvFormat(selected.slice(0, 24)))
			}
		},
		[countriesValues]
	)

	return <div className="parallel-panel" ref={ref}></div>
}

export default ParallelCoords
