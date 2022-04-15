import * as React from "react"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"

export function SmallButton(props) {
	return (
		<Button
			sx={{ margin: "1rem", width: { xs: "5rem", sm: "10rem" } }}
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
