import React from "react"

type props = {
	checked: boolean
	onClick: React.ChangeEventHandler<HTMLInputElement>
	disabled?: boolean
	type: "small" | "large"
}

function Checkbox({ checked, disabled = false, onClick, type }: props) {
	return (
		<label className="checkbox-container" data-size={type}>
			<input
				type="checkbox"
				name="category"
				disabled={disabled}
				checked={checked}
				onChange={onClick}
			/>
			<span className="checkmark" data-size={type} />
		</label>
	)
}

export default Checkbox
