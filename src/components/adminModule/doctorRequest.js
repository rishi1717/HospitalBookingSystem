import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { SmallButton } from "../Buttons"
import axios from "../../axios"
import { useSelector } from "react-redux"
import Swal from "sweetalert2"

export default function DoctorRequest({ doctors, update, setUpdate }) {
	React.useEffect(() => {
		console.log(update);
	}, [update])
	const adminState = useSelector((storeState) => storeState.admin)
	return (
		<TableContainer component={Paper} sx={{ maxWidth: "80vw" }}>
			<Table sx={{ minWidth: { sm: 650 } }} aria-label="simple table">
				<TableHead>
					<TableRow sx={{ backgroundColor: "#1976D2" }}>
						<TableCell align="center" sx={{ color: "white" }}>
							Name
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Email
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Department
						</TableCell>

						<TableCell align="center" sx={{ color: "white" }}>
							Decline
						</TableCell>
						<TableCell align="center" sx={{ color: "white" }}>
							Accept
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{doctors.map((row, index) => (
						<TableRow
							key={index}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell align="center">{row.name}</TableCell>
							<TableCell align="center">{row.email}</TableCell>
							<TableCell align="center">{row.department}</TableCell>
							<TableCell align="center">
								<div
									onClick={async () => {
										const con = await Swal.fire({
											title: "Are you sure?",
											text: "You won't be able to revert this!",
											background: "#eaeaea",
											color: "#595959",
											showCancelButton: true,
											cancelButtonColor: "#609ACF",
											confirmButtonText: "Decline",
											confirmButtonColor: "#B81C1C",
										})
										if (con.isConfirmed) {
											await axios.delete(`/doctor/${row._id}`, {
												headers: {
													"auth-token": adminState.token,
												},
											})
											setUpdate(!update)
										}
									}}
								>
									<SmallButton
										value="Decline"
										text="#B81C1C"
										color="white"
									/>
								</div>
							</TableCell>
							<TableCell align="center">
								<div
									onClick={async () => {
										const con = await Swal.fire({
											title: "Are you sure?",
											text:
												"Accepting this doctor will make him/her available for appointments",
											background: "#eaeaea",
											color: "#595959",
											showCancelButton: true,
											cancelButtonColor: "#609ACF",
											confirmButtonText: "Accept",
											confirmButtonColor: "#339933",
										})
										if (con.isConfirmed) { 	
											setUpdate(!update)
											await axios.put(
												`/doctor/${row._id}`,
												{ ...row, request: "false" },
												{
													headers: {
														"auth-token": adminState.token,
													},
												}
											)
										}
									}}
								>
									<SmallButton
										value="Accept"
										text="#609acf"
										color="white"
									/>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
