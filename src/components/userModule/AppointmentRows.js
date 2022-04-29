import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import axios from "../../axios.js"
import { Box, Button, Grid, TextField } from "@mui/material"
import { SmallButton } from "../Buttons"
import Modal from "@mui/material/Modal"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
}

export default function AppointmentRows(props) {
	const [open, setOpen] = React.useState(false)
	const [canceling, setCanceling] = React.useState("")
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const [cancelId, setCancelId] = React.useState(0)
	const [appointments, setAppointments] = React.useState([])
	React.useEffect(() => {
		;(async function() {
			const appointmentData = await axios.get("/appointment", {
				headers: { "auth-token": localStorage.userToken },
			})
			setAppointments(appointmentData.data.appointment)
		})()
	}, [])
	return (
		<>
			{appointments.map((appointment) => (
				<Card
					key={appointment._id}
					sx={{
						border: appointment.status === "Scheduled" ? 1 : 0,
						borderColor: "green",
						display: "flex",
						m: "0.4rem",
						flexDirection: { xs: "column", md: "row" },
						borderRadius: 2,
						backgroundColor: "#eaeaea",
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={3}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{appointment.doctor}
								</Typography>
							</CardContent>
						</Grid>

						<Grid item xs={6} sm={2}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{appointment.date}
								</Typography>
							</CardContent>
						</Grid>

						<Grid item xs={6} sm={2}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{appointment.time}
								</Typography>
							</CardContent>
						</Grid>

						<Grid item xs={6} sm={2}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color={
										appointment.status === "Scheduled"
											? "green"
											: "text.secondary"
									}
									component="div"
								>
									{appointment.status}
								</Typography>
							</CardContent>
						</Grid>
						{appointment.status === "Scheduled" ? (
							<>
								<Grid item xs={6} sm={3}>
									<CardContent
										sx={{ display: "flex", flex: "0.1 0 auto" }}
									>
										<SmallButton value="reschedule" color="#FEB139" />
										<Grid
											onClick={() => {
												setCancelId(appointment._id)
												console.log(appointment._id)
												handleOpen()
											}}
											item
											xs={2}
											sm={2.9}
											sx={{ mr: { xs: "2rem", sm: "0.5rem" } }}
										>
											<SmallButton value="cancel" color="#CC3E34" />
										</Grid>
									</CardContent>
								</Grid>
								<Modal
									open={open}
									onClose={handleClose}
									aria-labelledby="modal-modal-title"
									aria-describedby="modal-modal-description"
								>
									<Box sx={style}>
										<TextField
											required
											fullWidth
											id="cancelingFor"
											label="Reason For cancelling"
											name="cancelingFor"
											value={canceling}
											onChange={({ currentTarget: input }) => {
												setCanceling(input.value)
											}}
										/>
										<Grid container spacing={2}>
											<Grid item xs={6} sm={4} ml="auto">
												<Button
													onClick={handleClose}
													fullWidth
													variant="contained"
													sx={{
														mt: 3,
														mb: 2,
													}}
												>
													Keep Appointment
												</Button>
											</Grid>
											<Grid item xs={6} sm={4}>
												<Button
													onClick={async () => {
														console.log(appointment)
														const newData = {
															...appointment,
															status: "Canceled",
															cancelReason: canceling,
														}
														console.log(newData)
														await axios.put(
															`/appointment/${cancelId}`,
															newData
														)
														const appointmentData = await axios.get(
															"/appointment",
															{
																headers: {
																	"auth-token":
																		localStorage.userToken,
																},
															}
														)
														setAppointments(
															appointmentData.data.appointment
														)
														handleClose()
													}}
													fullWidth
													variant="contained"
													sx={{
														mt: 3,
														mb: 2,
														backgroundColor: "#EF4242",
													}}
												>
													Cancel Appointment
												</Button>
											</Grid>
										</Grid>
									</Box>
								</Modal>
							</>
						) : (
							<Grid item xs={6} sm={3}>
								<CardContent sx={{ flex: "0.1 0 auto" }}>
									<Typography
										variant="subtitle1"
										color="#FEB139"
										component="div"
										ml={2}
									>
										No Actions
									</Typography>
								</CardContent>
							</Grid>
						)}
					</Grid>
				</Card>
			))}
		</>
	)
}
