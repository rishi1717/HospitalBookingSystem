import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded"
import { Fab, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/material"
import { SmallButton } from "../../components/Buttons"
import FullLayout from "../../layouts/FullLayout"
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from "../../axios"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import Unauthorized from "./unauthorized"
import { useSelector } from "react-redux"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

function EditDoctor() {
	const docState = useSelector((storeState) => storeState.doctor)

	if (docState.token) {
		const navigate = useNavigate()
		const [selectedFile, setSelectedFile] = useState()
		const [preview, setPreview] = useState()
		React.useEffect(() => {
			setData({ ...data, image: selectedFile })
			if (!selectedFile) {
				setPreview(undefined)
				return
			}
			const objectUrl = URL.createObjectURL(selectedFile)
			setPreview(objectUrl)

			return () => URL.revokeObjectURL(objectUrl)
		}, [selectedFile])

		const onSelectFile = (e) => {
			if (!e.target.files || e.target.files.length === 0) {
				setSelectedFile(undefined)
				return
			}
			setSelectedFile(e.target.files[0])
		}

		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm()
		const [error, setError] = React.useState()

		const location = useLocation()
		const { doctor } = location.state
		const [data, setData] = React.useState({
			name: doctor.name,
			email: doctor.email,
			qualification: doctor.qualification,
			department: doctor.department,
			experience: doctor.experience,
			expertise: doctor.expertise,
			days: doctor.days,
			startTime: doctor.startTime,
			endTime: doctor.endTime,
			fee: Number(doctor.fee),
		})

		const handleChange = ({ currentTarget: input }) => {
			setData({ ...data, [input.name]: input.value })
		}

		const onSubmit = async () => {
			const newForm = new FormData()
			newForm.append("name", data.name)
			newForm.append("email", data.email)
			newForm.append("qualification", data.qualification)
			newForm.append("department", data.department)
			newForm.append("experience", data.experience)
			newForm.append("expertise", data.expertise)
			// newForm.append("days", data.days)
			newForm.append("startTime", data.startTime)
			newForm.append("endTime", data.endTime)
			newForm.append("fee", data.fee)
			if (selectedFile) {
				newForm.append("image", selectedFile)
			}

			

			const con = await Swal.fire({
				title: "Are you sure?",
				text: "Details will be Updated!",
				background: "#eaeaea",
				color: "#595959",
				showCancelButton: true,
				cancelButtonColor: "#B81C1C",
				confirmButtonText: "Update",
				confirmButtonColor: "#609ACF",
			})
			if (con.isConfirmed) {
				try {
					await axios.put(`/doctor/${doctor._id}`, newForm, {
						headers: { "auth-token": docState.token },
					})
					navigate("/doctor/profile")
					Toast.fire({
						position: "bottom-right",
						icon: "success",
						title: "doctor updated",
						showConfirmButton: false,
						timer: 3000,
					})
				} catch (err) {
					if (err.response) {
						setError(err.response.data.message)
					}
				}
			}
		}

		return (
			<FullLayout>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justifyContent="center"
					maxWidth={800}
					m="auto"
				>
					<Card
						component="form"
						noValidate
						onSubmit={handleSubmit(onSubmit)}
						elevation={3}
						sx={{
							mt: 5,
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							minHeight: { xs: 0, sm: 150 },
							px: { xs: 1, sm: 7 },
							py: { xs: 2, sm: 4 },
						}}
					>
						<Box
							component="div"
							sx={{
								flex: 1,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								mr: { xs: 2, sm: 5 },
							}}
						>
							<Grid
								item
								xs={12}
								mt={{ xs: 4, sm: 0 }}
								sx={{
									display: "flex",
									justifyContent: "cener",
									alignItems: "center",
								}}
							>
								{!selectedFile && (
									<Grid
										container
										spacing={2}
										direction="column"
										alignItems="center"
										justifyContent="center"
									>
										<Grid item xs={12}>
											<img
												style={{
													width: "12rem",
													borderRadius: 100,
												}}
												src={doctor.image}
												alt=""
											/>
										</Grid>
										<Grid item xs={12}>
											<label htmlFor="image">
												<input
													style={{ display: "none" }}
													id="image"
													name="image"
													type="file"
													onChange={onSelectFile}
												/>

												<Fab
													size="small"
													component="span"
													aria-label="add"
													variant="extended"
												>
													<AddBoxRoundedIcon /> Update photo
												</Fab>
											</label>
										</Grid>
									</Grid>
								)}
								{selectedFile && (
									<Grid container spacing={2}>
										<Grid item xs={12}>
											<img
												style={{
													width: "12rem",
													borderRadius: 100,
												}}
												src={preview}
												alt=""
											/>
										</Grid>
										<Grid item xs={12}>
											<label htmlFor="image">
												<input
													style={{ display: "none" }}
													id="image"
													name="image"
													type="file"
													onChange={onSelectFile}
												/>

												<Fab
													size="small"
													component="span"
													aria-label="add"
													variant="extended"
												>
													<AddBoxRoundedIcon /> Change photo
												</Fab>
											</label>
										</Grid>
									</Grid>
								)}
							</Grid>
						</Box>
						<CardContent
							sx={{
								flex: 1,
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
							}}
						>
							<Grid item xs={12} sm={12}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Box sx={{ mt: 2 }}>
										<Grid container spacing={2}>
											<Grid item xs={12} sm={12}>
												<TextField
													{...register("name", {
														required: "Provide first name!",
														minLength: {
															value: 2,
															message:
																"Atleast 2 characters required",
														},
													})}
													autoComplete="given-name"
													name="name"
													required
													fullWidth
													id="name"
													label="Name"
													autoFocus
													onChange={handleChange}
													value={data.name}
													error={errors.name}
													helperText={
														errors.name
															? errors.name.message
															: null
													}
												/>
											</Grid>
											<Grid item xs={12} sm={12}>
												<TextField
													{...register("email", {
														required: "Provide first email!",
													})}
													autoComplete="given-email"
													name="email"
													required
													fullWidth
													id="email"
													label="Email"
													autoFocus
													onChange={handleChange}
													value={data.email}
													error={errors.email}
													helperText={
														errors.email
															? errors.email.message
															: null
													}
												/>
											</Grid>
											<Grid item xs={12} sm={12}>
												<TextField
													{...register("qualification", {
														required: "Provide qualification!",
														minLength: {
															value: 2,
															message:
																"Atleast 2 characters required",
														},
													})}
													required
													fullWidth
													id="qualification"
													label="qualification"
													name="qualification"
													onChange={handleChange}
													value={data.qualification}
													error={errors.qualification}
													helperText={
														errors.qualification
															? errors.qualification.message
															: null
													}
												/>
											</Grid>
											<Grid item xs={12} sm={12}>
												<TextField
													{...register("department", {
														required: "Enter department!",
														minLength: {
															value: 2,
															message:
																"Atleast 2 characters required",
														},
													})}
													required
													fullWidth
													id="department"
													label="department"
													name="department"
													onChange={handleChange}
													value={data.department}
													error={errors.department}
													helperText={
														errors.department
															? errors.department.message
															: null
													}
												/>
											</Grid>
											<Grid item xs={12} sm={12}>
												<TextField
													{...register("expertise", {
														required: "Enter expertise!",
													})}
													required
													fullWidth
													id="expertise"
													label="expertise"
													name="expertise"
													onChange={handleChange}
													value={data.expertise}
													error={errors.expertise}
													helperText={
														errors.expertise
															? errors.expertise.message
															: null
													}
												/>
											</Grid>
											<Grid item xs={12}>
												<TextField
													{...register("experience", {
														required: "What is your experience?",
													})}
													required
													fullWidth
													id="experience"
													label="Experience"
													name="experience"
													autoComplete="experience"
													onChange={handleChange}
													value={data.experience}
													error={errors.experience}
													helperText={
														errors.experience
															? errors.experience.message
															: null
													}
												/>
											</Grid>
											<Grid item xs={12}>
												<TextField
													{...register("days", {
														required: "days",
													})}
													required
													fullWidth
													id="days"
													label="days"
													name="days"
													onChange={handleChange}
													value={data.days}
													error={errors.days}
													helperText={
														errors.days
															? errors.days.message
															: null
													}
												/>
											</Grid>
											<Grid item xs={12}>
												<TextField
													{...register("startTime", {
														required: "startTime",
													})}
													required
													fullWidth
													id="startTime"
													label="Start Time"
													name="startTime"
													onChange={handleChange}
													value={data.startTime}
													error={errors.startTime}
													helperText={
														errors.time
															? errors.time.message
															: null
													}
												/>
											</Grid>
											<Grid item xs={12}>
												<TextField
													{...register("endTime", {
														required: "endTime",
													})}
													required
													fullWidth
													id="endTime"
													label="Start Time"
													name="endTime"
													onChange={handleChange}
													value={data.endTime}
													error={errors.endTime}
													helperText={
														errors.time
															? errors.time.message
															: null
													}
												/>
											</Grid>
											<Grid item xs={12}>
												<TextField
													{...register("fee", {
														required: "fee",
													})}
													required
													fullWidth
													id="fee"
													label="fee"
													name="fee"
													onChange={handleChange}
													value={data.fee}
													error={errors.fee}
													helperText={
														errors.fee ? errors.fee.message : null
													}
												/>
											</Grid>
											<Typography sx={{ color: "red", m: 2 }}>
												{error ? error : ""}
											</Typography>
										</Grid>
										<Grid alignItems="center" justify="center">
											<Link
												style={{ textDecoration: "none" }}
												to="/profile"
											>
												<SmallButton
													value="Cancel"
													color="#eaeaea"
													text="#B81C1C"
												/>
											</Link>
											<SmallButton
												type="submit"
												value="Update"
												color="#eaeaea"
												text="#609acf"
											/>
										</Grid>
									</Box>
								</Box>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</FullLayout>
		)
	} else {
		return <Unauthorized />
	}
}
export default EditDoctor
