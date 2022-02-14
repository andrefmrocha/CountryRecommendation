// @ts-ignore
import L, { Map as LeafletMap } from "leaflet"
import { useEffect } from "react"
import { getCountryNameFromISOCode } from "../../data/countryConversion"
import { CountryScore } from "../../data/datasets/datasetsMapping"

type props = {
	map: LeafletMap
	topScoreCountries: Array<CountryScore>
}

function CountriesLegend({ map, topScoreCountries }: props) {
	useEffect(() => {
		if (map) {
			// @ts-ignore
			const legend = L.control({ position: "bottomleft" })
			legend.onAdd = () => {
				let wrapper = L.DomUtil.create("div", "info legend")

				wrapper.style.background = "#252525"
				wrapper.style.color = "#F7F7F7"
				wrapper.style.padding = "1.1em 1.5em"
				wrapper.style.borderRadius = "5px"
				wrapper.style.minWidth = "10.5em"

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
					countryName.innerHTML = getCountryNameFromISOCode(
						topScoreCountries[i].code
					)

					countryName.style.marginLeft = "0.3em"
					countryName.style.width = "55%"
					countryName.style.textAlign = "start"

					let text = document.createElement("div")
					text.style.paddingLeft = "1.5em"
					text.innerHTML = String(
						Math.round(topScoreCountries[i].overallScore * 100.0)
					)

					row.appendChild(countryName)
					row.appendChild(text)

					wrapper.appendChild(row)
				}
				return wrapper
			}

			legend.addTo(map)
		}
	}, [map]) //here add map
	return null
}

export default CountriesLegend
