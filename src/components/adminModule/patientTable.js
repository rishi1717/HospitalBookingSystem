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

export default function PatientTable({ users }) {
	const navigate = useNavigate()
	return (
		<TableContainer component={Paper} sx={{ maxWidth: "80vw" }}>
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
							Age
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Gender
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Profile
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((row, index) => (
						<TableRow
							key={index}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell align="center" component="th" scope="row">
								{row._id}
							</TableCell>
							<TableCell align="center">{row.firstName}</TableCell>
							<TableCell align="center">{row.age}</TableCell>
							<TableCell align="center">{row.gender}</TableCell>
							<TableCell align="center">
								<div
									onClick={() => {
										navigate("/admin/patients/profile", {
											state: { user: row},
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
