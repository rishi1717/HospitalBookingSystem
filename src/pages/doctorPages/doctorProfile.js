import React, { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Box, Grid, TextField, Modal, Container } from "@mui/material"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import { SmallButton } from "../../components/Buttons"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import axios from "../../axios"
import Unauthorized from "./unauthorized"
import Swal from "sweetalert2"

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

function DoctorProfile() {
	const docState = useSelector((storeState) => storeState.doctor)

	if (docState.token) {
		const [doctor, setDoctor] = useState({
			image: "",
			name: "",
			qualification: "",
			department: "",
			expertise: "",
			experience: "",
			startTime: "",
			endTime: "",
		})
		useEffect(() => {
			;(async function() {
				const doctorData = await axios.get(`/doctor/${docState.id}`, {
					headers: { "auth-token": docState.token },
				})
				if (doctorData.data.doctor) setDoctor(doctorData.data.doctor)
			})()
		}, [])

		const [data, setData] = useState({
			oldPassword: "",
			newPassword: "",
			cPassword: "",
		})
		const [error, setError] = useState("")
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
				await axios.put(
					`/doctor/changepassword/${docState.id}`,
					data,
					{
						headers: { "auth-token": docState.token },
					}
				)
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
					Profile
				</Typography>
				<Card
					elevation={3}
					sx={{
						border: 1,
						borderColor: "#1976D2",
						m: "auto",
						mt: { xs: 2, sm: 7 },
						width: "85%",
						minHeight: { xs: 0, sm: 150 },
						px: { xs: 1, sm: 7 },
						py: { xs: 2, sm: 4 },
					}}
				>
					<Typography
						sx={{
							fontSize: {
								xs: "1.2rem",
								sm: "1.4rem",
							},
							display: { xs: "none", sm: "block" },
							fontFamily: "sans-serif",
							color: "#1976D2",
							textAlign: "center",
						}}
						component="p"
					>
						Your Details
					</Typography>
					<Grid container spacing={2} alignItems="center">
						<Grid item xs={12} sm={5} sx={{ mt: "1rem" }}>
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
								{console.log(doctor.image)}
								<CardMedia
									component="img"
									sx={{
										margin: "0.4rem",
										maxWidth: { xs: 120, sm: 200 },
										maxHeight: { xs: 120, sm: 200 },
										borderRadius: 100,
									}}
									src={doctor.image}
									alt="image"
								/>
							</Box>
						</Grid>

						<Grid item xs={12} sm={7} sx={{ mt: { sm: "1rem" } }}>
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
										mt: 2,
										fontSize: {
											xs: "1rem",
											sm: "1rem",
											textAlign: "left",
										},
										fontFamily: "sans-serif",
										color: "#595959",
									}}
									component="p"
								>
									<b>Name :</b> {doctor.name}
								</Typography>
								<Typography
									sx={{
										mt: 2,
										fontSize: {
											xs: "1rem",
											sm: "1rem",
											textAlign: "left",
										},
										fontFamily: "sans-serif",
										color: "#595959",
									}}
									component="p"
								>
									<b>Email :</b> {doctor.email}
								</Typography>
								<Typography
									sx={{
										mt: 2,
										fontSize: {
											xs: "1rem",
											sm: "1rem",
											textAlign: "left",
										},
										fontFamily: "sans-serif",
										color: "#595959",
									}}
									component="p"
								>
									<b>Qualification :</b> {doctor.qualification}
								</Typography>
								<Typography
									sx={{
										mt: 2,
										fontSize: {
											xs: "1rem",
											sm: "1rem",
											textAlign: "left",
										},
										fontFamily: "sans-serif",
										color: "#595959",
									}}
									component="p"
								>
									<b>Department :</b> {doctor.department}
								</Typography>
								<Typography
									sx={{
										mt: 2,
										fontSize: {
											xs: "1rem",
											sm: "1rem",
											textAlign: "left",
										},
										fontFamily: "sans-serif",
										color: "#595959",
									}}
									component="p"
								>
									<b>Experience :</b> {doctor.experience}
								</Typography>
								<Typography
									sx={{
										mt: 2,
										fontSize: {
											xs: "1rem",
											sm: "1rem",
											textAlign: "left",
										},
										fontFamily: "sans-serif",
										color: "#595959",
									}}
									component="p"
								>
									<b>Area of Expertise :</b> {doctor.expertise}
								</Typography>
								<Typography
									sx={{
										mt: 2,
										fontSize: {
											xs: "1rem",
											sm: "1rem",
											textAlign: "left",
										},
										fontFamily: "sans-serif",
										color: "#595959",
									}}
									component="p"
								>
									<b>OP Time : </b>
									{doctor.startTime} to {doctor.endTime}
								</Typography>
							</CardContent>
						</Grid>
						<div style={{ display:'flex', marginLeft: "auto", marginTop: 2 }}>
							<div
								onClick={async () => {
									handleOpen()
								}}
							>
								<SmallButton value="Change Password" color="#595959" />
							</div>
							<Link
								style={{ textDecoration: "none" }}
								state={{ doctor: doctor }}
								to="/doctor/Profile/edit"
							>
								<SmallButton value="Edit" color="#595959" />
							</Link>
						</div>
					</Grid>
				</Card>
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
			</DoctorsLayout>
		)
	} else {
		return <Unauthorized />
	}
}
export default DoctorProfile
