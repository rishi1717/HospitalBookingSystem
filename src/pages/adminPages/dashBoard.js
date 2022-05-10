import React, { useEffect, useState } from "react"
import AdminLayout from "../../layouts/AdminLayout"
import { Box, Card, Grid, Typography } from "@mui/material"
import BarGraph from "../../components/adminModule/barGraph"
import PieChart from "../../components/adminModule/pieGraph"
import { useSelector } from "react-redux"
import axios from "../../axios"
import WelcomeCard from "../../components/adminModule/welcomeCard"

const DashBoard = () => {
  const adminState = useSelector((storeState) => storeState.admin)
  const [doctor, setDoctor] = useState({})
  const [user, setUser] = useState({})
  useEffect(() => {
    (async () => {
      const response = await axios.get("/chart/card",{
        headers:{
          "auth-token": adminState.token
        }
      })
      setDoctor(response.data.doctor)
      setUser(response.data.user)
    })()
  }, [])
	return (
		<AdminLayout>
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
				Dashboard
			</Typography>
      <WelcomeCard />
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} sx={{ mt: 5 }}>
					<Card elevation={3} sx={{ backgroundColor: "#eaeaea" }}>
						<Grid
							container
							spacing={2}
							sx={{
								p: 2,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Grid
								item
								xs={4}
								sx={{
									p: 2,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{ color: "#595959", fontSize: "1.4rem" }}
								>
									Doctors
								</Typography>
								<Typography sx={{ color: "#609acf", pt: 1 }}>
									{doctor[0]}
								</Typography>
							</Grid>
							<Grid
								item
								xs={4}
								sx={{
									p: 2,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{ color: "#595959", fontSize: "1.2rem" }}
								>
									Active
								</Typography>
								<Typography sx={{ color: "#339933", pt: 1 }}>
									{doctor[1]}
								</Typography>
							</Grid>
							<Grid
								item
								xs={4}
								sx={{
									p: 2,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{ color: "#595959", fontSize: "1.2rem" }}
								>
									Inactive
								</Typography>
								<Typography sx={{ color: "#990000", pt: 1 }}>
									{doctor[2]}
								</Typography>
							</Grid>
						</Grid>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} sx={{ mt: 5 }}>
					<Card elevation={3} sx={{ backgroundColor: "#eaeaea" }}>
						<Grid
							container
							spacing={2}
							sx={{
								p: 2,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Grid
								item
								xs={4}
								sx={{
									p: 2,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{ color: "#595959", fontSize: "1.4rem" }}
								>
									Users
								</Typography>
								<Typography sx={{ color: "#609acf", pt: 1 }}>
									{user[0]}
								</Typography>
							</Grid>
							<Grid
								item
								xs={4}
								sx={{
									p: 2,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{ color: "#595959", fontSize: "1.2rem" }}
								>
									Active
								</Typography>
								<Typography sx={{ color: "#339933", pt: 1 }}>
									{user[1]}
								</Typography>
							</Grid>
							<Grid
								item
								xs={4}
								sx={{
									p: 2,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{ color: "#595959", fontSize: "1.2rem" }}
								>
									Blocked
								</Typography>
								<Typography sx={{ color: "#990000", pt: 1 }}>
									{user[2]}
								</Typography>
							</Grid>
						</Grid>
					</Card>
				</Grid>
			</Grid>
			<Grid sx={{ mt: 0 }} container spacing={4}>
				<Grid item xs={11} sm={8}>
					<Box>
						<BarGraph />
					</Box>
				</Grid>
				<Grid item xs={10} sm={4}>
					<Box>
						<PieChart />
					</Box>
				</Grid>
			</Grid>
		</AdminLayout>
	)
}

export default DashBoard
