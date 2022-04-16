import * as React from "react"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"

export function SmallButton(props) {
	let bgcolor = props.color ? props.color : "#1976D2"
	return (
		<Button
			sx={{
				margin: "1rem",
				width: {
					xs: "auto",
					sm: "auto",
					backgroundColor: bgcolor,
					"&:hover": {
						backgroundColor: "#fff",
						color: bgcolor,
					},
				},
			}}
			margin="auto"
			variant="contained"
		>
			<Typography
				sx={{
					fontSize: { xs: "0.4rem", sm: "0.7rem" },
				}}
				component="p"
			>
				{props.value ? props.value : ""}
			</Typography>
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
