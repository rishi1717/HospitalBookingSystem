import { Grid, Typography } from "@mui/material"
import React from "react"
import SelectionCard from "../../components/doctorModule/SelectionCard"
import WelcomeCard from "../../components/doctorModule/WelcomeCard"
import DoctorsLayout from "../../layouts/DoctorsLayout"

const DoctorHome = () => {
	return (
		<>
			<DoctorsLayout>
				<Typography
					sx={{
						fontSize: {
							xs: "1rem",
							sm: "1.2rem",
						},
						display: { xs: "none", sm: "block" },
						fontFamily: "sans-serif",
						color: "#1976D2",
					}}
					component="p"
				>
					DashBoard
				</Typography>
				<WelcomeCard />
				<Grid container spacing={2} marginTop={2}>
					<SelectionCard value="Appointments" />
					<SelectionCard value="Patients" />
					<SelectionCard value="Schedule" />
					<SelectionCard value="Profile" />
				</Grid>
			</DoctorsLayout>
		</>
	)
}

export default DoctorHome