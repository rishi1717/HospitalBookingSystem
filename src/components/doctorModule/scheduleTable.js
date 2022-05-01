import React, { useState } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded"
import { Button, Checkbox } from "@mui/material"
import { SmallButton } from "../Buttons"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"

export default function ScheduleTable({ schedules }) {
	const [checked, setChecked] = useState(true)

	const handleChange = (event) => {
		setChecked(event.target.checked)
	}
	return (
		<TableContainer component={Paper} sx={{ maxWidth: "88vw", mt: 2 }}>
			<Table sx={{ minWidth: { sm: 650 } }} aria-label="simple table">
				<TableHead>
					<TableRow sx={{ backgroundColor: "#1976D2" }}>
						<TableCell align="center" sx={{ color: "white" }}>
							Index
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Details
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Status
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Actions
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{schedules.map((row, index) => (
						<TableRow
							key={index}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell align="center">{index + 1}</TableCell>
							<TableCell align="center">{row.detail}</TableCell>
							<TableCell align="center">{row.status}</TableCell>
							<TableCell align="center">
								<Checkbox
									checked={checked}
									onChange={handleChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
								<SmallButton
									value={<DeleteRoundedIcon />}
									text="red"
									color="white"
								/>
							</TableCell>
						</TableRow>
					))}
					<TableRow
						sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
					>
						<TableCell align="center"></TableCell>
						<TableCell align="center"></TableCell>
						<TableCell align="center">
							<Button>
								<AddBoxRoundedIcon />
							</Button>
						</TableCell>
						<TableCell align="center"></TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}
