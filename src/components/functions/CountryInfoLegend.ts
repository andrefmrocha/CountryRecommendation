// @ts-ignore
import L, { Map as LeafletMap } from "leaflet"
import { useEffect } from "react"
import { getCountryNameFromISOCode } from "../../data/countryConversion"
import { Category, CountryScore } from "../../data/datasets/datasetsMapping"
import { isEmptyObj } from "./helpers"

type props = {
    map: LeafletMap,
    countryScores: Map<Category, number> | {},
    countryName: string,
    visible: boolean
}

function CountryInfoLedgend({ map, countryName, countryScores, visible }: props) {
    // @ts-ignore
    let entries: string | any[] = []
    if (countryScores && !isEmptyObj(countryScores)) {
        // @ts-ignore
        entries = Array.from(countryScores, ([category, score]) => ({ category, score }));
    }

    // @ts-ignore
    let legend = L.control({ position: "bottomleft" })

    useEffect(() => {
        if (map) {
            addLegend();        }
    }, [map]) //here add map

    useEffect(() => {
        if (countryScores && !isEmptyObj(countryScores)) {
            updateLegend();
        }
    }, [countryName, countryScores])

    useEffect(() => {
        if (visible) {
            const wrapper = document.getElementById("leaflet-control-country-score");
            if (wrapper) {
                wrapper.style.display = "block"
            }
        }
        else {
            const wrapper = document.getElementById("leaflet-control-country-score");
            if (wrapper) {
                wrapper.style.display = "none"
            }
        }
    }, [visible])

    const addLegend = () => {
        legend.onAdd = () => {
            let wrapper = L.DomUtil.create("div", "info legend")
            wrapper.id = "leaflet-control-country-score"
            wrapper.style.display = "none"

            wrapper.style.background = "#252525"
            wrapper.style.color = "#F7F7F7"
            wrapper.style.padding = "1.1em 1.5em"
            wrapper.style.borderRadius = "5px"
            wrapper.style.minWidth = "10.5em"

            let title = document.createElement("div")
            title.innerHTML = countryName ? countryName : ''
            title.id = "title-country-info"

            let header = document.createElement("div")
            header.style.display = "flex"
            header.style.padding = "0em 0.7em"
            header.style.justifyContent = "space-between"

            let countryText = document.createElement("span")
            countryText.innerHTML = "Category"
            let scoreText = document.createElement("span")
            scoreText.innerHTML = "Score"
            scoreText.style.marginRight = "1.75em"

            header.appendChild(countryText)
            header.appendChild(scoreText)

            wrapper.appendChild(header)

            let line = document.createElement("hr")
            line.style.marginBottom = "0"
            line.style.borderTop = "0"

            wrapper.appendChild(line)

            let categoriesContainer = document.createElement("div")
            categoriesContainer.id = "categories-container"
            // loop through our density intervals and generate a label with a colored square for each interval
            for (let i = 0; i < entries.length; i++) {
                let row = document.createElement("div")
                row.style.display = "flex"
                row.style.padding = "0.6em 0.5em 0em 0.5em"

                let countryName = document.createElement("div")
                countryName.className = "country-name";
                countryName.innerHTML = entries[i].category

                countryName.style.marginLeft = "0.3em"
                countryName.style.width = "55%"
                countryName.style.textAlign = "start"

                let score = document.createElement("div")
                score.className = "country-score";
                score.style.paddingLeft = "1.5em"
                score.innerHTML = String(
                    Math.round(entries[i].score * 100.0)
                )

                row.appendChild(countryName)
                row.appendChild(score)

                categoriesContainer.appendChild(row)
            }
            wrapper.append(categoriesContainer)
            return wrapper
        }

        legend.addTo(map)
    }

    const updateLegend = () => {
        const wrapper = document.getElementById("leaflet-control-country-score");
        const countryNames = wrapper?.getElementsByClassName("country-name");
        const countryScores = wrapper?.getElementsByClassName("country-score");
        const title = document.getElementById("title-country-info")

        let categoriesContainer = document.getElementById("categories-container")
        if (categoriesContainer){
            categoriesContainer.innerHTML = ''
            while (categoriesContainer.firstChild) {
                // @ts-ignore
                categoriesContainer.removeChild(row.lastChild);
              }
        }
        else {
            categoriesContainer = document.createElement("div")
            categoriesContainer.id = "categories-container"
            if(wrapper) {
                categoriesContainer.append(wrapper)
            }
        }
        // loop through our density intervals and generate a label with a colored square for each interval
        for (let i = 0; i < entries.length; i++) {
            let row = document.createElement("div")
            row.style.display = "flex"
            row.style.padding = "0.6em 0.5em 0em 0.5em"

            let countryName = document.createElement("div")
            countryName.className = "country-name";
            countryName.innerHTML = entries[i].category

            countryName.style.marginLeft = "0.3em"
            countryName.style.width = "55%"
            countryName.style.textAlign = "start"

            let score = document.createElement("div")
            score.className = "country-score";
            score.style.paddingLeft = "1.5em"
            score.innerHTML = String(
                Math.round(entries[i].score * 100.0)
            )

            row.appendChild(countryName)
            row.appendChild(score)

            if(categoriesContainer) {
                categoriesContainer.appendChild(row)
            }
        }
    }
    return null
}

export default CountryInfoLedgend