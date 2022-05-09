import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material"
import axios from "../../axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { MediumButton } from "../../components/Buttons"
import AdminLayout from "../../layouts/AdminLayout"
import AdminCard from "../../components/adminModule/adminCard"

const Profile = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	const [admin, setAdmin] = useState({})
	const [admins, setAdmins] = useState([])
	useEffect(() => {
		;(async () => {
			const res = await axios.get(`/admin`, {
				headers: {
					"auth-token": adminState.token,
				},
			})
			setAdmin(res.data.admin)
			const res2 = await axios.get("/admin/admins", {
				headers: {
					"auth-token": adminState.token,
				},
			})
			setAdmins(res2.data.admins)
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
				Admin Profile
			</Typography>
			{!admin.mainAdmin ? (
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
								<CardMedia
									component="img"
									sx={{
										margin: "0.4rem",
										maxWidth: { xs: 120, sm: 200 },
										maxHeight: { xs: 120, sm: 200 },
										borderRadius: 100,
									}}
									src={admin.image}
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
									<b>Name :</b> {admin.name}
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
									<b>Qualification :</b> {admin.qualification}
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
									<b>Department :</b> {admin.department}
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
									<b>Experience :</b> {admin.experience}
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
									<b>Area of Expertise :</b> {admin.expertise}
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
									<b>OP Time :</b>
									{admin.startTime} to {admin.endTime}
								</Typography>
							</CardContent>
						</Grid>
						<div style={{ marginLeft: "auto", marginTop: 2 }}>
							<Link
								style={{ textDecoration: "none" }}
								state={{ admin: admin }}
								to="/admin/Profile/edit"
							>
								<MediumButton value="Edit" color="#595959" />
							</Link>
						</div>
					</Grid>
				</Card>
			) : (
				<>
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
									<b>Name :</b> {admin.name}
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
									<b>email :</b> {admin.email}
								</Typography>
							</CardContent>
						</Grid>
					</Card>
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
						Admin Access
					</Typography>
						{admins.map((admin) =><AdminCard key={admin._id} admin={admin} /> )}
					
				</>
			)}
		</AdminLayout>
	)
}

export default Profile
