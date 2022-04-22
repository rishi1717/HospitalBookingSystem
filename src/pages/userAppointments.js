import React from "react"
import { Card, CardContent, Container, Grid, Typography } from "@mui/material"
import image1 from "../static/images/appointment.svg"
import Banner from "../components/userModule/Banner"
import AppointmentCard from "../components/userModule/AppointmentCard"
import HeadAndPara from "../components/userModule/headAndPara"
import { SmallButton } from "../components/Buttons"
import AppointmentRows from "../components/userModule/AppointmentRows"
import { Link } from "react-router-dom"

function UserAppointments() {
	return (
		<div>
			<Container>
				<Banner
					smallText="Hi Rishi,"
					phrase="View your appointments"
					image={image1}
				/>
				<Grid container spacing={2} mt={1} mb={1}>
					<AppointmentCard />
				</Grid>
				<Grid textAlign={"center"}>
					<HeadAndPara
						head="Well Trained and Dedicated Doctors and Staffs "
						para="We have highly trained experts & doctors, trained in international institutions, coupled with years of experience to deliver just the right medical outcomes. Our team of highly qualified doctors have several unique achievements to their credits, but the most important thing is our multi-disciplinary approach to providing the best possible treatment for each patient."
					/>

					<Link style={{ textDecoration: "none" }} to="/doctors">
						<SmallButton value="Make an Appointment now" />
					</Link>
					<HeadAndPara head="Your appointment history" para="" />
				</Grid>
				<Card
					sx={{
						display: { xs: "none", sm: "flex" },
						m: "1rem",
						flexDirection: { xs: "column", md: "row" },
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
				<AppointmentRows />
			</Container>
		</div>
	)
}

export default UserAppointments
