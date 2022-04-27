import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded"
import { Button } from "@mui/material"

function createData(index, details, status) {
	return { index, details, status }
}

const rows = [
	createData(1, "Rishi", "Actions"),
	createData(2, "Rishi", "Actions"),
	createData(3, "Rishi", "Actions"),
	createData(4, "Rishi", "Actions"),
	createData(5, "Rishi", "Actions"),
]

export default function ScheduleTable() {
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
							Actions
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<TableRow
							key={index}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell align="center">{row.index}</TableCell>
							<TableCell align="center">{row.details}</TableCell>
							<TableCell align="center">{row.status}</TableCell>
						</TableRow>
					))}
					<TableRow
						sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
					>
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
