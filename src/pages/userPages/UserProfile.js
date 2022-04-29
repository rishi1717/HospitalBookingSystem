import React, { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import image from "../../static/images/userPortrait.png"
import { Box, Grid } from "@mui/material"
import { SmallButton } from "../../components/Buttons"
import { Link, useNavigate } from "react-router-dom"
import axios from "../../axios.js"
import FullLayout from "../../layouts/FullLayout"
import Swal from "sweetalert2"
import Unauthorized from "./Unauthorized"

function UserProfile() {
	const navigate = useNavigate()
	const [user, setUser] = useState([])
	useEffect(() => {
		(async function() {
			const userData = await axios.get(`/user/${localStorage.userId}`, {
				headers: { "auth-token": localStorage.user },
			})
			setUser(userData.data.user)
		})()
	}, [])

	if (localStorage.userToken) {
		return (
			<FullLayout>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justify="center"
				>
					<Card
						elevation={3}
						sx={{
							mt: 5,
							display: "flex",
							maxHeight: "18rem",
							minHeight: { xs: 0, sm: 150 },
							px: { xs: 1, sm: 7 },
							py: { xs: 2, sm: 4 },
						}}
					>
						<Box
							component="div"
							sx={{
								display: "flex",
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
								image={image}
								alt="image"
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
					<Grid alignItems="center" justify="center">
						<Link
							style={{ textDecoration: "none" }}
							state={{ user: user }}
							to="/editprofile"
						>
							<SmallButton
								value="Edit Details"
								color="#eaeaea"
								text="#595959"
							/>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/prescriptions">
							<SmallButton
								value="Prescriptions"
								color="#eaeaea"
								text="#595959"
							/>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/appointments">
							<SmallButton
								value="Appointments"
								color="#eaeaea"
								text="#595959"
							/>
						</Link>
						<Link
							onClick={async () => {
								const con = await Swal.fire({
									title: "Are you sure?",
									text: "User will be logged out!",
									background: "#eaeaea",
									color: "#595959",
									showCancelButton: true,
									cancelButtonColor: "#B81C1C",
									confirmButtonText: "Logout",
									confirmButtonColor: "#609ACF",
								})
								if (con.isConfirmed) {
									localStorage.removeItem("userToken")
									localStorage.removeItem("userId")
									navigate("/login")
								}
							}}
							style={{ textDecoration: "none" }}
							to="/profile"
						>
							<SmallButton
								value="Logout"
								color="#eaeaea"
								text="#B81C1C"
							/>
						</Link>
					</Grid>
				</Grid>
			</FullLayout>
		)
	} else {
		return <Unauthorized />
	}
}
export default UserProfile
