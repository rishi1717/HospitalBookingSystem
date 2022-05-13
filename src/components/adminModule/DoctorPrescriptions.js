import axios from "../../axios"
import React, { useEffect } from "react"
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material"
import { SmallButton } from "../Buttons"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
import Swal from "sweetalert2"
import { useSelector } from "react-redux"
const deleteIcon = <DeleteRoundedIcon sx={{ fontSize: "1rem" }} />

const DoctorPrescriptions = ({ doctorId, token }) => {
	const [prescriptions, setPrescriptions] = React.useState([])
	const adminState = useSelector((storeState) => storeState.admin)
	const [state, setState] = React.useState(0)
	useEffect(() => {
		;(async function() {
			const detail = await axios.get(`/prescription/doctor/${doctorId}`, {
				headers: {
					"auth-token": token,
				},
			})
			setPrescriptions(detail.data.prescription)
		})()
	}, [])
	return (
		<div>
			<TableContainer component={Paper} sx={{ maxWidth: "88vw" }}>
				<Table sx={{ minWidth: { sm: 650 } }} aria-label="simple table">
					<TableHead>
						<TableRow sx={{ backgroundColor: "#1976D2" }}>
							<TableCell align="center" sx={{ color: "white" }}>
								Medicine
							</TableCell>
							<TableCell align="center" sx={{ color: "white" }}>
								Date
							</TableCell>
							<TableCell align="center" sx={{ color: "white" }}>
								Prescribed to
							</TableCell>
							<TableCell align="center" sx={{ color: "white" }}>
								Options
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{prescriptions.map((row, index) => (
							<TableRow
								key={index}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 },
								}}
							>
								<TableCell align="center" component="th" scope="row">
									{row.medicine}
								</TableCell>
								<TableCell align="center">{row.date}</TableCell>
								<TableCell align="center">{row.user}</TableCell>
								<TableCell
									sx={{
										display: { sm: "flex" },
										justifyContent: "center",
									}}
								>
									<div
										onClick={async () => {
											const con = await Swal.fire({
												title: "Are you sure?",
												text: "Prescription will be removed!",
												background: "#eaeaea",
												color: "#595959",
												showCancelButton: true,
												cancelButtonColor: "#609ACF",
												confirmButtonText: "Remove Prescription",
												confirmButtonColor: "#B81C1C",
											})
											if (con.isConfirmed) {
												try {
													await axios.delete(
														`/prescription/${row._id}`,
														{
															headers: {
																"auth-token": adminState.token,
															},
														}
													)
													setState(!state)
												} catch (err) {
													console.log(err)
												}
											}
										}}
									>
										<SmallButton
											value={deleteIcon}
											color="white"
											text="#B81C1C"
										/>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default DoctorPrescriptions
