import { Button, Grid, Paper } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

const SelectionCard = (props) => {
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
					<Button sx={{ p: 2, fontWeight: "bold" }}>{props.value}</Button>
					<Box sx={{ p: 2 }} textAlign="center">
						{" "}
						You have 11 appointments today{" "}
					</Box>
				</Paper>
			</Grid>
		</>
	)
}

export default SelectionCard
