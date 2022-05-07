import { Container, Typography } from "@mui/material"
import axios from "../../axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AdminLayout from "../../layouts/AdminLayout"

const Patients = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	const [data, setData] = useState([])
	useEffect(() => {
		;(async function() {
			try {
				const response = await axios.get("/user", {
					headers: {
						"auth-token": adminState.token,
					},
				})
				setData(response.data.user)
			} catch (err) {
				console.log(err.message)
			}
		})()
	}, [])
	return (
		<AdminLayout>
			<Container>
				<Typography
					sx={{
						fontSize: {
							xs: "1.2rem",
							sm: "1.4rem",
						},
						fontFamily: "sans-serif",
						color: "#1976D2",
					}}
					component="p"
				>
					Patients
				</Typography>
			</Container>
		</AdminLayout>
	)
}

export default Patients
