import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material"
import axios from "../../axios"
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import Swal from "sweetalert2"
import { SmallButton } from "../../components/Buttons"
import AdminLayout from "../../layouts/AdminLayout"
import { useSelector } from "react-redux"
import UserPrescriptions from "../../components/adminModule/userPrescriptions"
import UserAppointments from "../../components/adminModule/userAppointments"

const UserProfile = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	const location = useLocation()
	const user = location.state.user
	const [accessState, setAccessState] = useState(user.access)
	const [show, setShow] = useState("none")
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
				Patient Profile
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
						border: 1,
						borderColor: "#609acf",
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
				<Grid sx={{ display: "flex", flexDirection:{xs:'column',sm:'row'}, my:3 }} alignItems="center" justify="center">
					<div
						onClick={() => {
							setShow("prescriptions")
						}}
					>
						<SmallButton
							value="User Prescriptions"
							color="#eaeaea"
							text="#595959"
						/>
					</div>
					<div
						onClick={() => {
							setShow("appointments")
						}}
					>
						<SmallButton
							value="User Appointments"
							color="#eaeaea"
							text="#595959"
						/>
					</div>
					{accessState === true ? (
						<div
							onClick={async () => {
								const con = await Swal.fire({
									title: "Are you sure?",
									text: "User will be blocked!",
									background: "#eaeaea",
									color: "#595959",
									showCancelButton: true,
									cancelButtonColor: "#609ACF",
									confirmButtonText: "Block",
									confirmButtonColor: "#B81C1C",
								})
								if (con.isConfirmed) {
									await axios.put(
										`/user/${user._id}`,
										{ ...user, access: false },
										{
											headers: {
												"auth-token": adminState.token,
											},
										}
									)
									setAccessState(false)
								}
							}}
							style={{ textDecoration: "none" }}
						>
							<SmallButton
								value="Block User"
								color="#eaeaea"
								text="#B81C1C"
							/>
						</div>
					) : (
						<div
							onClick={async () => {
								const con = await Swal.fire({
									title: "Are you sure?",
									text: "User will be unBlocked!",
									background: "#eaeaea",
									color: "#595959",
									showCancelButton: true,
									cancelButtonColor: "#B81C1C",
									confirmButtonText: "UnBlock",
									confirmButtonColor: "#609ACF",
								})
								if (con.isConfirmed) {
									await axios.put(
										`/user/${user._id}`,
										{ ...user, access: true },
										{
											headers: {
												"auth-token": adminState.token,
											},
										}
									)
									setAccessState(true)
								}
							}}
							style={{ textDecoration: "none" }}
						>
							<SmallButton
								value="UnBlock User"
								color="#eaeaea"
								text="green"
							/>
						</div>
					)}
				</Grid>
			</Grid>
			{show === "none" ? (
				<></>
			) : show === "appointments" ? (
				<UserAppointments token={adminState.token} userId={user._id} />
			) : (
				<UserPrescriptions token={adminState.token} userId={user._id} />
			)}
		</AdminLayout>
	)
}

export default UserProfile
