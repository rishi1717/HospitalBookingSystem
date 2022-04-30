import { Typography } from "@mui/material"
import axios from "../../axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import PatientTable from "../../components/doctorModule/patientTable"
import DoctorsLayout from "../../layouts/DoctorsLayout"

const DoctorPatients = () => {
	const docState = useSelector((storeState) => storeState.doctor)
	const [users, setUsers] = useState([])
	useEffect(() => {
		;(async function() {
			const appointmentData = await axios.get("/users", {
				headers: { "auth-token": docState.token },
			})
			setUsers(appointmentData.data.appointment)
		})()
	}, [])
	if (docState.token) {
		return (
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
					Patients
				</Typography>
				<Typography
					sx={{
						fontSize: {
							xs: "1.2rem",
							sm: "1.4rem",
						},
						fontFamily: "sans-serif",
						color: "#595959",
						textAlign: "center",
						mb: 3,
						mt: { xs: 1, sm: 3 },
					}}
					component="p"
				>
					Your patients list
				</Typography>
				<PatientTable users={users}/>
			</DoctorsLayout>
		)
	}
}

export default DoctorPatients
