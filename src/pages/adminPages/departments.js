import { Typography } from "@mui/material"
import axios from "../../axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AdminLayout from "../../layouts/AdminLayout"
import DepartmentList from "../../components/adminModule/departmentList"
import { Navigate } from "react-router-dom"

const Departments = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	if (adminState.token) {
		const [departments, setDepartments] = useState([])
		const [doctors, setDoctors] = useState([])
		const [state, setState] = useState(true)
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
		}, [state])
		return (
			<AdminLayout>
				<Typography
					sx={{
						fontSize: {
							xs: "1rem",
							sm: "1.2rem",
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
				<DepartmentList
					state={state}
					setState={setState}
					departments={departments}
					doctors={doctors}
				/>
			</AdminLayout>
		)
	} else {
		return <Navigate to="/admin/login" />
	}
}

export default Departments
