import React, { useEffect, useState } from "react"
import "./App.scss"
import "./sass/common.scss"
import openJson from "./data/openJSON"
import {
    DeathRatesFromAmbientPollution,
    getPm25DataTreated,
    PM25AirPollution,
    PM25AirPollutionRaw,
} from "./data/datasets/models"
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
    getLanguagePCAMatrix,
    getLGBTQIRightsPCAMatrix,
    getNaturalDisastersPCAMatrix,
    getSafetyPCAMatrix,
} from "./data/pcaMatrices"
import { datasetsMappingByTheme } from "./data/datasets/datasetsMapping"
import getPercentiles from './data/getPercentiles';
import getTopCountries from './data/getTopCountries';
import { isEmptyObj } from "./components/functions/helpers"

const percentiles = [1, 10, 50, 100];

function App() {
    const [countriesValues, setCountriesValues] = useState<
        Map<string, number> | {}
    >({})
    const [countriesPercentiles, setCountriesPercentiles] = useState<
        Map<string, number> | {}
    >({})

    const [countriesTopScore, setCountriesTopScore] = useState<
        Array<object> | []
    >([])

    useEffect(() => {
        if(countriesValues && !isEmptyObj(countriesValues)){
            const countriesPercentiles = getPercentiles(countriesValues, percentiles);
            setCountriesPercentiles(countriesPercentiles);
            setCountriesTopScore(getTopCountries(countriesPercentiles, countriesValues, 5));
        }
    }, [countriesValues])


    return (
        <div className="main-panel">
            <Map countriesValues={countriesPercentiles ? countriesPercentiles : []} countriesTopScore={countriesTopScore} percentiles={percentiles} />
            <Selection setCountriesValues={setCountriesValues} />
            <Graphs />
        </div>
    )
}

export default App
