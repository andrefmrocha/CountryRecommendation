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


function App() {
    useEffect(() => {
        getAirPollutionPCAMatrix()
        getNaturalDisastersPCAMatrix()
        getClimateChangePCAMatrix()
        getFoodPCAMatrix()
        getIncomePCAMatrix()
        getEducationPCAMatrix()
        getDemocracyPCAMatrix()
        getGenderRightsPCAMatrix()
        getLanguagePCAMatrix()
        getSafetyPCAMatrix()
        getHappinessPCAMatrix()
        getHealthPCAMatrix()
        getLGBTQIRightsPCAMatrix()
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
