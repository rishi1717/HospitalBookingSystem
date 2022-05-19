import { Pagination, TextField, Toolbar, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import AppointmentTable from "../../components/doctorModule/appointmentTable"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { useSelector } from "react-redux"
import axios from "../../axios"
import Unauthorized from "./unauthorized"
import { Box } from "@mui/system"

const DoctorAppointments = () => {
	const [appointments, setAppointments] = useState([])
	const [appointmentsByDate, setAppointmentsByDate] = useState([])
	const [viewApppointments, setViewAppointments] = useState([])
	const [page, setPage] = useState(1)
	const pageItems = 5
	const pageCount = Math.ceil(appointments.length / pageItems)
	const docState = useSelector((storeState) => storeState.doctor)
	useEffect(() => {
		;(async function() {
			const appointmentData = await axios.get(
				`/appointment/doctor/${docState.id}`,
				{
					headers: { "auth-token": docState.token },
				}
			)
			setAppointments(appointmentData.data.appointment)
		})()
	}, [])
	useEffect(() => {
		setViewAppointments(
			appointments.slice(
				(page - 1) * pageItems,
				(page - 1) * pageItems + pageItems
			)
		)
	}, [appointments])
	useEffect(() => {
		setViewAppointments(
			appointments.slice(
				(page - 1) * pageItems,
				(page - 1) * pageItems + pageItems
			)
		)
	}, [page])
	const handlePageChange = (event, value) => {
		setPage(value)
	}
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
				<AppointmentTable appointments={viewApppointments} />
				<Box
					sx={{
						mt: 2,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Pagination
						count={pageCount}
						onChange={handlePageChange}
						color="primary"
					/>
				</Box>
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
					Appointment By Date
				</Typography>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						label="Select Date"
						value={date}
						onChange={async (newDate) => {
							setDate(newDate)
							const appointmentData = await axios.get(
								`/appointment/date/${newDate}/${docState.id}`,
								{
									headers: {
										"auth-token": docState.token,
									},
								}
							)
							setAppointmentsByDate(appointmentData.data.appointment)
						}}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
				<AppointmentTable appointments={appointmentsByDate} />
			</DoctorsLayout>
		)
	} else {
		return <Unauthorized />
	}
}

export default DoctorAppointments
