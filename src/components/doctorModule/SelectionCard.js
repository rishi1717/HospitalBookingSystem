import { Button, Grid, Paper } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useNavigate } from "react-router-dom"

const SelectionCard = (props) => {
	const navigate = useNavigate()
	return (
		<>
			<Grid item xs={12} sm={6}>
				<Paper
					sx={{
						display: "flex",
						flexDirection: "column",
						alignContent: "center",
						justifyContent: "center",
						p: 3,
						backgroundColor: "#eaeaea",
					}}
				>
					<Button
						onClick={() => {
							if (props.link) navigate(props.link)
						}}
						sx={{ p: 2, fontWeight: "bold" }}
					>
						{props.value}
					</Button>
					<Box sx={{ p: 2 }} textAlign="center">
						View your {props.value}
					</Box>
				</Paper>
			</Grid>
		</>
	)
}

export default SelectionCard
