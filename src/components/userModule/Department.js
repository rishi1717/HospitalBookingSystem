import React, { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import DoctorCard from "./DoctorCard"
import image1 from "../../static/images/doctorPortrait.webp"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import axios from "axios"

export default function Departments() {
	const [departments, setDepartments] = useState([])
	const [doctors, setDoctors] = useState([])
	useEffect(() => {
		;(async function() {
			const departmentData = await axios.get(
				"http://localhost:4000/departments"
			)
			const doctorData = await axios.get("http://localhost:4000/doctors")
			setDepartments(departmentData.data)
			setDoctors(doctorData.data)
		})()
	}, [])
	return (
		<div>
			{departments.map((department) => (
				<Accordion
					key={department.id}
					sx={{
						m: "1rem",
						borderRadius: 2,
						"&:before": {
							display: "none",
						},
						backgroundColor: "#eaeaea",
					}}
				>
					<AccordionSummary>
						<Typography>{department.name}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{doctors.map((doctor) => (
							<div key={doctor.id}>
								{department.doctorid.includes(doctor.id) ? (
									<DoctorCard
										key={doctor.id}
										doctor={doctor}
										image={image1}
									/>
								) : (
									""
								)}
							</div>
						))}
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	)
}
