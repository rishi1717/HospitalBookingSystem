import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import axios from "../../axios.js"
import Swal from "sweetalert2"
import FullLayout from "../../layouts/FullLayout"
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded"
import {
	Fab,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

export default function Register() {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [selectedFile, setSelectedFile] = useState()
	const [preview, setPreview] = useState()

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
		firstName: "",
		secondName: "",
		age: "",
		gender: "",
		email: "",
		password: "",
		cpassword: "",
		blood: "",
		phone: "",
		image: "",
	})

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const handleChangeSelect = (event) => {
		setData({ ...data, [event.target.name]: event.target.value })
	}

	const onSubmit = async () => {
		try {
					const newForm = new FormData()
					newForm.append("firstName", data.firstName)
					newForm.append("secondName", data.secondName)
					newForm.append("age", data.age)
					newForm.append("gender", data.gender)
					newForm.append("email", data.email)
					newForm.append("password", data.password)
					newForm.append("cpassword", data.cpassword)
					newForm.append("blood", data.blood)
					newForm.append("phone", data.phone)
					newForm.append("image", selectedFile)
					await axios.post("/user", newForm)
					navigate("/login")
					Toast.fire({
						position: "bottom-right",
						icon: "success",
						title: "user registered",
						showConfirmButton: false,
						timer: 3000,
					})
				} catch (err) {
			if (err.response) {
				setError(err.response.data.message)
			}
		}
	}

	return (
		<FullLayout>
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
												<AddBoxRoundedIcon /> Upload photo
											</Fab>
										</label>
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
										<Grid item xs={12} sm={6}>
											<TextField
												{...register("firstName", {
													required: "Provide first name!",
													minLength: {
														value: 2,
														message:
															"Atleast 2 characters required",
													},
												})}
												autoFocus
												required
												fullWidth
												name="firstName"
												id="firstName"
												label="First Name"
												onChange={handleChange}
												value={data.firstName}
												error={errors.firstName}
												helperText={
													errors.firstName
														? errors.firstName.message
														: null
												}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												{...register("secondName", {
													required: "Provide last name!",
													minLength: {
														value: 2,
														message:
															"Atleast 2 characters required",
													},
												})}
												required
												fullWidth
												id="secondName"
												label="Last Name"
												name="secondName"
												onChange={handleChange}
												value={data.secondName}
												error={errors.secondName}
												helperText={
													errors.secondName
														? errors.secondName.message
														: null
												}
											/>
										</Grid>
										<Grid item xs={12} sm={4}>
											<TextField
												{...register("age", {
													required: "Enter your age!",
													min: {
														value: 18,
														message: "You need to be 18 or older",
													},
												})}
												required
												fullWidth
												id="age"
												label="Age"
												name="age"
												onChange={handleChange}
												value={data.age}
												error={errors.age}
												helperText={
													errors.age ? errors.age.message : null
												}
											/>
										</Grid>

										<Grid item xs={6} sm={4}>
											<FormControl fullWidth>
												<InputLabel id="gender">Gender</InputLabel>
												<Select
													{...register("gender", {
														required: "Select gender!",
													})}
													required
													fullWidth
													label="Gender"
													id="gender"
													name="gender"
													value={data.gender}
													onChange={handleChangeSelect}
													error={errors.gender}
												>
													<MenuItem value={"Male"}>Male</MenuItem>
													<MenuItem value={"Female"}>
														Female
													</MenuItem>
													<MenuItem value={"Others"}>
														Others
													</MenuItem>
												</Select>
												<FormHelperText sx={{ color: "#D32F2F" }}>
													{errors.gender
														? errors.gender.message
														: null}
												</FormHelperText>
											</FormControl>
										</Grid>
										<Grid item xs={6} sm={4}>
											<FormControl fullWidth>
												<InputLabel id="blood">Blood</InputLabel>
												<Select
													{...register("blood", {})}
													fullWidth
													label="Blood"
													id="blood"
													name="blood"
													value={data.blood}
													onChange={handleChangeSelect}
													error={errors.blood}
												>
													<MenuItem value={"A+ve"}>A+ve</MenuItem>
													<MenuItem value={"A-ve"}>A-ve</MenuItem>
													<MenuItem value={"B+ve"}>B+ve</MenuItem>
													<MenuItem value={"B-ve"}>B-ve</MenuItem>
													<MenuItem value={"AB+ve"}>
														AB+ve
													</MenuItem>
													<MenuItem value={"O+ve"}>O+ve</MenuItem>
													<MenuItem value={"O-ve"}>O-ve</MenuItem>
												</Select>
											</FormControl>
										</Grid>

										<Grid item xs={12}>
											<TextField
												{...register("email", {
													required: "Provide email!",
												})}
												required
												fullWidth
												id="email"
												label="Email Address"
												name="email"
												autoComplete="email"
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
										<Grid item xs={12}>
											<TextField
												{...register("phone", {
													required: "Provide phone number!",
													minLength: {
														value: 9,
														message: "Not valid",
													},
												})}
												required
												fullWidth
												id="phone"
												label="Phone"
												name="phone"
												onChange={handleChange}
												value={data.phone}
												error={errors.phone}
												helperText={
													errors.phone
														? errors.phone.message
														: null
												}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												{...register("password", {
													required: "Create a password!",
													minLength: {
														value: 8,
														message:
															"Atleast 8 characters required",
													},
												})}
												required
												fullWidth
												name="password"
												label="Password"
												type="password"
												id="password"
												onChange={handleChange}
												value={data.password}
												error={errors.password}
												helperText={
													errors.password
														? errors.password.message
														: null
												}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												{...register("cpassword", {
													required: "Confirm your password!",
												})}
												required
												fullWidth
												name="cpassword"
												label="Confirm Password"
												type="password"
												id="cpassword"
												onChange={handleChange}
												value={data.cpassword}
												error={errors.cpassword}
												helperText={
													errors.cpassword
														? errors.cpassword.message
														: null
												}
											/>
										</Grid>
										<Typography sx={{ color: "red", m: 2 }}>
											{error ? error : ""}
										</Typography>
									</Grid>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										sx={{ mt: 3, mb: 2 }}
									>
										Sign Up
									</Button>
									<Grid container justifyContent="flex-end">
										<Grid item>
											<Link href="#" variant="body2">
												Already have an account? Sign in
											</Link>
										</Grid>
									</Grid>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</FullLayout>
	)
}
