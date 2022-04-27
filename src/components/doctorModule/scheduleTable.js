import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(id, name, date, reason, condition, profile) {
	return { id, name, date, reason, condition, profile }
}

const rows = [
	createData(1, "Rishi", "14/12/2021", "Flu", "Cured", "Button"),
	createData(2, "Rishi", "14/12/2021", "Flu", "Cured", "Button"),
	createData(3, "Rishi", "14/12/2021", "Flu", "Cured", "Button"),
	createData(4, "Rishi", "14/12/2021", "Flu", "Cured", "Button"),
	createData(5, "Rishi", "14/12/2021", "Flu", "Cured", "Button"),
]

export default function ScheduleTable() {
	return (
		<TableContainer component={Paper} sx={{ maxWidth: "88vw",mt:2 }}>
			<Table sx={{ minWidth: { sm: 650 } }} aria-label="simple table">
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
					{rows.map((row, index) => (
						<TableRow
							key={index}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell align="center" component="th" scope="row">
								{row.id}
							</TableCell>
							<TableCell align="center">{row.name}</TableCell>
							<TableCell align="center">{row.date}</TableCell>
							<TableCell align="center">{row.reason}</TableCell>
							<TableCell align="center">{row.condition}</TableCell>
							<TableCell align="center">{row.profile}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
