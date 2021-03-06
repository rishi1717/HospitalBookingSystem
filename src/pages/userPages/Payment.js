import {
	Box,
	Button,
	Card,
	FormControlLabel,
	Grid,
	Paper,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@mui/material"
import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
// import axios from "../../axios.js"
import Swal from "sweetalert2"
import image from "../../static/images/cardSchemes.webp"
import FullLayout from "../../layouts/FullLayout"
import Unauthorized from "./Unauthorized.js"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

const Payment = () => {
	if (localStorage.userToken) {
		const [select, setSelect] = React.useState("card")

		const handleSelection = (event) => {
			setSelect(event.target.value)
		}
		const location = useLocation()
		let details
		if (location.state) {
			details = location.state.details
		}

		const navigate = useNavigate()
		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm()

		const [data, setData] = useState({
			cardNumber: "",
			cardName: "",
			expiry: "",
			cvv: "",
		})
		const handleChange = ({ currentTarget: input }) => {
			setData({ ...data, [input.name]: input.value })
		}

		const onSubmit = () => {
			// axios.post("/appointments", details)
			Toast.fire({
				position: "bottom-right",
				icon: "success",
				title: "Booking confirmed",
				showConfirmButton: false,
				timer: 3000,
			})
			navigate("/appointments")
		}

		return (
			<FullLayout>
				<Typography
					sx={{
						textAlign: "center",
						fontSize: { xs: "1rem", sm: "1.5rem" },
						fontFamily: "sans-serif",
						mt: 2,
						fontWeight: "bold",
						color: "#595959",
					}}
					component="p"
				>
					Payment
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={4}>
						<Paper
							elevation={4}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								my: 2,
								mx: { xs: 0, sm: 4 },
								height: "93.2%",
							}}
						>
							<Typography
								sx={{
									textAlign: "center",
									fontFamily: "sans-serif",
									m: 2,
									fontWeight: "bold",
									color: "#595959",
								}}
								component="p"
							>
								Choose Payment Method
							</Typography>
							<RadioGroup
								aria-labelledby="demo-controlled-radio-buttons-group"
								name="controlled-radio-buttons-group"
								value={select}
								onChange={handleSelection}
								sx={{ m: 2 }}
							>
								<FormControlLabel
									value="card"
									control={<Radio />}
									label="Card"
								/>
								<FormControlLabel
									value="inhand"
									control={<Radio />}
									label="Pay Inhand"
								/>
							</RadioGroup>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={8}>
						{select === "card" ? (
							<Card elevation={4} sx={{ mx: { xs: 0, sm: 4 }, my: 2 }}>
								<Grid
									container
									direction="column"
									alignItems="center"
									justifyContent="center"
								>
									<Box
										mt={2}
										component="img"
										sx={{
											height: "auto",
											width: "auto",
											maxWidth: { xs: 300, sm: 400, md: 500 },
										}}
										alt="Cards"
										src={image}
									/>
								</Grid>
								<Box
									component="form"
									noValidate
									onSubmit={handleSubmit(onSubmit)}
									sx={{ m: { xs: 2, sm: 5 } }}
								>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={12}>
											<TextField
												{...register("cardNumber", {
													required: "Provide your card number!",
													minLength: {
														value: 12,
														message: "Invalid card",
													},
													maxLength: {
														value: 12,
														message: "Invalid card",
													},
												})}
												name="cardNumber"
												required
												fullWidth
												id="cardNumber"
												label="Card Number"
												autoFocus
												onChange={handleChange}
												value={data.cardNumber}
												error={errors.cardNumber}
												helperText={
													errors.cardNumber
														? errors.cardNumber.message
														: null
												}
											/>
										</Grid>
										<Grid item xs={12} sm={12}>
											<TextField
												{...register("cardName", {
													required: "Provide Name on card!",
													minLength: {
														value: 5,
														message: "invalid name",
													},
												})}
												required
												fullWidth
												id="cardName"
												label="Card Holder Name"
												name="cardName"
												onChange={handleChange}
												value={data.cardName}
												error={errors.cardName}
												helperText={
													errors.cardName
														? errors.cardName.message
														: null
												}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												{...register("expiry", {
													required: "Provide Expiry Date",
												})}
												required
												fullWidth
												id="expiry"
												label="Expiry Date"
												name="expiry"
												onChange={handleChange}
												value={data.expiry}
												error={errors.expiry}
												helperText={
													errors.expiry
														? errors.expiry.message
														: null
												}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												{...register("cvv", {
													required: "Provide CVV number!",
													minLength: {
														value: 3,
														message: "Invalid CVV",
													},
													maxLength: {
														value: 3,
														message: "Invalid CVV",
													},
												})}
												required
												fullWidth
												id="cvv"
												label="Cvv"
												name="cvv"
												onChange={handleChange}
												value={data.cvv}
												error={errors.cvv}
												helperText={
													errors.cvv ? errors.cvv.message : null
												}
											/>
										</Grid>
									</Grid>
									<Grid container spacing={2}>
										<Grid item xs={6} sm={3} ml="auto">
											<Button
												fullWidth
												onClick={() => {
													navigate("/doctors")
												}}
												variant="contained"
												sx={{
													mt: 3,
													mb: 2,
													ml: "auto",
													backgroundColor: "#EF4242",
												}}
											>
												Cancel
											</Button>
										</Grid>
										<Grid item xs={6} sm={3}>
											<Button
												fullWidth
												type="submit"
												variant="contained"
												sx={{ mt: 3, mb: 2, ml: "auto" }}
											>
												Pay {details.fee} Rs
											</Button>
										</Grid>
									</Grid>
								</Box>
							</Card>
						) : (
							<Card elevation={4} sx={{ mx: { xs: 0, sm: 4 }, my: 2 }}></Card>
						)}
					</Grid>
				</Grid>
			</FullLayout>
		)
	} else {
		return <Unauthorized />
	}
}

export default Payment
