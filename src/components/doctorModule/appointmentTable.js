import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData( name, time, reason, profile, complete) {
	return { name, time, reason, profile, complete }
}

const rows = [
	createData("Rishi", "10:10 AM", "Flu", "Button", "Check"),
	createData("Rishi", "10:10 AM", "Flu", "Button", "Check"),
	createData("Rishi", "10:10 AM", "Flu", "Button", "Check"),
	createData("Rishi", "10:10 AM", "Flu", "Button", "Check"),
	createData("Rishi", "10:10 AM", "Flu", "Button", "Check"),
	createData("Rishi", "10:10 AM", "Flu", "Button", "Check"),
	createData("Rishi", "10:10 AM", "Flu", "Button", "Check"),
	createData("Rishi", "10:10 AM", "Flu", "Button", "Check"),
	createData("Rishi", "10:10 AM", "Flu", "Button", "Check"),
	createData("Rishi", "10:10 AM", "Flu", "Button", "Check"),
]

export default function AppointmentTable() {
	return (
		<TableContainer
			component={Paper}
			sx={{ maxWidth: "88vw", mt: 2, border: 1, borderColor: "#609acf" }}
		>
			<Table sx={{ minWidth: { sm: 650 } }} aria-label="simple table">
				<TableHead>
					<TableRow sx={{ backgroundColor: "#609acf" }}>
						<TableCell align="center" sx={{ color: "white" }}>
							Patient Name
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Time
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Reason
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Profile
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Complete
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row,index) => (
						<TableRow
							key={index}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell align="center">{row.name}</TableCell>
							<TableCell align="center">{row.time}</TableCell>
							<TableCell align="center">{row.reason}</TableCell>
							<TableCell align="center">{row.profile}</TableCell>
							<TableCell align="center">{row.complete}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
