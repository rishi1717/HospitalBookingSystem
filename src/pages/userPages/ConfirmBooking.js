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
import image1 from "../../static/images/services.png"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

function ConfirmBooking() {
	if (localStorage.userToken) {
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
						handler: async (response) => {
							const result = await axios.post("/payment/pay", {
								amount: amount,
								razorpayPaymentId: response.razorpay_payment_id,
								razorpayOrderId: response.razorpay_order_id,
								razorpaySignature: response.razorpay_signature,
							})
							if (result.status === 200) {
								const payDetails = {
									...details,
									paymentId: result.data.paymentId,
								}
								axios.post("/appointment", payDetails, {
									headers: { "auth-token": localStorage.userToken },
								})
								Toast.fire({
									position: "bottom-right",
									icon: "success",
									title: "Appointment booked successfully",
									showConfirmButton: false,
									timer: 3000,
								})
								navigate("/appointments")
							}
						},
					}
					setLoading(false)
					const paymentObject = new window.Razorpay(options)
					paymentObject.open()
				} catch (err) {
					console.log(err.message)
					setLoading(false)
				}
			}
			document.body.appendChild(script)
		}

		return (
			<FullLayout>
				<Grid
					container
					spacing={2}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Grid
						item
						md={4}
						sx={{
							display: { xs: "none", lg: "block" },
						}}
					>
						<Box
							mt={1}
							p={2}
							component="img"
							sx={{
								borderRadius: "10%",
								height: "auto",
								width: "auto",
								// maxHeight: {xs:0, sm: 233, md: 400 },
								maxWidth: { xs: 300, sm: 400, md: 500 },
							}}
							alt="Hospital"
							src={image1}
						/>
					</Grid>
					<Grid item xs={12} sm={8} md={7}>
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
									mt: 3,
									color: "#1976D2",
								}}
								component="p"
							>
								Confirm Booking
							</Typography>
							<Card
								elevation={3}
								sx={{
									border: "1px solid #609acf",
									mt: 3,
									mb: 4,
									display: "flex",
									flexDirection: { xs: "column", sm: "row" },
									minHeight: { xs: 0, sm: 150 },
									px: { xs: 7, sm: 10 },
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
					</Grid>
				</Grid>
			</FullLayout>
		)
	} else {
		return <Unauthorized />
	}
}
export default ConfirmBooking
