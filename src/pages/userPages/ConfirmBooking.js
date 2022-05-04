import * as React from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Box, Button, Grid } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import FullLayout from "../../layouts/FullLayout"
import Unauthorized from "./Unauthorized"
import Swal from "sweetalert2"
import axios from "../../axios"

function ConfirmBooking() {
	const navigate = useNavigate()
	const location = useLocation()
	const details = location.state.details
	const [loading, setLoading] = React.useState(false)

	function loadRazorPay() {
		const script = document.createElement("script")
		script.src = "https://checkout.razorpay.com/v1/checkout.js"
		script.onerror = () => {
			alert("Error loading Razorpay")
		}
		
		script.onload = async () => {
			console.log("onload")
			try {
				setLoading(true)
				const result = await axios.post("/payment/create", {
					amount: details.fee + "00",
				})
				const { amount, id: order_id, currency } = result.data
				const {
					data: { key },
				} = await axios.get("/payment/get-razor-key")

				const options = {
					key: key,
					amount: amount.toString(),
					currency: currency,
					name: "Razorpay",
					description: "Booking Fee",
					order_id: order_id,
					handler: async(response) => {
						const result = await axios.post('/payment/pay', {
							amount: amount,
							razorpayPaymentId: response.razorpay_payment_id,
							razorpayOrderId: response.razorpay_order_id,
							razorpaySignature: response.razorpay_signature,
						})
						alert(result.data.msg)
						if(result.status === 200) {
							console.log(result.data.paymentId)
							console.log(details)
							
						}
					}
				}
				setLoading(false)
				const paymentObject = new window.Razorpay(options)
				paymentObject.open()

			} catch (err) {
				console.log("onload")
				console.log(err.message)
				setLoading(false)
			}
		}
		document.body.appendChild(script)
	}

	if (localStorage.userToken) {
		return (
			<FullLayout>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justify="center"
				>
					<Typography
						sx={{
							fontSize: { xs: "1rem", sm: "1.5rem" },
							fontFamily: "sans-serif",
							mt: 2,
							fontWeight: "bold",
							color: "#595959",
						}}
						component="p"
					>
						Confirm Booking
					</Typography>
					<Card
						elevation={3}
						sx={{
							mt: 5,
							mb: 5,
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							minHeight: { xs: 0, sm: 150 },
							px: { xs: 7 , sm: 10},
							py: { xs: 2, sm: 4 },
						}}
					>
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
									fontSize: {
										xs: "0.85rem",
										sm: "1rem",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Patient Name :</b> {details.user}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Age :</b> {details.age}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Gender :</b> {details.gender}
							</Typography>

							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Mobile :</b> {details.phone}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Appointed to :</b> {details.doctor}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Reason :</b> {details.reason}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Date :</b> {details.date}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Time :</b> {details.time}
							</Typography>
							<Typography
								sx={{
									mt: 2,
									fontSize: {
										xs: "0.75rem",
										sm: "1rem",
										textAlign: "left",
									},
									fontFamily: "sans-serif",
									color: "#595959",
								}}
								component="p"
							>
								<b>Amount to be paid :</b> {details.fee}
							</Typography>
						</CardContent>
						<Box
							component="div"
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								ml: { xs: 0, sm: 5 },
							}}
						>
							<Button
								sx={{
									mt: 4,
									ml: 1,
									backgroundColor: "#EF4242",
									color: "white",
									"&:hover": {
										backgroundColor: "white",
										color: "#EF4242",
									},
								}}
								onClick={async () => {
									const con = await Swal.fire({
										title: "Are you sure?",
										text: "Provided details will be cleared!",
										background: "#eaeaea",
										color: "#595959",
										showCancelButton: true,
										cancelButtonColor: "#609ACF",
										confirmButtonText: "Cancel",
										cancelButtonText: "Don't Cancel",
										confirmButtonColor: "#B81C1C",
									})
									if (con.isConfirmed) {
										navigate("/doctors")
									}
								}}
							>
								Cancel
							</Button>
							<Button
								sx={{
									fontSize: "0.8rem",
									mt: 4,
									ml: 1,
									backgroundColor: "#609acf",
									color: "white",
									"&:hover": {
										backgroundColor: "white",
										color: "#609acf",
									},
								}}
								disabled={loading}
								onClick={loadRazorPay}
							>
								Confirm
							</Button>
						</Box>
					</Card>
				</Grid>
			</FullLayout>
		)
	} else {
		return <Unauthorized />
	}
}
export default ConfirmBooking
