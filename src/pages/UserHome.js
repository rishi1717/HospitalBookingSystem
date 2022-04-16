import React from "react"
import HomeCard from "../components/userModule/HomeCard"
import UserNavbar from "../components/userModule/UserNavbar"
import { Container, Grid } from "@mui/material"
import image1 from "../static/images/medicalTeam.jpg"
import image2 from "../static/images/services.png"
import image3 from "../static/images/medicine2.webp"
import image4 from "../static/images/hospital.webp"
import image5 from "../static/images/userPortrait-removebg.png"
import Banner from "../components/userModule/Banner"
import Footer from "../components/userModule/footer"
import AppointmentCard from "../components/userModule/AppointmentCard"

function UserHome() {
	return (
		<div>
			<UserNavbar />
			<Container>
				<Banner
					smallText="Hi Rishi,"
					largeText="Welcome Back!"
					phrase="Feel better about finding Healthcare"
					image={image1}
				/>
				<Grid container spacing={2} mt={1} mb={1}>
				<AppointmentCard doctor='Dr.Santhosh'/>
				</Grid>
				<Grid container spacing={2}>
					<HomeCard
						smallPhrase="We care about our Patients. Take a look at your Profile"
						phrase="Profile"
						image={image5}
					/>
					<HomeCard
						smallPhrase="We provide our services in various Departments"
						phrase="Departments"
						image={image2}
					/>
					<HomeCard
						smallPhrase="Now in our app, you can view your Prescription"
						phrase="Prescription"
						image={image3}
					/>
					<HomeCard
						smallPhrase="See how One Health Hospital is making an impact on lifes of our patients."
						phrase="About"
						image={image4}
					/>
				</Grid>
			</Container>
			<Footer />
		</div>
	)
}

export default UserHome
