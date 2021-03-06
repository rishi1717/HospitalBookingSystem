import {
	Box,
	Card,
	CardContent,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material"
import axios from "../../axios.js"
import React, { useEffect, useState } from "react"
import PrescriptionCard from "../../components/userModule/PrescriptionCard"
import FullLayout from "../../layouts/FullLayout"
import Unauthorized from "./Unauthorized.js"

function UserPrescriptions() {
	const [prescriptions, setPrescriptions] = useState([])
	const [user, setUser] = useState({})
	const [result, setResult] = useState([])
	const [searchValue, setSearchValue] = useState("")
	useEffect(() => {
		(async function() {
			const userData = await axios.get(`/prescription/${localStorage.userId}`, {
				headers: { "auth-token": localStorage.userToken },
			})
			setPrescriptions(userData.data.prescription)
			const user = await axios.get(
				`/user/${localStorage.userId}`,
				{
					headers: { "auth-token": localStorage.userToken },
				}
			)
			setUser(user.data.user)
		})()
	}, [])

	const handleSearch = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		setSearchValue(data.get("search").toLowerCase())
	}

	useEffect(() => {
		const searchResult = prescriptions.filter((o) =>
			Object.entries(o).some((entry) =>
				String(entry[1])
					.toLowerCase()
					.includes(searchValue)
			)
		)
		setResult(searchResult)
	} , [searchValue])

	if (localStorage.userToken) {
		return (
			<FullLayout>
				<Container sx={{ mb: 10 }}>
					<Typography
						sx={{
							textAlign: "center",
							fontSize: { xs: "1rem", sm: "1.5rem" },
							fontFamily: "sans-serif",
							mt: 2,
							color: "#1976D2",
						}}
						component="p"
					>
						Prescriptions
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
					<Card
						sx={{
							display: { xs: "none", sm: "flex" },
							m: "1rem",
							flexDirection: { xs: "column", md: "row" },
							backgroundColor: "#585858",
						}}
					>
						<Grid container spacing={2}>
							<Grid item xs={1}>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography
										variant="subtitle1"
										color="white"
										component="div"
										borderRight={1}
									>
										In
									</Typography>
								</CardContent>
							</Grid>
							<Grid item xs={3}>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography
										variant="subtitle1"
										color="white"
										component="div"
										borderRight={1}
									>
										Medicine
									</Typography>
								</CardContent>
							</Grid>

							<Grid item xs={3}>
								<CardContent>
									<Typography
										variant="subtitle1"
										color="white"
										component="div"
										borderRight={1}
									>
										Dosage
									</Typography>
								</CardContent>
							</Grid>

							<Grid item xs={2}>
								<CardContent>
									<Typography
										variant="subtitle1"
										color="white"
										component="div"
										borderRight={1}
									>
										Date
									</Typography>
								</CardContent>
							</Grid>

							<Grid item xs={2}>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography
										variant="subtitle1"
										color="white"
										component="div"
										borderRight={1}
									>
										Doctor
									</Typography>
								</CardContent>
							</Grid>

							<Grid item xs={1}>
								<CardContent>
									<Typography
										variant="subtitle1"
										color="white"
										component="div"
									></Typography>
								</CardContent>
							</Grid>
						</Grid>
					</Card>
					<PrescriptionCard
						prescriptions={
							result.length === 0 && searchValue === ""
								? prescriptions
								: result
						}
						user={user}
					/>
				</Container>
			</FullLayout>
		)
	} else {
		return <Unauthorized />
	}
}

export default UserPrescriptions
