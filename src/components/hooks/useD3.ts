import React, { useRef, useEffect } from "react"
import * as d3 from "d3"

export const useD3 = (
	renderElem: (
		d3select: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>
	) => void,
	dependencies: React.DependencyList
) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// @ts-ignore
		renderElem(d3.select(ref.current))
		return () => {}
	}, dependencies)

	return ref
}
