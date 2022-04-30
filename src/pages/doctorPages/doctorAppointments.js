import { TextField, Toolbar, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import AppointmentTable from "../../components/doctorModule/appointmentTable"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { useSelector } from "react-redux"
import axios from "../../axios"

const DoctorAppointments = () => {
	const [appointments,setAppointments] = useState([])
	const docState = useSelector((storeState) => storeState.doctor)
	useEffect(() => {
		(async function() {
			const appointmentData = await axios.get("/appointment", {
				headers: { "auth-token": docState.token },
			})
			setAppointments(appointmentData.data.appointment)
		})()
	}, [])
	if (docState.token) {
		const [date, setDate] = useState(null)
		return (
			<DoctorsLayout>
				<Typography
					sx={{
						fontSize: {
							xs: "1.2rem",
							sm: "1.4rem",
						},
						display: {
							xs: "none",
							sm: "block",
						},
						fontFamily: "sans-serif",
						color: "#1976D2",
					}}
					component="p"
				>
					Appointments
				</Typography>
				<Typography
					sx={{
						fontSize: {
							xs: "1.2rem",
							sm: "1.4rem",
						},
						fontFamily: "sans-serif",
						color: "#595959",
						textAlign: "center",
						mb: 3,
						mt: { xs: 1, sm: 3 },
					}}
					component="p"
				>
					Your Appointments today
				</Typography>
				<AppointmentTable appointments={appointments} />
				<Toolbar />
				<Typography
					sx={{
						fontSize: {
							xs: "1.2rem",
							sm: "1.4rem",
						},
						fontFamily: "sans-serif",
						color: "#595959",
						textAlign: "center",
						mb: 3,
					}}
					component="p"
				>
					Appointment History
				</Typography>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						label="Select Date"
						value={date}
						onChange={(newDate) => {
							setDate(newDate)
						}}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
				<AppointmentTable appointments={appointments} />
			</DoctorsLayout>
		)
	}
}

export default DoctorAppointments
