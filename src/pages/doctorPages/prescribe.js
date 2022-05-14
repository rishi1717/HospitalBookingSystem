import {
	Button,
	Card,
	CardContent,
	Grid,
	TextField,
	Typography,
} from "@mui/material"
import axios from "../../axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import DoctorsLayout from "../../layouts/DoctorsLayout"
import { useLocation } from "react-router-dom"
import { Box } from "@mui/system"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import DoctorPrescritption from "../../components/doctorModule/doctorPrescriptions"
import Unauthorized from "./unauthorized"
import PrescriptionList from "../../components/doctorModule/PrescriptionList"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

const Prescribe = () => {
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
		medicine: [],
		dosage: [],
		prescribedFor: [],
		date: new Date(),
	})

	const [medicine, setMedicine] = useState({
		medicine: "",
		dosage: "",
		prescribedFor: "",
	})

	const [prescriptions, setPrescriptions] = useState([])

	useEffect(() => {
		;(async function() {
			const userData = await axios.get(`/prescription/${user._id}`, {
				headers: {
					"auth-token": docState.token,
				},
			})
			setPrescriptions(userData.data.prescription)
		})()
	}, [])

	const handleChange = ({ currentTarget: input }) => {
		const { name, value } = input
		setMedicine({ ...medicine, [name]: value })
	}

	const addToList = () => {
		if (medicine.medicine === "" || medicine.dosage === "" || medicine.prescribedFor === "") {
			Toast.fire({
				icon: "error",
				title: "Please fill all fields",
			})
			return
		}
		setData({
			...data,
			medicine: [...data.medicine, medicine.medicine],
			dosage: [...data.dosage, medicine.dosage],
			prescribedFor: [...data.prescribedFor, medicine.prescribedFor],
		})
		setMedicine({
			medicine: "",
			dosage: "",
			prescribedFor: "",
		})
	}
	
	useEffect(() => {
		console.log(data)
	},[data])

	const onSubmit = async () => {
		try {
			const details = {
				...data,
			}
			console.log(details)
			await axios.post("/prescription", details, {
				headers: {
					"auth-token": docState.token,
				},
			})
			Toast.fire({
				position: "bottom-right",
				icon: "success",
				title: "Prescription Added",
				showConfirmButton: false,
				timer: 3000,
			})
			setData({ ...data, medicine: [], dosage: [], prescribedFor: [] })
		} catch (err) {
			console.log(err.message)
		}
	}

	if (docState.token) {
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
					Prescribe Medicine for {user.firstName}
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
								value={medicine.medicine}
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
								value={medicine.dosage}
								error={errors.dosage ? true : false}
								helperText={
									errors.dosage ? errors.dosage.message : null
								}
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
								value={medicine.prescribedFor}
								error={errors.prescribedFor ? true : false}
								helperText={
									errors.prescribedFor
										? errors.prescribedFor.message
										: null
								}
							/>
						</Grid>
						<Grid item>
							<Button onClick={addToList}>
								Add Prescription to list
							</Button>
						</Grid>
						{data.medicine.length > 0 && (
							<>
								<PrescriptionList
									setData={setData}
									prescriptions={data}
								/>
								<Grid
									item
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Button type="submit" sx={{
										backgroundColor: "#1976D2",
										color: "white",
										":hover": {
											backgroundColor: "white",
											color: "#1976D2",
										}
									}}>Prescribe</Button>
								</Grid>
							</>
						)}
					</Grid>
				</Box>
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
					Prescriptions of {user.firstName}
				</Typography>
				<Card
					sx={{
						display: { xs: "none", sm: "flex" },
						m: "1rem",
						flexDirection: { xs: "column", md: "row" },
						backgroundColor: "#585858",
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={3}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="white"
									component="div"
									borderRight={1}
								>
									Medicine
								</Typography>
							</CardContent>
						</Grid>

						<Grid item xs={4}>
							<CardContent>
								<Typography
									variant="subtitle1"
									color="white"
									component="div"
									borderRight={1}
								>
									Dosage
								</Typography>
							</CardContent>
						</Grid>

						<Grid item xs={2}>
							<CardContent>
								<Typography
									variant="subtitle1"
									color="white"
									component="div"
									borderRight={1}
								>
									Date
								</Typography>
							</CardContent>
						</Grid>

						<Grid item xs={3}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="white"
									component="div"
								>
									Options
								</Typography>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
				<DoctorPrescritption prescriptions={prescriptions} />
			</DoctorsLayout>
		)
	} else {
		return <Unauthorized />
	}
}

export default Prescribe
