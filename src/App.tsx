import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import openJson from "./data/openJSON";
import {
    DeathRatesFromAmbientPollution,
    getPm25DataTreated,
    PM25AirPollution,
    PM25AirPollutionRaw
} from "./data/datasets/models";
import {executePCA, treatEnvironmentData} from "./data/pca";


async function test() {
    const pm25DataRaw = await openJson<PM25AirPollutionRaw>("PM25-air-pollution.json")
    const deathRatesFromAmbientPollutionData = await openJson<DeathRatesFromAmbientPollution>("death-rates-from-ambient-particulate-air-pollution.json")
    if (pm25DataRaw && deathRatesFromAmbientPollutionData) {
        const pm25Data: PM25AirPollution[] = getPm25DataTreated(pm25DataRaw)
        const dataNormalized = treatEnvironmentData(pm25Data, deathRatesFromAmbientPollutionData)
        const pcaMatrix = executePCA(dataNormalized)
        console.log(pcaMatrix)
    }
}

function App() {
    useEffect(() => {
        test()
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
