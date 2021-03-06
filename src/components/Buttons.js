import * as React from "react"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"

export function SmallButton(props) {
	let bgcolor = props.color ? props.color : "#1976D2"
	let text = props.text ? props.text : "#fff"
	return (
		<Button
			type={props.type}
			sx={{
				margin: "0.6rem",
				width: {
					xs: "auto",
					sm: "auto",
					backgroundColor: bgcolor,
					color: text,
					"&:hover": {
						backgroundColor: text,
						color: bgcolor,
					},
				},
			}}
			margin="auto"
			variant="contained"
		>
			<Typography
				sx={{
					fontSize: { xs: "0.5rem", sm: "0.6rem" },
				}}
				component="p"
			>
				{props.value ? props.value : ""}
			</Typography>
		</Button>
	)
}
export function MediumButton(props) {
	let bgcolor = props.color ? props.color : "#1976D2"
	let text = props.text ? props.text : "#fff"
	return (
		<Button
			size="medium" 
			variant="contained"
			sx={{
				mt: 4,
				ml: 1,
				backgroundColor: bgcolor,
				color: text,
				"&:hover": {
					backgroundColor: text,
					color: bgcolor,
				},
			}}
		>
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
