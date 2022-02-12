import { useEffect, useRef } from "react";
import * as d3 from "d3";


function Histogram({ data, category, selected, removeSelectedRange, addSelectedRange }) {
	const ref = useRef();
	const margin = { top: 15, right: 30, bottom: 20, left: 30 }
	const width = 540 - margin.left - margin.right;
	const height = 330 - margin.top - margin.bottom;
	const groups = [0, 20, 40, 60, 80];

	useEffect(() => {
		const svg = d3.select(ref.current)
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform",
				`translate(${margin.left},${margin.top})`);
	}, []);

	useEffect(() => {
		if (data && data.length > 0) {
			draw(data);
		}
	}, [data, selected]);

	const draw = (data) => {

		const svg = d3.select(ref.current).select('g');
		svg.selectAll("*").remove();

		svg.append('text')
			.text(category)
			.attr("class", "category-text")


		const xScale = d3.scaleLinear()
			.domain([0, 100])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
			.range([0, width]);

		var x = d3.scaleBand()
			.range([0, width])
			.domain(groups.map(function (d) { return d; }))
			.padding(0.5);

		svg.append("g")
			.attr("transform", `translate(0, ${height})`)
			.call(d3.axisBottom(x))
			.selectAll("text")
			.text(function (d) { return `[${d},${d + 20}${d !== 80 ? "[" : "]"}`; })

		let histogram = d3.bin()
			.value(function (d) { return d; })
			.domain(xScale.domain())
			.thresholds(5);

		let bins = histogram(data);

		let yScale = d3.scaleLinear().range([height, 0]);

		yScale.domain([0, d3.max(bins, function (d) { return d.length; })]);   // d3.hist has to be called before the Y axis obviously

		svg.append("g")
			.call(d3.axisLeft(yScale))
			.append("text")
			.attr("class", "y-label")
			.attr("id", "axis")
			.attr("text-anchor", "end")
			.text("Count");


		svg.selectAll("rect")
			.data(bins)
			.enter().append("rect")
			.attr("class", function (d) {console.log(selected); return selected.indexOf(d.x0) === -1 ? "histogram-bar" : "histogram-bar selected" })
			.attr("x", function (d) { return x(d.x0) })
			.attr("y", function (d) { return yScale(d.length); })
			.attr("width", x.bandwidth())
			.attr("height", function (d) { return height - yScale(d.length); })
			.on("click",function(e, d){console.log(selected); selected.indexOf(d.x0) === -1 ? addSelectedRange(d.x0) : removeSelectedRange(d.x0)} );
	}

	return (
		<div className="histogram-panel">
			<svg ref={ref}>
			</svg>
		</div>

	)
}

export default Histogram;
