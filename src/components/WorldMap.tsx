import React, { useState } from "react"
import { Map as LeafletMap } from "leaflet"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import countries from "../data/countries.geo.json"
import "leaflet/dist/leaflet.css"
import {
	Percentile,
	CountryCode,
	CountryScore,
} from "../data/datasets/datasetsMapping"
import { isEmptyObj } from "./functions/helpers"
import PercentileLegend from "./functions/PercentileLegend"
import CountriesLegend from "./functions/CountriesLegend"

type props = {
	countriesScores: Map<CountryCode, CountryScore> | undefined
	topScoreCountries: Array<CountryScore>
}

function WorldMap({ countriesScores, topScoreCountries }: props) {
	const [map, setMap] = useState<LeafletMap>()
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
			fillOpacity: 0.8,
		}
	}

	const getValue = (country: string) => {
		if (countriesScores && !isEmptyObj(countriesScores)) {
			// @ts-ignore
			return countriesScores.get(country)?.percentile
		}

		return undefined
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
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					noWrap={true}
				/>
				<GeoJSON
					// @ts-ignore
					data={countries}
					style={countriesScores && !isEmptyObj(countriesScores) ? style : {}}
				></GeoJSON>
				<PercentileLegend map={map} getColor={getColor} grades={percentiles} />
				{topScoreCountries.length > 0 && map && (
					<CountriesLegend map={map} topScoreCountries={topScoreCountries} />
				)}
			</MapContainer>
		</div>
	)
}

export default WorldMap
