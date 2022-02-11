import React, { useState } from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import countries from "../data/countries.geo.json"
import "leaflet/dist/leaflet.css"
import CountriesLegend from "./functions/CountriesLegend"
import PercentileLegend from "./functions/PercentileLegend"
import {isEmptyObj} from './functions/helpers';

type props = {
	countriesValues: Map<string, number> | {},
	countriesTopScore: Array<Object> | [],
	percentiles: Array<number> | []
}

function Map({ countriesValues, countriesTopScore, percentiles }: props) {
	const [map, setMap] = useState(null)


	const getColor = (value: number) => {
		if (value == 1) {
			return "#08519C"
		} else if (value == 10) {
			return "#3182BD"
		} else if (value == 50) {
			return "#6BAED6"
		} else if (value) {
			return "#BDD7E7"
		} else {
			// Map name not found
			// Do we want to do anything with it?
			return "#FFFFFF"
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

	const getValue = (country: string) => {
		if (countriesValues && !isEmptyObj(countriesValues)) {
			// @ts-ignore
			return countriesValues.get(country)
		}

		return null
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
					style={countriesValues && !isEmptyObj(countriesValues) ? style : {}}
				></GeoJSON>
				<PercentileLegend map={map} getColor={getColor} grades={percentiles} />
				{
					countriesTopScore && countriesTopScore.length > 0 ?
						<CountriesLegend map={map} countries={countriesTopScore} />
						: null
				}
			</MapContainer>
		</div>
	)
}

export default Map
