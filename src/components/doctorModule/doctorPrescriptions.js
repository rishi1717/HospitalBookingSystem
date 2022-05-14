import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Grid } from "@mui/material"
import axios from "axios"
import Swal from "sweetalert2"
import { SmallButton } from "../Buttons"
import { useSelector } from "react-redux"

export default function DoctorPrescritption({ prescriptions }) {
	const docState = useSelector((storeState) => storeState.doctor)
	return (
		<>
			{prescriptions.map((prescription) => (
				<Card
					key={prescription._id}
					sx={{
						display: "flex",
						m: "0.4rem",
						flexDirection: { xs: "column", md: "row" },
						borderRadius: 2,
						backgroundColor: "#eaeaea",
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={4}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								{prescription.medicine.map((medicine) => (
									<Typography
										key={medicine}
										variant="subtitle1"
										color="text.secondary"
										component="div"
									>
										{medicine}
									</Typography>
								))}
							</CardContent>
						</Grid>

						<Grid item xs={12} sm={3.8}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								{prescription.dosage.map((dosage) => (
									<Typography
										key={dosage}
										variant="subtitle1"
										color="text.secondary"
										component="div"
									>
										{dosage}
									</Typography>
								))}
							</CardContent>
						</Grid>

						<Grid item sm={2.2}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{prescription.date}
								</Typography>
							</CardContent>
						</Grid>

						<Grid item sm={2}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
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
														`/prescription/${prescription._id}`,
														{
															headers: {
																"auth-token": docState.token,
															},
														}
													)
												} catch (err) {
													console.log(err)
												}
											}
										}}
									>
										<SmallButton
											value="X"
											color="white"
											text="#B81C1C"
										/>
									</div>
								</Typography>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			))}
		</>
	)
}
