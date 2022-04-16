import * as React from "react"
import Typography from "@mui/material/Typography"
import DoctorCard from "./DoctorCard"
import image1 from "../../static/images/doctorPortrait.webp"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"

let doctors = ["Rishi", "Adnan", "Vishal"]
let departments = ["Dermatology", "Orthopaedic", "General Medicine"]

export default function Departments() {
	return (
		<div>
			{departments.map((e) => (
				<Accordion
					key={e}
					sx={{
						m: "1rem",
						borderRadius: 2,
						"&:before": {
							display: "none",
						},
                        backgroundColor:'#eaeaea'
					}}
				>
					<AccordionSummary>
						<Typography>{e}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{doctors.map((d) => (
							<DoctorCard key={d} image={image1} />
						))}
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	)
}
