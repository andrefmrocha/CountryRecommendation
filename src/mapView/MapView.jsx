import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import countries from '../data/countries.geo.json'
import './MapView.css';
import 'leaflet/dist/leaflet.css';
import Legend from './Legend'

function MapView(countriesValues) {
    const [map, setMap] = useState(null);

    const percentiles = [1,10,50,90];

    // @TODO Remove this when percentiles are added
    const getColorDemo = (value) => {
        if (value > 0.6) {
            return "#08519C";
        }
        else if (value > 0.4) {
            return "#3182BD";
        }
        else if (value > 0.2) {
            return "#6BAED6";
        }
        else if (value) {
            return "#BDD7E7";
        }
        else {
            // Map name not found
            // Do we want to do anything with it?
            return "#FFFFFF";
        }
    }

    const getColor = (value) => {
        if (value == 1) {
            return "#08519C";
        }
        else if (value == 10) {
            return "#3182BD";
        }
        else if (value == 50) {
            return "#6BAED6";
        }
        else if (value) {
            return "#BDD7E7";
        }
        else {
            // Map name not found
            // Do we want to do anything with it?
            return "#FFFFFF";
        }
    }

    const style = (feature) => {
        return {
            // TODO changes to real get color funciton
            fillColor: getColorDemo(getValue(feature.properties["iso_n3"])),
            weight: 2,
            opacity: 1,
            color: null,
            dashArray: '3',
            fillOpacity: 0.8
        };
    }

    const isEmptyObj = (obj) => {
        return obj // 👈 null and undefined check
        && Object.keys(obj).length === 0
        && Object.getPrototypeOf(obj) === Object.prototype
    }

    const getValue = (country) => {
        if(countriesValues && !isEmptyObj(countriesValues.countriesValues)) {
            return countriesValues.countriesValues.get(country)
        }
        return null;
    }

    return (
        <MapContainer center={[0, 0]} zoom={2} minZoom={2} className="map" whenCreated={setMap} maxBounds={[
            //south west
            [-60, -180],
            //north east
            [80, 180]
        ]} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                noWrap={true}
            />
            <GeoJSON data={countries} style={countriesValues && !isEmptyObj(countriesValues.countriesValues)? style: {}}></GeoJSON>
            <Legend map={map} getColor={getColor} grades={percentiles}></Legend>
        </MapContainer>
    )
}

export default MapView;