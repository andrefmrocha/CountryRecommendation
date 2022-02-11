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
import getPercentiles from './data/getPercentiles';
import getTopCountries from './data/getTopCountries';

const percentiles = [1,10,50,100];

function App() {
    const [countriesValues, setCountriesValues] = useState({});
    const [countriesPercentiles, setCountriesPercentiles] = useState({})
    const [countriesTopScore, setCountriesTopScore] = useState({})


    useEffect(() => {
        getAirPollutionPCAMatrix(datasetsMappingByTheme)
        getNaturalDisastersPCAMatrix(datasetsMappingByTheme)
        getClimateChangePCAMatrix(datasetsMappingByTheme)
        getFoodPCAMatrix(datasetsMappingByTheme)
        getIncomePCAMatrix(datasetsMappingByTheme)
        getEducationPCAMatrix(datasetsMappingByTheme)
        getDemocracyPCAMatrix(datasetsMappingByTheme)
        getGenderRightsPCAMatrix(datasetsMappingByTheme).then(matrix => {
            setCountriesValues(matrix);
            const countriesPercentiles = getPercentiles(matrix, percentiles);
            setCountriesPercentiles(countriesPercentiles);
            setCountriesTopScore(getTopCountries(countriesPercentiles, matrix,5));
        })
        getLanguagePCAMatrix(datasetsMappingByTheme)
        getSafetyPCAMatrix(datasetsMappingByTheme).then(matrix => setCountriesValues(matrix))
        getHappinessPCAMatrix(datasetsMappingByTheme)
        getHealthPCAMatrix(datasetsMappingByTheme)
        getLGBTQIRightsPCAMatrix(datasetsMappingByTheme)
    },[])

    return (
        <div className="App">
            <MapView countriesValues ={countriesPercentiles ? countriesPercentiles: []} countriesTopScore={countriesTopScore} percentiles={percentiles}/>
        </div>
    );
}

export default App;
