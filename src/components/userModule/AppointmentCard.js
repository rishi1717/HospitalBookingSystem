import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import {
	Button,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material"
import { SmallButton } from "../Buttons"
import axios from "../../axios.js"
import Modal from "@mui/material/Modal"
import Reschedule from "./Reschedule"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "60vw",
	bgcolor: "background.paper",
	borderRadius: "4px",
	boxShadow: 24,
	p: 4,
}

export default function AppointmentCard({ update, setUpdate }) {
	const [modalAppointment, setModalAppointment] = useState({})
	const [open, setOpen] = React.useState(false)
	const [open2, setOpen2] = React.useState(false)
	const [canceling, setCanceling] = React.useState("")
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}
	const handleOpen2 = () => {
		setOpen2(true)
	}
	const handleClose2 = () => {
		setOpen2(false)
	}

	const [cancelId, setCancelId] = useState(0)

	const [appointments, setAppointments] = useState([])
	useEffect(() => {
		;(async function() {
			const appointmentData = await axios.get(
				`/appointment/${localStorage.userId}`,
				{
					headers: { "auth-token": localStorage.userToken },
				}
			)
			setAppointments(appointmentData.data.appointment)
		})()
	}, [update])

	if (appointments.length === 0) {
		return (
			<Container sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}} >
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						"& > :not(style)": {
							width: "100%",
							m: 2,
							p: 5,
							justifyContent: "center",
							alignItems: "center",
						},
					}}
				>
					<Paper
						elevation={16}
						sx={{
							border: "1px solid #609acf",
							backgroundColor: "#eaeaea",
							p: { xs: 1, sm: 2 },
						}}
					>
						<Typography
							sx={{
								fontSize: {
									xs: "1rem",
									sm: "1.4rem",
									color: "#595959",
								},
								textAlign: "center",
							}}
							component="p"
						>
							You have no appointments scheduled.
						</Typography>
					</Paper>
				</Box>
			</Container>
		)
	} else {
		return (
			<>
				{appointments.map((appointment, index) => {
					if (appointment.status === "Scheduled") {
						return (
							<Grid key={appointment._id} item xs={12} sm={6}>
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
											border: "1px solid #609acf",
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
											Appointment with Dr. {appointment.doctor}
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
											columnSpacing={{ xs: 4, sm: 0 }}
										>
											<Grid
												onClick={() => {
													setCancelId(appointment._id)
													handleOpen2()
												}}
												item
												xs={3.5}
												sm={3}
												sx={{ ml: { sm: "auto", xs: 0 } }}
											>
												<SmallButton
													color="#FEB139"
													value="Reschedule"
												/>
											</Grid>
											<Grid
												onClick={() => {
													setCancelId(appointment._id)
													handleOpen()
												}}
												item
												xs={2}
												sm={2.9}
												sx={{ mr: { xs: "2rem", sm: "0.5rem" } }}
											>
												<SmallButton
													color="#CC3E34"
													value="Cancel"
												/>
											</Grid>
										</Grid>
									</Paper>
								</Box>

								<Modal
									open={open2}
									onClose={handleClose2}
									aria-labelledby="modal-modal-title"
									aria-describedby="modal-modal-description"
								>
									<Box sx={style}>
										<Reschedule
											appointmentId={cancelId}
											appointment={modalAppointment}
											setAppointment={setModalAppointment}
										/>
										<Grid container spacing={2}>
											<Grid item xs={6} sm={4} ml="auto">
												<Button
													onClick={handleClose2}
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
														await axios.put(
															`/appointment/${cancelId}`,
															{
																date: modalAppointment.date,
																time: modalAppointment.time,
															},
															{
																headers: {
																	"auth-token": localStorage.getItem(
																		"userToken"
																	),
																},
															}
														)
														setUpdate(!update)
														handleClose2()
													}}
													fullWidth
													variant="contained"
													sx={{
														mt: 3,
														mb: 2,
														backgroundColor: "orange",
														fontSize: "0.8rem",
													}}
												>
													Reschedule
												</Button>
											</Grid>
										</Grid>
									</Box>
								</Modal>

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
														const newData = {
															status: "Canceled",
															cancelReason: canceling,
														}
														await axios.put(
															`/appointment/${cancelId}`,
															newData,
															{
																headers: {
																	"auth-token":
																		localStorage.userToken,
																},
															}
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
														setUpdate(!update)
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
							</Grid>
						)
					} else {
						return null
					}
				})}
			</>
		)
	}
}
