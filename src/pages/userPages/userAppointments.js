import React, { useRef } from "react"
import {
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
} from "@mui/material"
import image1 from "../../static/images/appointment.svg"
import Banner from "../../components/userModule/Banner"
import AppointmentCard from "../../components/userModule/AppointmentCard"
import HeadAndPara from "../../components/userModule/headAndPara"
import { MediumButton } from "../../components/Buttons"
import AppointmentRows from "../../components/userModule/AppointmentRows"
import { Link } from "react-router-dom"
import FullLayout from "../../layouts/FullLayout"
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined"
import Unauthorized from "./Unauthorized"

function UserAppointments() {
	const [update, setUpdate] = React.useState(0)
	const appointmentRef = useRef()
	const handleClickAppointment = () => {
		appointmentRef.current.scrollIntoView({ behavior: "smooth" })
	}

	if (localStorage.userToken) {
		return (
			<FullLayout>
				<Container>
					<Banner
						smallText="Hi Rishi,"
						phrase="View your appointments"
						image={image1}
					/>
					<Grid container spacing={2} mt={1} mb={1}>
						<AppointmentCard key={update} update={update} setUpdate={setUpdate} />
					</Grid>

					<Grid textAlign={"center"}>
						<Button
							onClick={handleClickAppointment}
							sx={{
								borderRadius: 50,
								background: "#eaeaea",
							}}
						>
							See your history <ArrowDownwardOutlinedIcon />
						</Button>
						<HeadAndPara
							head="Well Trained and Dedicated Doctors and Staffs "
							para="We have highly trained experts & doctors, trained in international institutions, coupled with years of experience to deliver just the right medical outcomes. Our team of highly qualified doctors have several unique achievements to their credits, but the most important thing is our multi-disciplinary approach to providing the best possible treatment for each patient."
						/>

						<Link
							style={{
								textDecoration: "none",
							}}
							to="/doctors"
						>
							<MediumButton value="Make an Appointment now" />
						</Link>
						<div ref={appointmentRef}>
							<HeadAndPara head="Your appointment history" para="" />
						</div>
					</Grid>

					<Card
						sx={{
							display: {
								xs: "none",
								sm: "flex",
							},
							m: "1rem",
							flexDirection: {
								xs: "column",
								md: "row",
							},
							backgroundColor: "#eaeaea",
						}}
					>
						<Grid container spacing={2}>
							<Grid item xs={3}>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography
										variant="subtitle1"
										color="#595959"
										component="div"
										borderRight={1}
									>
										Doctor
									</Typography>
								</CardContent>
							</Grid>

							<Grid item xs={2}>
								<CardContent>
									<Typography
										variant="subtitle1"
										color="#595959"
										component="div"
										borderRight={1}
									>
										Date
									</Typography>
								</CardContent>
							</Grid>

							<Grid item xs={2}>
								<CardContent>
									<Typography
										variant="subtitle1"
										color="#595959"
										component="div"
										borderRight={1}
									>
										Time
									</Typography>
								</CardContent>
							</Grid>

							<Grid item xs={2.5}>
								<CardContent>
									<Typography
										variant="subtitle1"
										color="#595959"
										component="div"
										borderRight={1}
									>
										Status
									</Typography>
								</CardContent>
							</Grid>

							<Grid item xs={2}>
								<CardContent>
									<Typography
										variant="subtitle1"
										color="#595959"
										component="div"
									>
										Options
									</Typography>
								</CardContent>
							</Grid>
						</Grid>
					</Card>
					<AppointmentRows key={update} update={update} setUpdate={setUpdate} />
				</Container>
			</FullLayout>
		)
	} else {
		return <Unauthorized />
	}
}

export default UserAppointments
