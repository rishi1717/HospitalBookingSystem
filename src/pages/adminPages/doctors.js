import axios from "../../axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AdminLayout from "../../layouts/AdminLayout"
import { Box, Container, TextField, Typography } from "@mui/material"
import DoctorTable from "../../components/adminModule/doctorTable"

const Doctors = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	const [searchValue, setSearchValue] = useState("")
	const [result, setResult] = useState([])
	const [data, setData] = useState([])
	useEffect(() => {
		;(async function() {
			try {
				const response = await axios.get("/doctor", {
					headers: {
						"auth-token": adminState.token,
					},
				})
				setData(response.data.doctor)
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
					Doctors
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
					Doctors list
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
				<DoctorTable doctors={searchValue === "" ? data : result} />
			</Container>
		</AdminLayout>
	)
}

export default Doctors
