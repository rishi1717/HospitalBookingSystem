import { TextField, Toolbar, Typography } from "@mui/material"
import React, { useState } from "react"
import ScheduleTable from "../../components/doctorModule/scheduleTable"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

const DoctorSchedule = () => {
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
			<ScheduleTable />
		</DoctorsLayout>
	)
}

export default DoctorSchedule
