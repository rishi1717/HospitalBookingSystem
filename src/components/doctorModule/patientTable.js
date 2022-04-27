import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(name, calories, fat, carbs, protein,profile) {
	return { name, calories, fat, carbs, protein, profile }
}

const rows = [
	createData(1, "Rishi", "14/12/2021","Flu","Cured","Button"),
	createData(2, "Rishi","14/12/2021","Flu", "Cured","Button"),
	createData(3, "Rishi","14/12/2021","Flu", "Cured","Button"),
	createData(4, "Rishi","14/12/2021","Flu", "Cured","Button"),
	createData(5, "Rishi","14/12/2021","Flu", "Cured","Button"),
]

export default function PatientTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow sx={{ backgroundColor: "#1976D2" }}>
						<TableCell align="center" sx={{ color: "white" }}>
							ID
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Patient Name
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Recent Appointment
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Reason
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Condition
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Profile
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="center">{row.calories}</TableCell>
							<TableCell align="center">{row.fat}</TableCell>
							<TableCell align="center">{row.carbs}</TableCell>
							<TableCell align="center">{row.protein}</TableCell>
							<TableCell align="center">{row.profile}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
