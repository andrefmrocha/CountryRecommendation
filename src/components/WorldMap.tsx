import React, { useRef, useState } from "react"
// @ts-ignore
import { Map as LeafletMap } from "leaflet"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import countries from "../data/countries.geo.json"
import "leaflet/dist/leaflet.css"
import {
	Percentile,
	CountryCode,
	CountryScore,
	countryCodes,
} from "../data/datasets/datasetsMapping"
import { isEmptyObj } from "./functions/helpers"
import PercentileLegend from "./functions/PercentileLegend"
import CountriesLegend from "./functions/CountriesLegend"
import CountryInfoLegend from "./functions/CountryInfoLegend"
import { getCountryNameFromISOCode } from "../data/countryConversion"

type props = {
	countriesScores: Map<CountryCode, CountryScore> | undefined
	topScoreCountries: Array<CountryScore>
	selectedCountries: Array<CountryCode>
}

function WorldMap({
	countriesScores,
	topScoreCountries,
	selectedCountries,
}: props) {
	const [map, setMap] = useState<LeafletMap>()
	const [hoveredCountry, setHoveredCountry] = useState<CountryCode | undefined>(
		undefined
	)
	const geoJson = useRef()

	const percentiles = ["1%", "10%", "50%", "100%"]

	const getColor = (percentile: Percentile | undefined) => {
		switch (percentile) {
			case "1%":
				return "#c2e699"
			case "10%":
				return "#78c679"
			case "50%":
				return "#31a354"
			case "100%":
				return "#006837"
			default:
				return "#cecece"
		}
	}

	const style = (feature: any) => {
		return {
			fillColor: getColor(getValue(feature.properties["iso_n3"])),
			weight: 2,
			opacity: 1,
			color: undefined,
			dashArray: "3",
			fillOpacity: getOpacity(feature.properties["iso_n3"]),
		}
	}

	const getOpacity = (country: CountryCode) => {
		if (selectedCountries && !isEmptyObj(selectedCountries)) {
			// @ts-ignore
			return selectedCountries.length === 0 ||
				selectedCountries.includes(country)
				? 1.0
				: 0.4
		}

		return undefined
	}

	const getValue = (country: string) => {
		if (countriesScores && !isEmptyObj(countriesScores)) {
			// @ts-ignore
			return countriesScores.get(country)?.percentile
		}

		return undefined
	}

	function highlightFeature(e: Event) {
		var layer = e.target
		// @ts-ignore
		setHoveredCountry(layer?.feature?.properties?.iso_n3)

		// @ts-ignore
		layer?.setStyle({})
	}

	function resetHighlight(e: Event) {
		var layer = e.target

		setHoveredCountry(undefined)
		// @ts-ignore
		layer?.setStyle({})
	}

	function onEachFeature(feature: any, layer: any) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
		})
	}

	function getCountryScores(country: CountryCode | undefined) {
		if (country && countriesScores && countriesScores.get(country)) {
			// @ts-ignore
			return countriesScores.get(country).scores
		}
		return []
	}

	return (
		<div className="map-panel">
			<MapContainer
				center={[0, 20]}
				zoom={2}
				minZoom={2}
				className="map"
				whenCreated={setMap}
				maxBounds={[
					//south west
					[-60, -180],
					//north east
					[80, 180],
				]}
			>
				<TileLayer
					// @ts-ignore
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					noWrap={true}
				/>
				<GeoJSON
					// @ts-ignore
					data={countries}
					style={countriesScores && !isEmptyObj(countriesScores) ? style : {}}
					onEachFeature={onEachFeature}
					/* @ts-ignore */
					ref={geoJson}
				></GeoJSON>
				<PercentileLegend map={map} getColor={getColor} grades={percentiles} />
				{map && (
					<CountriesLegend
						map={map}
						topScoreCountries={topScoreCountries}
						visible={topScoreCountries.length > 0 && !hoveredCountry}
					/>
				)}
				{map && (
					<CountryInfoLegend
						map={map}
						countryScores={getCountryScores(hoveredCountry)}
						countryName={
							hoveredCountry ? getCountryNameFromISOCode(hoveredCountry) : ""
						}
						visible={
							!isEmptyObj(countriesScores) && hoveredCountry !== undefined
						}
					/>
				)}
			</MapContainer>
		</div>
	)
}

export default WorldMap
