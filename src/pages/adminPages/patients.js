import { Container, TextField, Typography } from "@mui/material"
import axios from "../../axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AdminLayout from "../../layouts/AdminLayout"
import PatientTable from "../../components/adminModule/patientTable"
import { Box } from "@mui/system"

const Patients = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	const [data, setData] = useState([])
	const [result, setResult] = useState([])
	const [searchValue, setSearchValue] = useState("")
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

	const handleSearch = (event) => {
		event.preventDefault()
		const search = new FormData(event.currentTarget)
		setSearchValue(search.get("search").toLowerCase())
		const searchResult = data.filter((o) =>
			Object.entries(o).some((entry) =>
				String(entry[1])
					.toLowerCase()
					.includes(searchValue)
			)
		)
		console.log(searchResult)
		setResult(searchResult)
	}

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
					Users list
				</Typography>
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
				<PatientTable users={searchValue === "" ? data : result} />
			</Container>
		</AdminLayout>
	)
}

export default Patients
