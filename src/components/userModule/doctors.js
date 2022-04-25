import React from "react"
import DoctorCard from "./DoctorCard"
import image1 from "../../static/images/doctorPortrait.webp"

export default function Doctors({ departments, doctors }) {
	return (
		<div>
			{doctors.map((doctor) => (
				<DoctorCard key={doctor._id} doctor={doctor} image={image1} />
			))}
		</div>
	)
}
