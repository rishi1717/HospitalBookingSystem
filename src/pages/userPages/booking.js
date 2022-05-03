import {
	Box,
	Button,
	Container,
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import FullLayout from "../../layouts/FullLayout"
import { MediumButton } from "../../components/Buttons"
import Unauthorized from "./Unauthorized"
import axios from "../../axios"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
dayjs.extend(customParseFormat)

// import customParseFormat from "dayjs/plugin/customParseFormat"
// dayjs.extend(customParseFormat)
// const ti = "19:20"
// const me = dayjs(ti, "HH:mm")
// console.log(me.format("hh:mm A"))

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 10,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 8,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 6,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 4,
	},
}

const Booking = () => {
	if (localStorage.userToken) {
		const location = useLocation()
		let doctor = { fee: 0, name: "not selected" }
		if (location.state) {
			doctor = location.state.doctor
		}
		const [slots, setSlots] = useState([
			1,
			2,
			3,
			4,
			5,
			6,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
		])
		const [booked, setBooked] = useState([])
		const [startTime, setStartTime] = useState(0)
		const [startHour, setStartHour] = useState(0)
		const [startMinute, setStartMinute] = useState(0)
		const [endTime, setEndTime] = useState(0)
		const [endHour, setEndHour] = useState(0)
		const [endMinute, setEndMinute] = useState(0)
		const [user, setUser] = useState({})
		const [data, setData] = useState({
			user: "",
			age: "",
			gender: "",
			phone: "",
			reason: "",
			fee: doctor.fee,
			doctor: doctor.name,
			time: null,
			date: null,
			active: true,
			status: "Scheduled",
		})

		useEffect(() => {
			;(async function() {
				const userData = await axios.get(`/user/${localStorage.userId}`, {
					headers: { "auth-token": localStorage.userToken },
				})
				setUser(userData.data.user)
			})()
		}, [])

		useEffect(() => {
			setData({
				...data,
				user: user.firstName ? user.firstName : "",
				age: user.age ? user.age : "",
				gender: user.gender ? user.gender : "",
				phone: user.phone ? user.phone : "",
			})
			reset()
		}, [user])

		useEffect(() => {
			setStartHour(dayjs(startTime, "hh:mm A").format("HH"))
			setStartMinute(dayjs(startTime, "hh:mm A").format("mm"))
			setEndHour(dayjs(endTime, "hh:mm A").format("HH"))
			setEndMinute(dayjs(endTime, "hh:mm A").format("mm"))
		}, [startTime, endTime])

		useEffect(() => {
			console.log(startHour, startMinute, endHour, endMinute)
			let startTime = dayjs()
				.hour(startHour)
				.minute(startMinute)
			let endTime = dayjs()
				.hour(endHour)
				.minute(endMinute)
			// console.log(startTime," TO ", endTime)
			let tempSlots = []
			while (startTime.isBefore(endTime)) {
				tempSlots.push(startTime.format("hh:mm A"))
				startTime = startTime.add(30, "minute")
			}
			console.log(tempSlots)
			setSlots(tempSlots)
		}, [endMinute])

		const navigate = useNavigate()
		const {
			register,
			handleSubmit,
			reset,
			formState: { errors },
		} = useForm()

		const handleChange = ({ currentTarget: input }) => {
			setData({ ...data, [input.name]: input.value })
		}

		const handleChangeSelect = (event) => {
			setData({ ...data, [event.target.name]: event.target.value })
		}

		const handleTimeClick = (index, time) => {
			setData({ ...data, time: time })
		}

		const onSubmit = async () => {
			const details = {
				...data,
				date: dayjs(data.date).format("DD/MM/YYYY"),
				userId: localStorage.userId,
				doctorId: doctor._id,
			}

			try {
				// console.log(details.time)
				// console.log(data.date)
				// console.log(doctor._id)
				if (booked.includes(details.time)) {
					alert("Appointment already booked")
				}
			} catch (err) {
				console.log(err.message)
			}

			// axios.post("/appointment", details, {
			// 	headers: { "auth-token": localStorage.userToken },
			// })
			// navigate("/confirmbooking", { state: { details: data } })
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
						<Grid item xs={12} sm={8}>
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
						<Grid item xs={6} sm={4}>
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
						<Grid item xs={6} sm={3}>
							<FormControl fullWidth>
								<InputLabel id="gender">Gender</InputLabel>
								<Select
									{...register("gender", {
										required: "Select gender!",
									})}
									required
									fullWidth
									label="Gender"
									id="gender"
									name="gender"
									value={data.gender}
									onChange={handleChangeSelect}
									error={errors.gender}
								>
									<MenuItem value={"Male"}>Male</MenuItem>
									<MenuItem value={"Female"}>Female</MenuItem>
									<MenuItem value={"Others"}>Others</MenuItem>
								</Select>
								<FormHelperText sx={{ color: "#D32F2F" }}>
									{errors.gender ? errors.gender.message : null}
								</FormHelperText>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={9}>
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
								helperText={
									errors.reason ? errors.reason.message : null
								}
							/>
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

						<Grid item xs={12} sm={3}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DatePicker
									disablePast
									{...register("date", {
										required: "Pick date!",
									})}
									label="Select date"
									id="date"
									name="date"
									value={data.date}
									onChange={async (newValue) => {
										setData({ ...data, date: newValue })
										const appointmentsData = await axios.get(
											`/appointment/${doctor._id}/${newValue}`,
											{
												headers: {
													"auth-token": localStorage.userToken,
												},
											}
										)
										setBooked(appointmentsData.data.timeArray)
										setStartTime(
											appointmentsData.data.doctorTiming.startTime
										)
										setEndTime(
											appointmentsData.data.doctorTiming.endTime
										)
										reset()
									}}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</Grid>
						<Grid item xs={12} sm={9}>
							<Container
								sx={{
									border: 1,
									borderColor: "#595959",
									borderRadius: 1,
									p: 1,
								}}
							>
								<Carousel
									responsive={responsive}
									autoPlaySpeed={100000}
									customRightArrow={<></>}
									customLeftArrow={<></>}
								>
									{slots.map((slot, index) => {
										return (
											<Button
												onClick={() => {
													handleTimeClick(index, slot)
												}}
												disabled={booked.includes(slot)}
												sx={{
													backgroundColor:
														slot === data.time
															? "#609acf"
															: "#f5f5f5",
													color: slot === data.time ? "#000" : "",
												}}
												key={index}
											>
												{slot}
											</Button>
										)
									})}
									{slots.length === 0 ? (
										<Typography sx={{ fontSize: 12 }}>
											No Time slot available
										</Typography>
									) : null}
								</Carousel>
							</Container>
						</Grid>
					</Grid>
					<Grid item xs={6} sm={6}>
						<Button
							type="submit"
							sx={{
								mt: 4,
								ml: 1,
								backgroundColor: "#609acf",
								color: "white",
								"&:hover": {
									backgroundColor: "white",
									color: "#609acf",
								},
							}}
						>
							Book Appointment
						</Button>
						<Link style={{ textDecoration: "none" }} to="/doctors">
							<MediumButton
								value="Cancel"
								color="#EF4242"
								text="white"
							/>
						</Link>
					</Grid>
				</Box>
			</FullLayout>
		)
	} else {
		return <Unauthorized />
	}
}

export default Booking
