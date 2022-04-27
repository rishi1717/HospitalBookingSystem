import { Toolbar, Typography } from '@mui/material'
import React from 'react'
import PatientTable from '../../components/doctorModule/patientTable'
import DoctorsLayout from '../../layouts/DoctorsLayout'

const DoctorPatients = () => {
  return (
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
				Patients
			</Typography>
			<Toolbar sx={{display:{xs:'none',sm:'block'}}}/>
			<Typography
				sx={{
					fontSize: {
						xs: "1rem",
						sm: "1.2rem",
					},
					fontFamily: "sans-serif",
					color: "#595959",
                    textAlign:'center',
                    mb:3
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