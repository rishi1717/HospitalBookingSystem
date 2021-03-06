import React from "react"
import HomeCard from "../userModule/HomeCard"
import { Container, Grid } from "@mui/material"
import image1 from "../../static/images/medicalTeam.jpg"
import image2 from "../../static/images/services.png"
import image3 from "../../static/images/medicine2.webp"
import image4 from "../../static/images/hospital.webp"
import image5 from "../../static/images/userPortrait-removebg.png"
import Banner from "../userModule/Banner"
import AppointmentCard from "../userModule/AppointmentCard"
import FullLayout from "../../layouts/FullLayout"
import { MediumButton } from "../Buttons"
import { Link } from "react-router-dom"

function UserHome() {
	const [update, setUpdate] = React.useState(0)
	return (
		<FullLayout>
			<Container>
				<Banner
					smallText={`Hi ${localStorage.getItem("userName") },`}
					largeText="Welcome Back!"
					phrase="Feel better about finding Healthcare"
					image={image1}
				/>
				<Grid container spacing={2} mt={1} mb={1}>
					<AppointmentCard update={update} setUpdate={setUpdate} />
				</Grid>
				<Grid textAlign={"center"} sx={{
					mb:4
				}}>
					<Link
						style={{
							textDecoration: "none",
						}}
						to="/doctors"
					>
						<MediumButton value="Make an Appointment now" text="#606acf" color="#eaeaea"/>
					</Link>
				</Grid>
				<Grid container spacing={2} sx={{
					mb:4
				}}>
					<HomeCard
						smallPhrase="We care about our Patients. Take a look at your Profile"
						phrase="Profile"
						link="Profile"
						image={image5}
					/>
					<HomeCard
						smallPhrase="We provide our services in various Departments"
						phrase="Departments"
						link="doctors"
						image={image2}
					/>
					<HomeCard
						smallPhrase="Now in our app, you can view your Prescription"
						phrase="prescription"
						link="prescriptions"
						image={image3}
					/>
					<HomeCard
						smallPhrase="See how One Health Hospital is making an impact on lifes of our patients."
						phrase="About"
						link="about"
						image={image4}
					/>
				</Grid>
			</Container>
		</FullLayout>
	)
}

export default UserHome
