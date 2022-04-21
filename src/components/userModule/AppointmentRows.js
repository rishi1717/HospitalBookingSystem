import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import axios from "axios"
import { Grid } from "@mui/material"
import { SmallButton } from "../Buttons"

export default function AppointmentRows(props) {
	const [appointments, setAppointments] = React.useState([])
	React.useEffect(() => {
		;(async function() {
			const appointmentData = await axios.get(
				"http://localhost:4000/appointments"
			)
			setAppointments(appointmentData.data)
		})()
	}, [])
	return (
		<>
			{appointments.map((appointment) => (
				<Card
					key={appointment.id}
					sx={{
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
									color="text.secondary"
									component="div"
								>
									{appointment.status}
								</Typography>
							</CardContent>
						</Grid>
						{appointment.active ? (
							<Grid item xs={6} sm={3}>
								<CardContent sx={{display:'flex', flex: "0.1 0 auto" }}>
									<SmallButton value="reschedule" color="#FEB139" />
									<SmallButton value="cancel" color="#CC3E34" />
								</CardContent>
							</Grid>
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
