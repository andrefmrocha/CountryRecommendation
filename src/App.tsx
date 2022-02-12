import React, { useState } from "react"
import "./App.scss"
import "./sass/common.scss"
import Map from "./components/Map"
import Selection from "./components/Selection"
import Graphs from "./components/Graphs"

function App() {
	const [countriesValues, setCountriesValues] = useState<Map<string, number>>()

	return (
		<div className="main-panel">
			<Map countriesValues={countriesValues ? countriesValues : {}} />
			<Selection setCountriesValues={setCountriesValues} />
			<Graphs countriesValues={countriesValues} />
		</div>
	)
}

export default App
