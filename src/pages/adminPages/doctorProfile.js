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
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import DoctorAppointments from "../../components/adminModule/DoctorAppointments"
import DoctorPrescriptions from "../../components/adminModule/DoctorPrescriptions"
import { SmallButton } from "../../components/Buttons"
import AdminLayout from "../../layouts/AdminLayout"

const DoctorProfile = () => {
	const navigate = useNavigate()
	const adminState = useSelector((storeState) => storeState.admin)
	const location = useLocation()
	const doctor = location.state.doctor
	console.log(doctor.active)
	const [show, setShow] = useState("none")
	const [active, setActive] = useState(doctor.active)
	const [admin, setAdmin] = useState(doctor.admin)
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
				Doctor Profile
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
					Doctor's Details
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
								<b>OP Time :</b>
								{doctor.startTime} to {doctor.endTime}
							</Typography>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
			<Grid
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					my: 3,
					justifyContent: "center",
				}}
				alignItems="center"
				justify="center"
			>
				<div
					onClick={() => {
						setShow("appointments")
					}}
				>
					<SmallButton
						value="Doctor's Appointments"
						color="#eaeaea"
						text="#595959"
					/>
				</div>
				<div
					onClick={() => {
						setShow("prescriptions")
					}}
				>
					<SmallButton
						value="Doctor's Prescriptions"
						color="#eaeaea"
						text="#595959"
					/>
				</div>
				{active === true ? (
					<div
						onClick={async () => {
							const con = await Swal.fire({
								title: "Are you sure?",
								text: "Doctor will be made Inactive!",
								background: "#eaeaea",
								color: "#595959",
								showCancelButton: true,
								cancelButtonColor: "#609ACF",
								confirmButtonText: "Make Inactive",
								confirmButtonColor: "#B81C1C",
							})
							if (con.isConfirmed) {
								try {
									setActive(false)
									await axios.put(
										`/doctor/${doctor._id}`,
										{ ...doctor, active: false },
										{
											headers: {
												"auth-token": adminState.token,
											},
										}
									)
								} catch (err) {
									console.log(err)
								}
							}
						}}
						style={{ textDecoration: "none" }}
					>
						<SmallButton
							value="Set Inactive"
							color="#eaeaea"
							text="#FEB139"
						/>
					</div>
				) : (
					<div
						onClick={async () => {
							const con = await Swal.fire({
								title: "Are you sure?",
								text: "Doctor will be made Active!",
								background: "#eaeaea",
								color: "#595959",
								showCancelButton: true,
								cancelButtonColor: "#B81C1C",
								confirmButtonText: "Make Active",
								confirmButtonColor: "#609ACF",
							})
							if (con.isConfirmed) {
								setActive(true)
								await axios.put(
									`/doctor/${doctor._id}`,
									{ ...doctor, active: true },
									{
										headers: {
											"auth-token": adminState.token,
										},
									}
								)
							}
						}}
						style={{ textDecoration: "none" }}
					>
						<SmallButton
							value="Set Active"
							color="#eaeaea"
							text="green"
						/>
					</div>
				)}
				{admin === true ? (
					<div
						onClick={async () => {
							const con = await Swal.fire({
								title: "Are you sure?",
								text: "Remove admin access?",
								background: "#eaeaea",
								color: "#595959",
								showCancelButton: true,
								cancelButtonColor: "#609ACF",
								confirmButtonText: "Remove",
								confirmButtonColor: "#B81C1C",
							})
							if (con.isConfirmed) {
								setAdmin(false)
								await axios.put(
									`/doctor/${doctor._id}`,
									{ ...doctor, admin: false },
									{
										headers: {
											"auth-token": adminState.token,
										},
									}
								)
							}
						}}
						style={{ textDecoration: "none" }}
					>
						<SmallButton
							value="Remove admin access"
							color="#eaeaea"
							text="#FEB139"
						/>
					</div>
				) : (
					<div
						onClick={async () => {
							const con = await Swal.fire({
								title: "Are you sure?",
								text: "Provide admin access!",
								background: "#eaeaea",
								color: "#595959",
								showCancelButton: true,
								cancelButtonColor: "#B81C1C",
								confirmButtonText: "Make Admin",
								confirmButtonColor: "#609ACF",
							})
							if (con.isConfirmed) {
								setAdmin(true)
								await axios.put(
									`/doctor/${doctor._id}`,
									{ ...doctor, admin: true },
									{
										headers: {
											"auth-token": adminState.token,
										},
									}
								)
							}
						}}
						style={{ textDecoration: "none" }}
					>
						<SmallButton
							value="Make admin"
							color="#eaeaea"
							text="#609acf"
						/>
					</div>
				)}
				<div
					onClick={async () => {
						try {
							const con = await Swal.fire({
								title: "Are you sure?",
								text: "Doctor details will be removed!",
								background: "#eaeaea",
								color: "#595959",
								showCancelButton: true,
								cancelButtonColor: "#B81C1C",
								confirmButtonText: "Remove Doctor",
								confirmButtonColor: "#609ACF",
							})
							if (con.isConfirmed) {
								await axios.delete(`/doctor/${doctor._id}`, {
									headers: {
										"auth-token": adminState.token,
									},
								})
								navigate("/admin/doctors")
							}
						} catch (err) {
							console.log(err)
						}
					}}
					style={{ textDecoration: "none" }}
				>
					<SmallButton
						value="Remove Doctor"
						color="#eaeaea"
						text="#B81C1C"
					/>
				</div>
			</Grid>
			{show === "none" ? (
				<></>
			) : show === "appointments" ? (
				<DoctorAppointments
					token={adminState.token}
					doctorId={doctor._id}
				/>
			) : (
				<DoctorPrescriptions
					token={adminState.token}
					doctorId={doctor._id}
				/>
			)}
		</AdminLayout>
	)
}

export default DoctorProfile
