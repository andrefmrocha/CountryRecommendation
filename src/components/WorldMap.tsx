import React, { useState } from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import countries from "../data/countries.geo.json"
import Legend from "./functions/Legend"
import "leaflet/dist/leaflet.css"
import {
	Percentile,
	CountryCode,
	CountryScore,
} from "../data/datasets/datasetsMapping"

type props = {
	countriesScores: Map<CountryCode, CountryScore> | undefined
}

function WorldMap({ countriesScores }: props) {
	const [map, setMap] = useState(null)
	const percentiles = ["1%", "10%", "50%", "100%"]

	// @TODO Remove this when percentiles are added
	const getColorDemo = (value: number) => {
		if (value > 0.6) {
			return "#08519C"
		} else if (value > 0.4) {
			return "#3182BD"
		} else if (value > 0.2) {
			return "#6BAED6"
		} else if (value) {
			return "#BDD7E7"
		} else {
			// Map name not found
			// Do we want to do anything with it?
			return "#FFFFFF"
		}
	}

	const getColor = (percentile: Percentile | undefined) => {
		switch (percentile) {
			case "1%":
				return "#08519C"
			case "10%":
				return "#3182BD"
			case "50%":
				return "#6BAED6"
			case "100%":
				return "#BDD7E7"
			default:
				return "#EFF3FF"
		}
	}

	const style = (feature: any) => {
		return {
			fillColor: getColor(getValue(feature.properties["iso_n3"])),
			weight: 2,
			opacity: 1,
			color: null,
			dashArray: "3",
			fillOpacity: 0.8,
		}
	}

	const isEmptyObj = (obj: Object) => {
		return (
			obj && // 👈 null and undefined check
			Object.keys(obj).length === 0 &&
			Object.getPrototypeOf(obj) === Object.prototype
		)
	}

	const getValue = (country: CountryCode) => {
		if (countriesScores && !isEmptyObj(countriesScores)) {
			return countriesScores.get(country)?.percentile
		}

		return undefined
	}

	return (
		<div className="map-panel">
			<MapContainer
				center={[0, 0]}
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
				></GeoJSON>
				<Legend map={map} getColor={getColor} grades={percentiles}></Legend>
			</MapContainer>
		</div>
	)
}

export default WorldMap
