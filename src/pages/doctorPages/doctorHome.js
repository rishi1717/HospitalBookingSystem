import { Button, Grid, Typography } from "@mui/material"
import React from "react"
import SelectionCard from "../../components/doctorModule/SelectionCard"
import WelcomeCard from "../../components/doctorModule/WelcomeCard"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import { useSelector, useDispatch } from "react-redux"
import { addDoctorToken,removeDoctorToken } from "../../redux/doctorSlice"

const DoctorHome = () => {
	const docToken = useSelector((storeState) => storeState.doctor)
	const dispatch = useDispatch()
	console.log(docToken)
	if (localStorage.doctorToken) {
		return (
			<>
				<DoctorsLayout>
					<Typography
						sx={{
							fontSize: {
								xs: "1.2rem",
								sm: "1.4rem",
							},
							display: { xs: "none", sm: "block" },
							fontFamily: "sans-serif",
							color: "#1976D2",
						}}
						component="p"
					>
						DashBoard
					</Typography>
					<Button
						onClick={() => {
							dispatch(addDoctorToken('rishirrxx'))
							console.log(docToken.token)
						}}
					>
						click
					</Button>
					<Button
						onClick={() => {
							dispatch(removeDoctorToken())
							console.log(docToken.token)
						}}
					>
						remove
					</Button>
					<WelcomeCard />
					<Grid container spacing={2} marginTop={2}>
						<SelectionCard
							value="Appointments"
							link="/doctor/appointments"
						/>
						<SelectionCard value="Patients" link="/doctor/patients" />
						<SelectionCard value="Schedule" link="/doctor/schedule" />
						<SelectionCard value="Profile" link="/doctor/profile" />
					</Grid>
				</DoctorsLayout>
			</>
		)
	}
}

export default DoctorHome
