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
import axios from 'axios'
import Swal from "sweetalert2"

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

	const [data, setData] = useState({
		firstName: "",
		secondName:"",
		age:"",
		gender:"",
		email:"",
		password:"",
		cpassword:"",
		blood:"",
		phone:""

	})

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const onSubmit = () => {
		console.log(data)
		axios.post("http://localhost:4000/users",data)
		navigate("/login")
		Toast.fire({
			position: "bottom-right",
			icon: "success",
			title: "user registered",
			showConfirmButton: false,
			timer: 3000,
		})
	}

	return (
		<>
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
									<Grid item xs={12} sm={4}>
										<TextField
											{...register("gender", {
												required: "Select your gender!",
											})}
											required
											fullWidth
											id="gender"
											label="Gender"
											name="gender"
											onChange={handleChange}
											value={data.gender}
											error={errors.gender}
											helperText={
												errors.gender ? errors.gender.message : null
											}
										/>
									</Grid>
									<Grid item xs={12} sm={4}>
										<TextField
											{...register("blood", {})}
											fullWidth
											id="blood"
											label="Blood Group"
											name="blood"
											onChange={handleChange}
											value={data.blood}
										/>
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
													value: 6,
													message: "Atleast 6 characters required",
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
		</>
	)
}
