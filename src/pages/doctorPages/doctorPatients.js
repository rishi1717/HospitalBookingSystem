import { Typography } from "@mui/material"
import React from "react"
import PatientTable from "../../components/doctorModule/patientTable"
import DoctorsLayout from "../../layouts/DoctorsLayout"

const DoctorPatients = () => {
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
			<PatientTable />
		</DoctorsLayout>
	)
}

export default DoctorPatients
