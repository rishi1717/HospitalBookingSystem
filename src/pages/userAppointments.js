import React from "react"
import { Container, Grid } from "@mui/material"
import image1 from "../static/images/appointment.svg"
import Banner from "../components/userModule/Banner"
import Footer from "../components/userModule/footer"
import AppointmentCard from "../components/userModule/AppointmentCard"

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
					<AppointmentCard/>
				</Grid>
			</Container>
			<Footer />
		</div>
	)
}

export default UserAppointments
