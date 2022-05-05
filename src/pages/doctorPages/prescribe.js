import { Button, Grid, TextField, Typography } from "@mui/material"
import axios from "../../axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import { useLocation, useNavigate } from "react-router-dom"
import { Box } from "@mui/system"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

const Prescribe = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { user } = location.state
	const docState = useSelector((storeState) => storeState.doctor)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [data, setData] = useState({
		doctorId: docState.id,
		userId: user._id,
		user: user.firstName,
		doctor: docState.name,
		medicine: "",
		dosage: "",
		prescribedFor: "",
		date: new Date(),
	})

	useEffect(() => {}, [])

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const onSubmit = async () => {
		try {
			const details = {
				...data,
			}
			console.log(details)
			// await axios.post("/prescription", details, {
			// 	headers: {
			// 		"auth-token": docState.token,
			// 	},
			// })
            Toast.fire({
					position: "bottom-right",
					icon: "success",
					title: "Prescription Added",
					showConfirmButton: false,
					timer: 3000,
				})
			setData({ ...data, medicine: "", dosage: "", prescribedFor: "" })
		} catch (err) {
			console.log(err.message)
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
					display: {
						xs: "none",
						sm: "block",
					},
					fontFamily: "sans-serif",
					color: "#1976D2",
				}}
				component="p"
			>
				Prescribe Medicine
			</Typography>
			<Typography
				sx={{
					fontSize: {
						xs: "1rem",
						sm: "1.2rem",
					},
					fontFamily: "sans-serif",
					color: "#595959",
					textAlign: "center",
					mb: 3,
					mt: { xs: 1, sm: 3 },
				}}
				component="p"
			>
				Prescribe Medicine for Patient
			</Typography>
			<Box
				component="form"
				noValidate
				onSubmit={handleSubmit(onSubmit)}
				sx={{ m: { xs: 2, sm: 5 } }}
			>
				<Grid direction="column" container spacing={2}>
					<Grid item>
						<TextField
							{...register("medicine", {
								required: "Provide medicine!",
							})}
							required
							fullWidth
							id="medicine"
							label="Medicine"
							name="medicine"
							onChange={handleChange}
							value={data.medicine}
							error={errors.medicine ? true : false}
							helperText={
								errors.medicine ? errors.medicine.message : null
							}
						/>
					</Grid>
					<Grid item>
						<TextField
							{...register("dosage", {
								required: "Provide dosage!",
							})}
							required
							fullWidth
							id="dosage"
							label="dosage"
							name="dosage"
							onChange={handleChange}
							value={data.dosage}
							error={errors.dosage ? true : false}
							helperText={errors.dosage ? errors.dosage.message : null}
						/>
					</Grid>
					<Grid item>
						<TextField
							{...register("prescribedFor", {
								required: "prescribedFor?",
							})}
							required
							fullWidth
							id="prescribedFor"
							label="prescribed For"
							name="prescribedFor"
							onChange={handleChange}
							value={data.prescribedFor}
							error={errors.prescribedFor ? true : false}
							helperText={
								errors.prescribedFor
									? errors.prescribedFor.message
									: null
							}
						/>
					</Grid>
					<Grid item>
						<Button type="submit">Prescribe</Button>
					</Grid>
				</Grid>
			</Box>
		</DoctorsLayout>
	)
}

export default Prescribe
