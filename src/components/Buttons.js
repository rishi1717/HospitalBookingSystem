import * as React from "react"
import Button from "@mui/material/Button"

export function SmallButton(props) {
	return (
		<Button margin='auto' variant="contained">
			{props.value}
		</Button>
	)
}
export function MediumButton(props) {
	return (
		<Button size="medium" variant="contained">
			{props.value}
		</Button>
	)
}
export function LargeButton(props) {
	return (
		<Button size="large" variant="contained">
			{props.value}
		</Button>
	)
}
