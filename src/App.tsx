import React, {useEffect} from 'react';
import './App.scss';
import './sass/common.scss';
import openJson from "./data/openJSON";
import {
    DeathRatesFromAmbientPollution,
    getPm25DataTreated,
    PM25AirPollution,
    PM25AirPollutionRaw
} from "./data/datasets/models";
import {executePCA, treatEnvironmentData} from "./data/pca";
import Map from "./components/Map"
import Selection from "./components/Selection"
import Graphs from "./components/Graphs"

async function test() {
    const pm25DataRaw = await openJson<PM25AirPollutionRaw>("PM25-air-pollution.json")
    const deathRatesFromAmbientPollutionData = await openJson<DeathRatesFromAmbientPollution>("death-rates-from-ambient-particulate-air-pollution.json")
    if (pm25DataRaw && deathRatesFromAmbientPollutionData) {
        const pm25Data: PM25AirPollution[] = getPm25DataTreated(pm25DataRaw)
        const reducedData = treatEnvironmentData(pm25Data, deathRatesFromAmbientPollutionData)
        const pcaMatrix = executePCA(reducedData)
        console.log(pcaMatrix)
    }
}

function App() {
    useEffect(() => {
        test()
    })

    return (
        <div className="main-panel">
            <Map />
            <Selection />
            <Graphs />
        </div>
    );
}

export default App;
