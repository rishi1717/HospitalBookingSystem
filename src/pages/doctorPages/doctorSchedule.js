import { TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import ScheduleTable from "../../components/doctorModule/scheduleTable"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { useSelector } from "react-redux"
import axios from "../../axios"
import Unauthorized from "./unauthorized"

const DoctorSchedule = () => {
	const docState = useSelector((storeState) => storeState.doctor)

	if (docState.token) {
		const [schedules, setSchedules] = useState([])
		useEffect(() => {
			;(async function() {
				const scheduleData = await axios.get(
					`/schedule/?id=${docState.id}`,
					{
						headers: { "auth-token": docState.token },
					}
				)
				setSchedules(scheduleData.data.schedule)
			})()
		}, [])
		const [date, setDate] = useState(new Date())
		return (
			<DoctorsLayout>
				<Typography
					sx={{
						fontSize: {
							xs: "1.2rem",
							sm: "1.4rem",
						},
						display: { xs: "none", sm: "block" },
						fontFamily: "sans-serif",
						color: "#1976D2",
					}}
					component="p"
				>
					Schedule
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
					Your Schedule
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
				<ScheduleTable schedules={schedules} />
			</DoctorsLayout>
		)
	} else {
		return <Unauthorized />
	}
}

export default DoctorSchedule
