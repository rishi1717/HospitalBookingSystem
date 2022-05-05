import { Button, Container, Grid, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import axios from "../../axios"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
dayjs.extend(customParseFormat)

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 7,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 4,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 3,
	},
}

const Reschedule = ({ appointmentId }) => {
	const [appointment, setAppointment] = useState({})
	const [days, setDays] = useState([])
	const [startTime, setStartTime] = useState(0)
	const [startHour, setStartHour] = useState(0)
	const [startMinute, setStartMinute] = useState(0)
	const [endTime, setEndTime] = useState(0)
	const [endHour, setEndHour] = useState(0)
	const [endMinute, setEndMinute] = useState(0)
	const [booked, setBooked] = useState([])
	const [slots, setSlots] = useState([])
	const bookingDetails = async (newValue) => {
		setAppointment({ ...appointment, date: newValue })
		const appointmentsData = await axios.get(
			`/appointment/${appointment.doctorId}/${newValue}`,
			{
				headers: {
					"auth-token": localStorage.userToken,
				},
			}
		)
		setDays(appointmentsData.data.doctorTiming.days)
		setBooked(appointmentsData.data.timeArray)
		setStartTime(appointmentsData.data.doctorTiming.startTime)
		setEndTime(appointmentsData.data.doctorTiming.endTime)
	}
	useEffect(() => {
		;(async function() {
			const appointmentsData = await axios.get(
				`/appointment/${appointmentId}`,
				{
					headers: {
						"auth-token": localStorage.userToken,
					},
				}
			)
			setAppointment(appointmentsData.data.appointment)
            
		})()
	}, [])
	useEffect(() => {
		setStartHour(dayjs(startTime, "hh:mm A").format("HH"))
		setStartMinute(dayjs(startTime, "hh:mm A").format("mm"))
		setEndHour(dayjs(endTime, "hh:mm A").format("HH"))
		setEndMinute(dayjs(endTime, "hh:mm A").format("mm"))
	}, [startTime, endTime])

	useEffect(() => {
		let startTime = dayjs()
			.hour(startHour)
			.minute(startMinute)
		let endTime = dayjs()
			.hour(endHour)
			.minute(endMinute)
		let tempSlots = []
		while (startTime.isBefore(endTime)) {
			tempSlots.push(startTime.format("hh:mm A"))
			startTime = startTime.add(30, "minute")
		}
		setSlots(tempSlots)
	}, [endMinute])

	const handleTimeClick = (index, time) => {
		setAppointment({ ...appointment, time: time })
	}

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={3}>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						maxDate={new Date().setDate(new Date().getDate() + 60)}
						disablePast
						shouldDisableDate={(date) => {
							return !days.includes(date.getDay())
						}}
						label="Select date"
						id="date"
						name="date"
						value={appointment.date}
						onChange={(newValue) => {
							bookingDetails(newValue)
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
					{slots.length > 0 ? (
						<Carousel
							responsive={responsive}
							autoPlaySpeed={100000}
							// customRightArrow={<></>}
							// customLeftArrow={<></>}
							key={slots}
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
												slot === appointment.time
													? "#609acf"
													: "#f5f5f5",
											color: slot === appointment.time ? "#000" : "",
										}}
										key={index}
									>
										{slot}
									</Button>
								)
							})}
						</Carousel>
					) : (
						<Typography sx={{ fontSize: 12, p: 1.15, color: "#595959" }}>
							Select a date to see available Time slots
						</Typography>
					)}
				</Container>
			</Grid>
		</Grid>
	)
}

export default Reschedule
