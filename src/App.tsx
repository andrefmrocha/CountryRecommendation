import React, { useEffect } from 'react';
import './App.scss';
import './sass/common.scss';
import openJson from "./data/openJSON";
import {
    DeathRatesFromAmbientPollution,
    getPm25DataTreated,
    PM25AirPollution,
    PM25AirPollutionRaw
} from "./data/datasets/models";
import Map from "./components/Map"
import Selection from "./components/Selection"
import Graphs from "./components/Graphs"
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
        <div className="main-panel">
            <Map />
            <Selection />
            <Graphs />
        </div>
    );
}

export default App;
