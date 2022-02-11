import React, { useEffect, useState } from "react";
import "./App.scss";
import "./sass/common.scss";
import openJson from "./data/openJSON";
import {
  DeathRatesFromAmbientPollution,
  getPm25DataTreated,
  PM25AirPollution,
  PM25AirPollutionRaw,
} from "./data/datasets/models";
import Map from "./components/Map";
import Selection from "./components/Selection";
import Graphs from "./components/Graphs";
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
} from "./data/pcaMatrices";
import { datasetsMappingByTheme } from "./data/datasets/datasetsMapping";

function App() {
  const [countriesValues, setCountriesValues] = useState<
    Map<string, number> | {}
  >({});

  return (
    <div className="main-panel">
      <Map countriesValues={countriesValues ? countriesValues : {}} />
      <Selection setCountriesValues={setCountriesValues} />
      <Graphs />
    </div>
  );
}

export default App;
