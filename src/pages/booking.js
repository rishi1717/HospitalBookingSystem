import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
// import TimePicker from 'react-time-picker'
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import FullLayout from "../layouts/FullLayout"

const Booking = () => {
	const location = useLocation()
	let doctor
	if (location.state) {
		doctor = location.state.doctor
	}

	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [date, setDate] = React.useState("")
	const [time, setTime] = React.useState("")

	useEffect(() => {
		console.log(date)
		setData({ ...data, date: date })
	}, [date])
	useEffect(() => {
		console.log(time)
		setData({ ...data, time: time })
	}, [time])

	const [data, setData] = useState({
		user: "",
		age: "",
		gender: "",
		phone: "",
		reason: "",
		fee: doctor.fee,
		doctor: doctor.name,
		time: time,
		date: date,
		active: true,
		status: "Scheduled",
	})
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const onSubmit = () => {
		navigate("/confirmbooking", { state: { details: data } })
	}

	return (
		<FullLayout>
			<Typography
				sx={{
					textAlign: "center",
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
				onSubmit={handleSubmit(onSubmit)}
				sx={{ m: { xs: 2, sm: 10 } }}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12}>
						<TextField
							{...register("user", {
								required: "Provide patient name!",
								minLength: {
									value: 2,
									message: "Atleast 2 characters required",
								},
							})}
							name="user"
							required
							fullWidth
							id="user"
							label="Patient Name"
							autoFocus
							onChange={handleChange}
							value={data.user}
							error={errors.user}
							helperText={errors.user ? errors.user.message : null}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register("age", {
								required: "Provide age!",
							})}
							required
							fullWidth
							id="age"
							label="Age"
							name="age"
							onChange={handleChange}
							value={data.age}
							error={errors.age}
							helperText={errors.age ? errors.age.message : null}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register("gender", {
								required: "Provide your gender",
							})}
							required
							fullWidth
							id="gender"
							label="Gender"
							name="gender"
							onChange={handleChange}
							value={data.gender}
							error={errors.gender}
							helperText={errors.gender ? errors.gender.message : null}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register("phone", {
								required: "Provide phone number!",
								minLength: {
									value: 9,
									message: "Invalid phone",
								},
							})}
							required
							fullWidth
							id="phone"
							label="Phone"
							name="phone"
							onChange={handleChange}
							value={data.phone}
							error={errors.phone}
							helperText={errors.phone ? errors.phone.message : null}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register("reason", {
								required: "State reason for appointment!",
								minLength: {
									value: 5,
									message: "Atleast 5 characters required",
								},
							})}
							required
							fullWidth
							id="reason"
							label="Reason for appointment"
							name="reason"
							onChange={handleChange}
							value={data.reason}
							error={errors.reason}
							helperText={errors.reason ? errors.reason.message : null}
						/>
					</Grid>
					<Grid item xs={4}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								label="Select date to be appointed"
								id="date"
								name="date"
								value={date}
								onChange={(newValue) => {
									setDate(newValue)
								}}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={4}>
						{/* <TimePicker
							amPmAriaLabel="Select AM/PM"
							format="h:m a"
							onChange={setTime}
							value={time}
						/> */}
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<TimePicker
								label="Select time to be appointed"
								id="time"
								name="time"
								value={time}
								onChange={(newValue) => {
									setTime(newValue)
								}}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={8}>
						<TextField
							fullWidth
							id="doctor"
							label="Appointment to"
							name="doctor"
							value={doctor.name}
							InputProps={{
								style: {
									fontSize: "1rem",
									color: "#595959",
									fontWeight: "bold",
								},
							}}
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							fullWidth
							id="fee"
							label="Fee to be paid"
							name="fee"
							value={doctor.fee + " Rs/"}
							InputProps={{
								style: {
									fontSize: "1.1rem",
									color: "#595959",
									fontWeight: "bold",
								},
							}}
						/>
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

				<Button
					fullWidth
					variant="contained"
					sx={{ backgroundColor: "#EF4242", mt: 3, mb: 2 }}
					onClick={() => navigate("/doctors")}
				>
					Cancel
				</Button>
			</Box>
		</FullLayout>
	)
}

export default Booking
