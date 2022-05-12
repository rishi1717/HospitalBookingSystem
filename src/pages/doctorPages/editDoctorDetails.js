import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import axios from "../../axios.js"
import Swal from "sweetalert2"
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded"
import {
	AppBar,
	Checkbox,
	Fab,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	Toolbar,
} from "@mui/material"
import { useSelector } from "react-redux"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

export default function DoctorRegister() {
	const docState = useSelector((storeState) => storeState.doctor)
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const [selectedFile, setSelectedFile] = useState()
	const [preview, setPreview] = useState()
	const [departments, setDepartments] = useState([])
	const [doctor, setDoctor] = useState({
		name: "",
		qualification: "",
		department: "",
		expertise: "",
		experience: "",
		startTime: "",
		endTime: "",
		email: "",
		fee: 0,
		days: [],
	})

	useEffect(() => {
		;(async () => {
			const res = await axios.get("/department", {
				headers: {
					"auth-token": docState.token,
				},
			})
			const depNames = res.data.department.map((dep) => dep.name)
			setDepartments(depNames)
			const res2 = await axios.get(`/doctor/${docState.id}`, {
				headers: {
					"auth-token": docState.token,
				},
			})
			setDoctor(res2.data.doctor)
		})()
	}, [])

	useEffect(() => {
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

	const [error, setError] = useState()

	const [data, setData] = useState({
		name: doctor.name,
		qualification: doctor.qualification,
		department: doctor.department,
		email: doctor.email,
		experience: doctor.experience,
		expertise: doctor.expertise,
		days: doctor.days,
		startTime: doctor.startTime,
		endTime: doctor.endTime,
		fee: doctor.fee,
	})

	const [checked, setChecked] = React.useState({
		sunday: false,
		monday: true,
		tuesday: true,
		wednesday: true,
		thursday: true,
		friday: true,
		saturday: true,
	})

	useEffect(() => {
		setData({
			name: doctor.name,
			qualification: doctor.qualification,
			department: doctor.department,
			email: doctor.email,
			experience: doctor.experience,
			expertise: doctor.expertise,
			days: doctor.days,
			startTime: doctor.startTime,
			endTime: doctor.endTime,
			fee: doctor.fee,
		})

		setChecked({
			sunday: doctor.days.includes(0) ? true : false,
			monday: doctor.days.includes(1) ? true : false,
			tuesday: doctor.days.includes(2) ? true : false,
			wednesday: doctor.days.includes(3) ? true : false,
			thursday: doctor.days.includes(4) ? true : false,
			friday: doctor.days.includes(5) ? true : false,
			saturday: doctor.days.includes(6) ? true : false,
		})
		reset()
	}, [doctor])

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const handleChangeSelect = (event) => {
		setData({ ...data, [event.target.name]: event.target.value })
	}

	const onSubmit = async () => {
		try {
			if (data.password !== data.cpassword) {
				setError("Passwords do not match")
				throw new Error("Passwords do not match")
			}
			const newForm = new FormData()
			newForm.append("name", data.name)
			newForm.append("qualification", data.qualification)
			newForm.append("oldDepartment", doctor.department)
			newForm.append("department", data.department)
			newForm.append("email", data.email)
			newForm.append("experience", data.experience)
			newForm.append("expertise", data.expertise)
			newForm.append("days", JSON.stringify(data.days))
			newForm.append("startTime", data.startTime)
			newForm.append("endTime", data.endTime)
			newForm.append("fee", data.fee)
			if (selectedFile) {
				newForm.append("image", selectedFile)
			} else {
				newForm.append("image", doctor.image)
			}
			const con = await Swal.fire({
				title: "Are you sure?",
				text: "Details will Updated!",
				background: "#eaeaea",
				color: "#595959",
				showCancelButton: true,
				cancelButtonColor: "#B81C1C",
				confirmButtonText: "Update",
				confirmButtonColor: "#609ACF",
			})
			if (con.isConfirmed) {
				await axios.put(`/doctor/${docState.id}`, newForm, {
					headers: {
						"auth-token": docState.token,
					},
				})
				navigate("/doctor/profile")
				Toast.fire({
					position: "bottom-right",
					icon: "success",
					title: "Updated details",
					showConfirmButton: false,
					timer: 3000,
				})
			}
		} catch (err) {
			console.log(err.message)
			if (err.response) {
				setError(err.response.data.message)
			}
		}
	}

	const handleCheck = (event) => {
		setChecked({ ...checked, [event.target.name]: event.target.checked })
	}

	useEffect(() => {
		const weekdays = [
			"sunday",
			"monday",
			"tuesday",
			"wednesday",
			"thursday",
			"friday",
			"saturday",
		]
		const selectedDays = Object.keys(checked).filter((day) => checked[day])
		const daysNumber = selectedDays.map((day) => weekdays.indexOf(day))
		setData({ ...data, days: daysNumber })
	}, [checked])

	return (
		<Container>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" sx={{ borderRadius: 2 }}>
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Doctor Register
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<Container component="main" maxWidth="md">
				<Typography
					align="center"
					component="h1"
					variant="h5"
					sx={{
						marginTop: 3,
						color: "#595959",
					}}
				>
					Register
				</Typography>

				<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
					<Grid container spacing={2} alignItems="center">
						<Grid item xs={12} sm={6} textAlign="center">
							<Grid sx={{ maxHeight: "50vh" }} container spacing={2}>
								<Grid item xs={12} mt={{ xs: 4, sm: 0 }}>
									{!selectedFile && (
										<Grid container spacing={2}>
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
														<AddBoxRoundedIcon /> Change photo
													</Fab>
												</label>
											</Grid>
										</Grid>
									)}
								</Grid>
								<Grid item xs={12}>
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
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<Box sx={{ mt: 2 }}>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={12}>
											<TextField
												{...register("name", {
													required: "Provide name!",
													minLength: {
														value: 2,
														message:
															"Atleast 2 characters required",
													},
												})}
												autoFocus
												required
												fullWidth
												name="name"
												id="name"
												label="Name"
												onChange={handleChange}
												value={data.name}
												error={errors.name}
												helperText={
													errors.name ? errors.name.message : null
												}
											/>
										</Grid>
										<Grid item xs={12} sm={12}>
											<TextField
												{...register("email", {
													required: "Provide email!",
													minLength: {
														value: 2,
														message:
															"Atleast 2 characters required",
													},
												})}
												autoFocus
												required
												fullWidth
												name="email"
												id="email"
												label="Email"
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
												label="Qualification"
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
											<FormControl fullWidth>
												<InputLabel id="department">
													department
												</InputLabel>
												<Select
													{...register("department", {
														required: "Select department!",
													})}
													required
													fullWidth
													label="department"
													id="department"
													name="department"
													value={data.department}
													onChange={handleChangeSelect}
													error={errors.department}
												>
													{departments.map((department, index) => (
														<MenuItem
															key={index}
															value={department}
														>
															{department}
														</MenuItem>
													))}
												</Select>
												<FormHelperText sx={{ color: "#D32F2F" }}>
													{errors.department
														? errors.department.message
														: null}
												</FormHelperText>
											</FormControl>
										</Grid>
									</Grid>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								{...register("experience", {
									required: "Provide your experience!",
								})}
								required
								fullWidth
								id="experience"
								label="Experience (in years)"
								name="experience"
								autoComplete="experience"
								onChange={handleChange}
								value={data.experience}
								error={errors.experience}
								helperText={
									errors.experience ? errors.experience.message : null
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								{...register("expertise", {
									required: "Provide expertise ",
								})}
								required
								fullWidth
								id="expertise"
								label="Expertise"
								name="expertise"
								onChange={handleChange}
								value={data.expertise}
								error={errors.expertise}
								helperText={
									errors.expertise ? errors.expertise.message : null
								}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={12}
							sx={{
								display: "flex",
								flexDirection: { xs: "column", sm: "row" },
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Typography sx={{ color: "#595959", fontSize: "1.1rem" }}>
								Select Working days :
							</Typography>
							<FormGroup
								sx={{
									display: "flex",
									flexDirection: "row",
									border: "1px solid #b5b5b5",
									borderRadius: 1,
									padding: "0.5rem",
								}}
							>
								<FormControlLabel
									sx={{ color: "#595959", fontSize: "1.1rem" }}
									control={
										<Checkbox
											checked={checked.monday}
											onChange={handleCheck}
											name="monday"
										/>
									}
									label="Mon"
								/>
								<FormControlLabel
									sx={{ color: "#595959", fontSize: "1.1rem" }}
									control={
										<Checkbox
											checked={checked.tuesday}
											onChange={handleCheck}
											name="tuesday"
										/>
									}
									label="Tue"
								/>
								<FormControlLabel
									sx={{ color: "#595959", fontSize: "1.1rem" }}
									control={
										<Checkbox
											checked={checked.wednesday}
											onChange={handleCheck}
											name="wednesday"
										/>
									}
									label="Wed"
								/>
								<FormControlLabel
									sx={{ color: "#595959", fontSize: "1.1rem" }}
									control={
										<Checkbox
											checked={checked.thursday}
											onChange={handleCheck}
											name="thursday"
										/>
									}
									label="Thu"
								/>
								<FormControlLabel
									sx={{ color: "#595959", fontSize: "1.1rem" }}
									control={
										<Checkbox
											checked={checked.friday}
											onChange={handleCheck}
											name="friday"
										/>
									}
									label="Fri"
								/>
								<FormControlLabel
									sx={{ color: "#595959", fontSize: "1.1rem" }}
									control={
										<Checkbox
											checked={checked.saturday}
											onChange={handleCheck}
											name="saturday"
										/>
									}
									label="Sat"
								/>
								<FormControlLabel
									sx={{ color: "#595959", fontSize: "1.1rem" }}
									control={
										<Checkbox
											checked={checked.sunday}
											onChange={handleCheck}
											name="sunday"
										/>
									}
									label="Sun"
								/>
							</FormGroup>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								{...register("startTime", {
									required: "Confirm your password!",
								})}
								required
								fullWidth
								name="startTime"
								label="Starting time (hh:mm A)"
								type="text"
								id="startTime"
								onChange={handleChange}
								value={data.startTime}
								error={errors.startTime}
								helperText={
									errors.startTime ? errors.startTime.message : null
								}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								{...register("endTime", {
									required: "Confirm your password!",
								})}
								required
								fullWidth
								name="endTime"
								label="Finishing time (hh:mm A)"
								type="text"
								id="endTime"
								onChange={handleChange}
								value={data.endTime}
								error={errors.endTime}
								helperText={
									errors.endTime ? errors.endTime.message : null
								}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								{...register("fee", {
									required: "Enter your fees!",
								})}
								required
								fullWidth
								name="fee"
								label="Your Fee"
								type="number"
								id="fee"
								onChange={handleChange}
								value={data.fee}
								error={errors.fee}
								helperText={errors.fee ? errors.fee.message : null}
							/>
						</Grid>
						<Typography
							sx={{
								color: "red",
								m: 2,
								width: "100%",
								textAlign: "center",
							}}
						>
							{error ? error : ""}
						</Typography>
					</Grid>
					<Button fullWidth variant="contained" sx={{ mb: 3 }}>
						Cancel
					</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mb: 3 }}
					>
						Update
					</Button>
				</Box>
			</Container>
		</Container>
	)
}
