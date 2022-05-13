import React, { useEffect, useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import {
	Grid,
	TextField,
	Typography,
	Box,
	Modal,
	Container,
} from "@mui/material"
import { SmallButton } from "../../components/Buttons"
import { Link, useNavigate } from "react-router-dom"
import axios from "../../axios.js"
import FullLayout from "../../layouts/FullLayout"
import Swal from "sweetalert2"
import Unauthorized from "./Unauthorized"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "60vw",
	bgcolor: "background.paper",
	borderRadius: "4px",
	boxShadow: 24,
	p: 4,
}

function UserProfile() {
	const navigate = useNavigate()
	const [data, setData] = useState({
		oldPassword: "",
		newPassword: "",
		cPassword: "",
	})
	const [error, setError] = useState("")
	const [user, setUser] = useState({})
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
		setData({
			oldPassword: "",
			newPassword: "",
			cPassword: "",
		})
	}
	useEffect(() => {
		;(async function() {
			const userData = await axios.get(`/user/${localStorage.userId}`, {
				headers: { "auth-token": localStorage.userToken },
			})
			if (userData.data.user) setUser(userData.data.user)
		})()
	}, [])

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (data.newPassword.length < 8) {
			setError("Password need to be atleast 8 digits")
			return
		}
		if (data.newPassword !== data.cPassword) {
			setError("Passwords do not match")
			return
		}
		try {
			await axios.put(`/user/changepassword/${localStorage.userId}`, data, {
				headers: { "auth-token": localStorage.userToken },
			})
			Toast.fire({
				position: "bottom-right",
				icon: "success",
				title: "Password changed",
				showConfirmButton: false,
				timer: 3000,
			})
			handleClose()
		} catch (err) {
			setError(err.response.data.message)
		}
	}

	if (localStorage.userToken) {
		return (
			<FullLayout>
				<Typography
					sx={{
						textAlign: "center",
						fontSize: { xs: "1rem", sm: "1.3rem" },
						fontFamily: "sans-serif",
						mt: 2,
						color: "#609acf",
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
				>
					<Card
						elevation={3}
						sx={{
							border: "1px solid #609acf",
							mt: 3,
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
								<b>Email :</b>
								{user.email}
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
					>
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
						<div
							onClick={async () => {
								handleOpen()
							}}
						>
							<SmallButton
								value="Change Password"
								color="#eaeaea"
								text="#595959"
							/>
						</div>
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

				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style} component="form" onSubmit={handleSubmit}>
						<Typography
							sx={{
								textAlign: "center",
								fontSize: {
									xs: "1rem",
									sm: "1rem",
								},
								fontFamily: "sans-serif",
								color: "#1976D2",
							}}
							component="p"
						>
							Change Password
						</Typography>
						<Container sx={{ p: { xs: 0, sm: 3 } }}>
							<TextField
								sx={{ mt: 1 }}
								required
								fullWidth
								name="oldPassword"
								label="Old Password"
								type="password"
								id="oldPassword"
								onChange={handleChange}
								value={data.oldPassword}
							/>
							<TextField
								sx={{ mt: 1 }}
								required
								fullWidth
								name="newPassword"
								label="New Password"
								type="password"
								id="newPassword"
								onChange={handleChange}
								value={data.newPassword}
							/>
							<TextField
								sx={{ mt: 1 }}
								required
								fullWidth
								name="cPassword"
								label="Confirm Password"
								type="password"
								id="cPassword"
								onChange={handleChange}
								value={data.cPassword}
							/>
							{error && (
								<Typography
									sx={{
										mt: 1,
										color: "red",
										fontSize: "0.8rem",
										textAlign: "center",
									}}
								>
									{error}
								</Typography>
							)}
							<Grid container sx={{ mt: 1 }}>
								<div onClick={handleClose}>
									<SmallButton
										value="Cancel"
										color="#eaeaea"
										text="#CC3E34"
									/>
								</div>
								<SmallButton
									type="submit"
									color="#eaeaea"
									text="#609acf"
									value="Change Password"
								/>{" "}
							</Grid>
						</Container>
					</Box>
				</Modal>
			</FullLayout>
		)
	} else {
		return <Unauthorized />
	}
}
export default UserProfile
