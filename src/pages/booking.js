import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import React from "react"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"

const Booking = () => {
	const [value, setValue] = React.useState(null)
	const navigate = useNavigate()
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			name: data.get("patient"),
			doctor: data.get("doctor"),
			date: value,
		})
		navigate("/confirmbooking")
	}

	return (
		<>
			<Typography
				sx={{
                    textAlign:'center',
					fontSize: { xs: "1rem", sm: "1.5rem" },
					fontFamily: "sans-serif",
					mt: 2,
					fontWeight: "bold",
					color: "#595959",
				}}
				component="p"
			>
				Booking
			</Typography>
			<Box
				component="form"
				noValidate
				onSubmit={handleSubmit}
				sx={{ m: { xs: 2, sm: 10 } }}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12}>
						<TextField
							name="patient"
							required
							fullWidth
							id="patient"
							label="Patient Name"
							autoFocus
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="age"
							label="Age"
							name="age"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="gender"
							label="Gender"
							name="gender"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="phone"
							label="Phone"
							name="phone"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="doctor"
							label="Appointment to"
							name="doctor"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="reason"
							label="Reason for appointment"
							name="reason"
						/>
					</Grid>
					<Grid item xs={6}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								label="Select date to be appointed"
								id="date"
								name="date"
								value={value}
								onChange={(newValue) => {
									setValue(newValue)
								}}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
					</Grid>
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Book
				</Button>
			</Box>
		</>
	)
}

export default Booking
