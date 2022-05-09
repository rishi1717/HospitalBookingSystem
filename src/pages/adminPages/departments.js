import { Container, Typography } from "@mui/material"
import axios from "../../axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AdminLayout from "../../layouts/AdminLayout"
import DepartmentList from "../../components/adminModule/departmentList"

const Departments = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	const [departments, setDepartments] = useState([])
	const [doctors, setDoctors] = useState([])
	useEffect(() => {
		;(async function() {
			try {
				const response = await axios.get("/department", {
					headers: {
						"auth-token": adminState.token,
					},
				})
				setDepartments(response.data.department)
				const response2 = await axios.get("/doctor", {
					headers: {
						"auth-token": adminState.token,
					},
				})
				setDoctors(response2.data.doctor)
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
					Departments
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
					Department list
				</Typography>
				<DepartmentList departments={departments} doctors={doctors} />
			</Container>
		</AdminLayout>
	)
}

export default Departments
