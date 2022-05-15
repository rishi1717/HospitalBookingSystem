import React from "react"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import axios from "../../axios.js"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Box, Container, TextField } from "@mui/material"
import DoctorsDoc from "../../components/doctorModule/doctorsDoc"
import DocDepartments from "../../components/doctorModule/docDepartment"

const ViewDoctors = () => {
	const docState = useSelector((storeState) => storeState.doctor)
	const [departments, setDepartments] = useState([])
	const [doctors, setDoctors] = useState([])
	const [result, setResult] = useState([])
	const [searchValue, setSearchValue] = useState("")
	useEffect(() => {
		;(async function() {
			const departmentData = await axios.get("/department", {
				headers: { "auth-token": docState.token },
			})
			const doctorData = await axios.get("/doctor", {
				headers: { "auth-token": docState.token },
			})
			setDepartments(departmentData.data.department)
			setDoctors(doctorData.data.doctor)
		})()
	}, [])
	const handleSearch = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		setSearchValue(data.get("search").toLowerCase())
	}

	useEffect(() => {
		const searchResult = doctors.filter((o) =>
			Object.entries(o).some((entry) =>
				String(entry[1])
					.toLowerCase()
					.includes(searchValue)
			)
		)
		setResult(searchResult)
	}, [searchValue])
	return (
		<DoctorsLayout>
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
					<DocDepartments departments={departments} doctors={doctors} />
				) : (
					<DoctorsDoc doctors={result} />
				)}
			</Container>
		</DoctorsLayout>
	)
}

export default ViewDoctors
