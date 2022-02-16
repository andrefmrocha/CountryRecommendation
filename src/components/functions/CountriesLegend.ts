// @ts-ignore
import L, { Map as LeafletMap } from "leaflet"
import { useEffect } from "react"
import { getCountryNameFromISOCode } from "../../data/countryConversion"
import { CountryScore } from "../../data/datasets/datasetsMapping"

type props = {
	map: LeafletMap
	topScoreCountries: Array<CountryScore>
	visible: boolean
}

function CountriesLegend({ map, topScoreCountries, visible }: props) {
	useEffect(() => {
		if (map) {
			addLegend()
		}
	}, [map]) //here add map

	useEffect(() => {
		if (topScoreCountries && topScoreCountries.length > 0) {
			updateLegend()
		}
	}, [topScoreCountries])

	useEffect(() => {
		if (visible) {
			const wrapper = document.getElementById(
				"leaflet-control-countries-top-scores"
			)
			if (wrapper) {
				wrapper.style.display = "block"
				wrapper.style.opacity = "1"
			}
		} else {
			const wrapper = document.getElementById(
				"leaflet-control-countries-top-scores"
			)
			if (wrapper) {
				wrapper.style.display = "none"
				wrapper.style.opacity = "0"
			}
		}
	}, [visible])

	const addLegend = () => {
		// @ts-ignore
		const legend = L.control({ position: "bottomleft" })
		legend.onAdd = () => {
			let wrapper = L.DomUtil.create("div", "info legend")
			wrapper.id = "leaflet-control-countries-top-scores"

			wrapper.style.transition = "opacity 0.2s"
			wrapper.style.background = "#252525"
			wrapper.style.color = "#F7F7F7"
			wrapper.style.padding = "1.1em 1.5em"
			wrapper.style.borderRadius = "5px"
			wrapper.style.width = "10.5em"

			let header = document.createElement("div")
			header.style.display = "flex"
			header.style.padding = "0em 0.7em"
			header.style.justifyContent = "space-between"

			let countryText = document.createElement("span")
			countryText.innerHTML = "Country"
			let scoreText = document.createElement("span")
			scoreText.innerHTML = "Score"
			scoreText.style.marginRight = "1.75em"

			header.appendChild(countryText)
			header.appendChild(scoreText)

			wrapper.appendChild(header)

			let line = document.createElement("hr")
			line.style.marginBottom = "0"
			line.style.borderTop = "0"

			wrapper.appendChild(line)
			// loop through our density intervals and generate a label with a colored square for each interval
			for (let i = 0; i < topScoreCountries.length; i++) {
				let row = document.createElement("div")
				row.style.display = "flex"
				row.style.padding = "0.6em 0.5em 0em 0.5em"

				let countryName = document.createElement("div")
				countryName.className = "country-name"
				countryName.innerHTML = getCountryNameFromISOCode(
					topScoreCountries[i].code
				)

				countryName.style.marginLeft = "0.3em"
				countryName.style.width = "55%"
				countryName.style.textAlign = "start"

				let score = document.createElement("div")
				score.className = "country-score"
				score.style.paddingLeft = "1.5em"
				score.innerHTML = String(
					Math.round(topScoreCountries[i].overallScore * 100.0)
				)

				row.appendChild(countryName)
				row.appendChild(score)

				wrapper.appendChild(row)
			}
			return wrapper
		}

		legend.addTo(map)
	}

	const updateLegend = () => {
		const wrapper = document.getElementById(
			"leaflet-control-countries-top-scores"
		)
		const countryNames = wrapper?.getElementsByClassName("country-name")
		const countryScores = wrapper?.getElementsByClassName("country-score")

		if (countryNames && countryNames.length === 5) {
			for (let i = 0; i < countryNames.length; i++) {
				countryNames[i].innerHTML =
					i < topScoreCountries.length
						? getCountryNameFromISOCode(topScoreCountries[i].code)
						: ""
			}
		}
		if (countryScores && countryScores.length === 5) {
			for (let i = 0; i < countryScores.length; i++) {
				countryScores[i].innerHTML =
					i < topScoreCountries.length
						? String(Math.round(topScoreCountries[i].overallScore * 100.0))
						: ""
			}
		} else {
			for (let i = 0; i < topScoreCountries.length; i++) {
				let row = document.createElement("div")
				row.style.display = "flex"
				row.style.padding = "0.6em 0.5em 0em 0.5em"

				let countryName = document.createElement("div")
				countryName.className = "country-name"
				countryName.innerHTML = getCountryNameFromISOCode(
					topScoreCountries[i].code
				)

				countryName.style.marginLeft = "0.3em"
				countryName.style.width = "55%"
				countryName.style.textAlign = "start"

				let score = document.createElement("div")
				score.className = "country-score"
				score.style.paddingLeft = "1.5em"
				score.innerHTML = String(
					Math.round(topScoreCountries[i].overallScore * 100.0)
				)

				row.appendChild(countryName)
				row.appendChild(score)

				if (wrapper) {
					wrapper.appendChild(row)
				}
			}
		}
	}
	return null
}

export default CountriesLegend
