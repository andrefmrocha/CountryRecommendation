import React, {useEffect} from 'react';
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

function App() {
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
        getSafetyPCAMatrix(datasetsMappingByTheme)
        getHappinessPCAMatrix(datasetsMappingByTheme)
        getHealthPCAMatrix(datasetsMappingByTheme)
        getLGBTQIRightsPCAMatrix(datasetsMappingByTheme)
    })

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
