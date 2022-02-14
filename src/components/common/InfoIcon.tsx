import React from "react"
import ReactTooltip from "react-tooltip"
import { ThemeMappingItemField } from "../../data/datasets/datasetsMapping"

type props = {
	parameter: string
	dataset: string
	fields: Array<ThemeMappingItemField>
}

function InfoIcon({ parameter, dataset, fields }: props) {
	function getInformation() {
		return `
    <strong>Name:</strong> ${parameter}<br><br>
    <div><strong>Includes the following fields:</strong> <ul>${fields
			.map((field) => `<li>${field.field.trim()}</li>`)
			.toString()
			.replaceAll(",", "")}</ul></div>
    `
	}

	return (
		<>
			<div className="info-icon" data-tip={getInformation()} data-html={true}>
				i
			</div>
			<ReactTooltip place="left" effect="solid" />
		</>
	)
}

export default InfoIcon
