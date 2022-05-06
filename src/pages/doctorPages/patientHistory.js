import { Typography } from "@mui/material"
import axios from "../../axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AppointmentTable from "../../components/doctorModule/appointmentTable"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import { useLocation } from "react-router-dom"
import Unauthorized from "./unauthorized"

const PatientHistory = () => {
	const location = useLocation()
	const { user } = location.state
	const [appointments, setAppointments] = useState([])
	const docState = useSelector((storeState) => storeState.doctor)
	useEffect(() => {
		;(async function() {
			const appointmentData = await axios.get(`/appointment/${user._id}`, {
				headers: { "auth-token": docState.token },
			})
			setAppointments(appointmentData.data.appointment)
		})()
	}, [])
	if (docState.token) {
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
					Patient History
				</Typography>
				<Typography
					sx={{
						fontSize: {
							xs: "1rem",
							sm: "1.2rem",
						},
						fontFamily: "sans-serif",
						color: "#595959",
						textAlign: "center",
						mb: 3,
						mt: { xs: 1, sm: 3 },
					}}
					component="p"
				>
					Your Appointments With Patient
				</Typography>
				<AppointmentTable appointments={appointments} />
			</DoctorsLayout>
		)
	} else {
		return <Unauthorized />
	}
}

export default PatientHistory
