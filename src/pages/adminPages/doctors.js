import axios from "../../axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AdminLayout from "../../layouts/AdminLayout"
import { Box, Container, TextField, Typography } from "@mui/material"
import DoctorTable from "../../components/adminModule/doctorTable"
import DoctorRequest from "../../components/adminModule/doctorRequest"
import { Navigate } from "react-router-dom"

const Doctors = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	if (adminState.token) {
		const [searchValue, setSearchValue] = useState("")
		const [result, setResult] = useState([])
		const [request, setRequest] = useState([])
		const [data, setData] = useState([])
		const [update, setUpdate] = useState(0)
		useEffect(() => {
			;(async function() {
				try {
					const response = await axios.get("/doctor", {
						headers: {
							"auth-token": adminState.token,
						},
					})
					const temp = response.data.doctor.filter(
						(o) => o.request === false
					)
					setData(temp)
					const temp2 = response.data.doctor.filter(
						(o) => o.request === true
					)
					setRequest(temp2)
				} catch (err) {
					console.log(err.message)
				}
			})()
		}, [update])

		const handleSearch = (event) => {
			event.preventDefault()
			const search = new FormData(event.currentTarget)
			setSearchValue(search.get("search").toLowerCase())
		}

		useEffect(() => {
			const searchResult = data.filter((o) =>
				Object.entries(o).some((entry) =>
					String(entry[1])
						.toLowerCase()
						.includes(searchValue)
				)
			)
			setResult(searchResult)
		}, [searchValue])

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

					{request.length > 0 ? (
						<>
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
								Doctor Requests
							</Typography>
							<DoctorRequest
								update={update}
								setUpdate={setUpdate}
								doctors={request}
							/>
						</>
					) : (
						""
					)}

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
	} else {
		return <Navigate to="/admin/login" />
	}
}

export default Doctors
