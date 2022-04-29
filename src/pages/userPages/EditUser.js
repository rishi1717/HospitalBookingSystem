import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded"
import {
	Fab,
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material"
import { Box } from "@mui/material"
import { SmallButton } from "../../components/Buttons"
import FullLayout from "../../layouts/FullLayout"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "../../axios"
import { useForm } from "react-hook-form"
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

function EditUser() {
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
	const { user } = location.state
	const [data, setData] = React.useState({
		firstName: user.firstName,
		secondName: user.secondName,
		age: user.age,
		gender: user.gender,
		email: user.email,
		blood: user.blood,
		phone: user.phone,
	})
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const handleChangeSelect = (event) => {
		setData({ ...data, [event.target.name]: event.target.value })
	}

	const onSubmit = async () => {
		const newForm = new FormData()
		newForm.append("firstName", data.firstName)
		newForm.append("secondName", data.secondName)
		newForm.append("age", data.age)
		newForm.append("gender", data.gender)
		newForm.append("email", data.email)
		newForm.append("blood", data.blood)
		newForm.append("phone", data.phone)
		if (selectedFile) {
			newForm.append("image", selectedFile)
		}

		const con = await Swal.fire({
			title: "Are you sure?",
			text: "User details will Updated!",
			background: "#eaeaea",
			color: "#595959",
			showCancelButton: true,
			cancelButtonColor: "#B81C1C",
			confirmButtonText: "Update",
			confirmButtonColor: "#609ACF",
		})
		if (con.isConfirmed) {
			try {
				await axios.put(`/user/${user._id}`, newForm, {
					headers: { "auth-token": localStorage.userToken },
				})
				navigate("/profile")
				Toast.fire({
					position: "bottom-right",
					icon: "success",
					title: "user updated",
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

	if (localStorage.userToken) {
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
							<Grid item xs={12} mt={{ xs: 4, sm: 0 }}>
								{!selectedFile && (
									<Grid container spacing={2}>
										<Grid item xs={12}>
											<img
												style={{
													width: "12rem",
													borderRadius: 100,
												}}
												src={user.image}
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
													<AddBoxRoundedIcon /> Upload photo
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
													autoComplete="given-name"
													name="firstName"
													required
													fullWidth
													id="firstName"
													label="First Name"
													autoFocus
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
													label="Second Name"
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
															message:
																"You need to be 18 or older",
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
												<FormControl fullWidth>
													<InputLabel id="gender">
														Gender
													</InputLabel>
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
														<MenuItem value={"Male"}>
															Male
														</MenuItem>
														<MenuItem value={"Female"}>
															Female
														</MenuItem>
														<MenuItem value={"Others"}>
															Others
														</MenuItem>
													</Select>
													<FormHelperText
														sx={{ color: "#D32F2F" }}
													>
														{errors.gender
															? errors.gender.message
															: null}
													</FormHelperText>
												</FormControl>
											</Grid>
											<Grid item xs={12} sm={4}>
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
														<MenuItem value={"A+ve"}>
															A+ve
														</MenuItem>
														<MenuItem value={"A-ve"}>
															A-ve
														</MenuItem>
														<MenuItem value={"B+ve"}>
															B+ve
														</MenuItem>
														<MenuItem value={"B-ve"}>
															B-ve
														</MenuItem>
														<MenuItem value={"AB+ve"}>
															AB+ve
														</MenuItem>
														<MenuItem value={"O+ve"}>
															O+ve
														</MenuItem>
														<MenuItem value={"O-ve"}>
															O-ve
														</MenuItem>
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
											<Typography sx={{ color: "red", m: 2 }}>
												{error ? error : ""}
											</Typography>
										</Grid>
										<Grid alignItems="center" justify="center">
											<SmallButton
												value="Cancel"
												color="#eaeaea"
												text="#B81C1C"
											/>
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
export default EditUser
