import React, { useState } from "react"
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
import {
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

	const [error,setError] = useState()

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
	})

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const handleChangeSelect = (event) => {
		setData({ ...data, [event.target.name]: event.target.value })
	}

	const onSubmit = async () => {
		try {
			await axios.post("/user", data)
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
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={12} sm={6} textAlign="center">
						<Button variant="contained" component="label">
							Upload File
							<input type="file" hidden />
						</Button>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<Box
								component="form"
								onSubmit={handleSubmit(onSubmit)}
								noValidate
								sx={{ mt: 2 }}
							>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
										<TextField
											{...register("firstName", {
												required: "Provide first name!",
												minLength: {
													value: 2,
													message: "Atleast 2 characters required",
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
													message: "Atleast 2 characters required",
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
												<MenuItem value={"Female"}>Female</MenuItem>
												<MenuItem value={"Others"}>Others</MenuItem>
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
												<MenuItem value={"AB+ve"}>AB+ve</MenuItem>
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
												errors.email ? errors.email.message : null
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
												errors.phone ? errors.phone.message : null
											}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											{...register("password", {
												required: "Create a password!",
												minLength: {
													value: 8,
													message: "Atleast 8 characters required",
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
									<Typography sx={{color:"red", m:2}}>
										{error?error:""}
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
			</Container>
		</FullLayout>
	)
}
