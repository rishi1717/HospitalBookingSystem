import React from "react"
import { Container, Grid, Typography } from "@mui/material"
import Footer from "../components/userModule/footer"
import { Box } from "@mui/system"
import imageJoy from "../static/images/joyful-female-doctor.svg"
import imageTeams from "../static/images/teams.webp"
import imageLab from "../static/images/labaratory2.webp"
import AboutCard from "../components/userModule/AboutCard"
import image1 from "../static/images/distancing.svg"
import image2 from "../static/images/maskedMan.svg"
import image3 from "../static/images/tempCheck.svg"
import image4 from "../static/images/sanitize.svg"
import HeadAndPara from "../components/userModule/headAndPara"

function AboutUs() {
	return (
		<div>
			<Container>
				<Grid textAlign={"center"}>
					<Typography
						sx={{
							fontSize: { xs: "1.2rem", sm: "2rem" },
							fontFamily: "sans-serif",
							mt: 2,
							fontWeight: "bold",
							color: "#595959",
						}}
						component="p"
					>
						About Us
					</Typography>
					<Box
						mt={1}
						sm={4}
						md={7}
						component="img"
						sx={{
							height: "auto",
							width: "auto",
							// maxHeight: {xs:0, sm: 233, md: 400 },
							maxWidth: { xs: 300, sm: 400, md: 500 },
						}}
						alt="Hospital"
						src={imageJoy}
					/>
					<HeadAndPara
						head="Committed To Your Safety"
						para="At One Health Hospital we continue to follow the highest level of safety precautions as we treat our patients. We are strictly adhering to all ICMR & WHO mandated protocols, to keep you and your family safe & healthy."
					/>
					<Grid container spacing={2}>
						<AboutCard
							image={image3}
							head="Screening for all"
							text="All our employees & patients must go through a mandatory
						thermal screening before entering the hospital premises."
						/>
						<AboutCard
							image={image2}
							head="Masks for everyone"
							text="Wearing a mask that securely covers the nose & mouth is mandatory for all patients, attendants, doctors & hospital staff."
						/>
						<AboutCard
							image={image1}
							head="Worry-free treatment"
							text="Everyone is requested to adhere to social distancing norms in waiting and all public areas."
						/>
						<AboutCard
							image={image4}
							head="Sanitized Facility"
							text="We regularly disinfect medical equipment and the facility to ensure a healthy and virus free environment."
						/>
					</Grid>

					<HeadAndPara
						head="Well Trained and Dedicated Doctors and Staffs "
						para="We have highly trained experts & doctors, trained in international institutions, coupled with years of experience to deliver just the right medical outcomes. Our team of highly qualified doctors have several unique achievements to their credits, but the most important thing is our multi-disciplinary approach to providing the best possible treatment for each patient."
					/>
					<Box
						mt={1}
						sm={4}
						md={7}
						component="img"
						sx={{
							height: "auto",
							width: "auto",
							// maxHeight: {xs:0, sm: 233, md: 400 },
							maxWidth: { xs: 300, sm: 400, md: 500 },
						}}
						alt="Hospital"
						src={imageTeams}
					/>

					<HeadAndPara
						head="Top Notch Equipments and Laboratories"
						para="Good clinical outcomes starts with the right diagnosis. Our multi-disciplinary approach does just that. Our team of specialists will listen to your needs, evaluate your condition and collaborate with different specialisations on complex cases, to come up with the right treatment plan. Patients are provided with multiple treatment options, the most suitable of which is arrived at after through a cross-function, cross-specialisation committee such as Tumour board that decides the best course of action."
					/>
					<Box
						mt={1}
						sm={4}
						md={7}
						component="img"
						sx={{
							height: "auto",
							width: "auto",
							// maxHeight: {xs:0, sm: 233, md: 400 },
							maxWidth: { xs: 300, sm: 400, md: 500 },
						}}
						alt="Hospital"
						src={imageLab}
					/>
				</Grid>
			</Container>
			<Footer />
		</div>
	)
}

export default AboutUs
