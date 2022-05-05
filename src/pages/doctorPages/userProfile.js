import React, { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Box, Grid } from "@mui/material"
import { SmallButton } from "../../components/Buttons"
import { Link } from "react-router-dom"
import axios from "../../axios.js"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import Unauthorized from "./unauthorized"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

function UserProfile() {
	const docState = useSelector((storeState) => storeState.doctor)
	if (docState.token) {
		const location = useLocation()
		const { patient } = location.state
		const [user, setUser] = useState([])
		useEffect(() => {
			;(async function() {
				const userData = await axios.get(`/user/${patient}`, {
					headers: { "auth-token": docState.token },
				})
				setUser(userData.data.user)
			})()
		}, [])

		return (
			<DoctorsLayout>
				<Typography
					sx={{
						fontSize: {
							xs: "1.2rem",
							sm: "1.4rem",
						},
						display: { xs: "none", sm: "block" },
						fontFamily: "sans-serif",
						color: "#1976D2",
					}}
					component="p"
				>
					User Profile
				</Typography>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justify="center"
					mt={{ xs: 1, sm: 3 }}
				>
					<Card
						elevation={10}
						sx={{
							mt: 5,
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							minHeight: { xs: 0, sm: 150 },
							px: 7,
							py: { xs: 2, sm: 4 },
							border: "1px solid #609acf",
						}}
					>
						<Box
							component="div"
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								mr: { xs: 2, sm: 5 },
							}}
						>
							<CardMedia
								component="img"
								sx={{
									margin: "0.4rem",
									maxWidth: { xs: 120, sm: 150 },
									maxHeight: { xs: 120, sm: 150 },
									borderRadius: 100,
								}}
								src={user.image}
								alt={user.image}
							/>
						</Box>
						<CardContent
							sx={{
								flex: 1,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<Typography
								sx={{
									fontSize: {
										xs: "0.85rem",
										sm: "1rem",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Name :</b> {user.firstName}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>ID :</b>
								{user._id}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Age :</b> {user.age}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Gender :</b> {user.gender}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Mobile :</b> {user.phone}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Blood Group :</b> {user.blood}
							</Typography>
						</CardContent>
					</Card>
					<Grid
						alignItems="center"
						display="flex"
						flexDirection={{ xs: "column", sm: "row" }}
						justify="center"
						sx={{ mt: 4 }}
					>
						<Link
							style={{ textDecoration: "none" }}
							state={{ user: user }}
							to="/doctor"
						>
							<SmallButton
								value="Appointment History"
								color="#609acf"
								text="#fff"
							/>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/doctor">
							<SmallButton
								value="Prescribe Medicine"
								color="#609acf"
								text="#fff"
							/>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/doctor">
							<SmallButton
								value="Set Appointment"
								color="#609acf"
								text="#fff"
							/>
						</Link>
					</Grid>
				</Grid>
			</DoctorsLayout>
		)
	} else {
		return <Unauthorized />
	}
}
export default UserProfile
