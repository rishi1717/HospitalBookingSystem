import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { Grid, Typography } from "@mui/material"
import { SmallButton } from "../Buttons"
import axios from "axios"

export default function AppointmentCard() {
	const [appointments, setAppointments] = useState([])
	useEffect(() => {
		;(async function() {
			const appointmentData = await axios.get(
				"http://localhost:4000/appointments"
			)
			setAppointments(appointmentData.data)
		})()
	}, [])
	return (
		<>
			{appointments.map((appointment, index) => {
				if (appointment.active) {
					return (
						<Grid key={appointment.id} item xs={12} sm={6}>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									"& > :not(style)": {
										m: 1,
										minHeight: { xs: 0, sm: 150 },
										width: "100%",
									},
								}}
							>
								<Paper
									elevation={8}
									sx={{
										backgroundColor: "#eaeaea",
										p: { xs: 1, sm: 2 },
									}}
								>
									<Typography
										sx={{
											fontSize: { xs: "0.7rem", sm: "1rem" },
										}}
										component="p"
									>
										Appointment with {appointment.doctor}
									</Typography>
									<Typography
										sx={{
											fontSize: {
												xs: "1rem",
												sm: "1.4rem",
												color: "#595959",
												fontWeight: "bold",
											},
										}}
										component="p"
									>
										{appointment.date}
									</Typography>
									<Typography
										sx={{
											fontSize: {
												xs: "1.1rem",
												sm: "1.8rem",
												color: "#595959",
												fontWeight: "bold",
											},
										}}
										component="p"
									>
										{appointment.time}
									</Typography>
									<Grid
										container
										rowSpacing={1}
										columnSpacing={{ xs: 4 , sm:0}}
									>
										<Grid item xs={3.5} sm={3} sx={{ ml: {sm:"auto", xs:0} }}>
											<SmallButton
												color="#FEB139"
												value="Reschedule"
											/>
										</Grid>
										<Grid
											item
											xs={2}
											sm={2.9}
											sx={{ mr: { xs: "2rem", sm: "0.5rem" } }}
										>
											<SmallButton color="#CC3E34" value="Cancel" />
										</Grid>
									</Grid>
								</Paper>
							</Box>
						</Grid>
					)
				}
				else{
					return null
				}
			})}
		</>
	)
}
