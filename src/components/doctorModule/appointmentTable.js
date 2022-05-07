import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { SmallButton } from "../Buttons"
import { useNavigate } from "react-router-dom"

export default function AppointmentTable({ appointments }) {
	const navigate = useNavigate()
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
							Date
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Reason
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Profile
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{appointments.map((row, index) => (
						<TableRow
							key={index}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell align="center">{row.user}</TableCell>
							<TableCell align="center">{row.time}</TableCell>
							<TableCell align="center">{row.date}</TableCell>
							<TableCell align="center">{row.reason}</TableCell>
							<TableCell align="center">
								<div
									onClick={() => {
										navigate("/doctor/patients/profile", {
											state: { patient: row.userId },
										})
									}}
								>
									<SmallButton value="Profile" />
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
