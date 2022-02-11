import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {
    getAirPollutionPCAMatrix,
    getClimateChangePCAMatrix,
    getDemocracyPCAMatrix,
    getEducationPCAMatrix,
    getFoodPCAMatrix,
    getGenderRightsPCAMatrix,
    getHappinessPCAMatrix,
    getHealthPCAMatrix,
    getIncomePCAMatrix,
    getLanguagePCAMatrix, getLGBTQIRightsPCAMatrix,
    getNaturalDisastersPCAMatrix,
    getSafetyPCAMatrix
} from "./data/pcaMatrices";
import {datasetsMappingByTheme} from "./data/datasets/datasetsMapping";
import MapView from './mapView/MapView';


function App() {
    const [countriesValues, setCountriesValues] = useState({});

    useEffect(() => {
        getAirPollutionPCAMatrix(datasetsMappingByTheme)
        getNaturalDisastersPCAMatrix(datasetsMappingByTheme)
        getClimateChangePCAMatrix(datasetsMappingByTheme)
        getFoodPCAMatrix(datasetsMappingByTheme)
        getIncomePCAMatrix(datasetsMappingByTheme)
        getEducationPCAMatrix(datasetsMappingByTheme)
        getDemocracyPCAMatrix(datasetsMappingByTheme)
        getGenderRightsPCAMatrix(datasetsMappingByTheme)
        getLanguagePCAMatrix(datasetsMappingByTheme)
        getSafetyPCAMatrix(datasetsMappingByTheme).then(matrix => setCountriesValues(matrix))
        getHappinessPCAMatrix(datasetsMappingByTheme)
        getHealthPCAMatrix(datasetsMappingByTheme)
        getLGBTQIRightsPCAMatrix(datasetsMappingByTheme)
    },[])

    return (
        <div className="App">
            <MapView countriesValues ={countriesValues? countriesValues : []}/>
        </div>
    );
}

export default App;
