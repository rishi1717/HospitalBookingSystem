import { Box, Container, TextField } from "@mui/material"
import axios from "../../axios.js"
import React, { useEffect, useState } from "react"
import Departments from "../../components/userModule/Departments"
import Doctors from "../../components/userModule/doctors"
import FullLayout from "../../layouts/FullLayout"
import Unauthorized from "./Unauthorized.js"

function UserDoctorPage() {
	const [departments, setDepartments] = useState([])
	const [doctors, setDoctors] = useState([])
	const [result, setResult] = useState([])
	const [searchValue, setSearchValue] = useState("")
	useEffect(() => {
		;(async function() {
			const departmentData = await axios.get("/department", {
				headers: { "auth-token": localStorage.userToken },
			})
			const doctorData = await axios.get("/doctor", {
				headers: { 'auth-token': localStorage.userToken},
			})
			setDepartments(departmentData.data.department)
			setDoctors(doctorData.data.doctor)
		})()
	}, [])
	const handleSearch = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		setSearchValue(data.get("search").toLowerCase())
		const searchResult = doctors.filter((o) =>
			Object.entries(o).some((entry) =>
				String(entry[1])
					.toLowerCase()
					.includes(searchValue)
			)
		)
		setResult(searchResult)
	}

	if (localStorage.userToken) {
		return (
			<FullLayout>
				<Container>
					<Box
						display="flex"
						justifyContent="center"
						component="form"
						autoComplete="off"
						onChange={handleSearch}
						onSubmit={handleSearch}
						noValidate
						sx={{ mt: 1, mb: 2 }}
					>
						<TextField
							margin="normal"
							fullWidth
							id="search"
							label="Search"
							name="search"
							autoFocus
							variant="standard"
							sx={{ width: "90%" }}
						/>
					</Box>
					{searchValue === "" ? (
						<Departments departments={departments} doctors={doctors} />
					) : (
						<Doctors doctors={result} />
					)}
				</Container>
			</FullLayout>
		)
	} else {
		return <Unauthorized />
	}
}

export default UserDoctorPage
