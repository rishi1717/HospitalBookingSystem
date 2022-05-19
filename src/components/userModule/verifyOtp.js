import React, { useEffect } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { useForm } from "react-hook-form"
import axios from "../../axios.js"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { SmallButton } from "../Buttons.js"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

const VerifyOtp = ({ phone, setOtp, otpData }) => {
	const [counter, setCounter] = React.useState(30)

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter - 1)
		}, 1000)
		if (counter < 1) {
			clearInterval(interval)
		}

		return () => clearInterval(interval)
	}, [counter])

	const navigate = useNavigate()
	const [error, setError] = React.useState()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const [data, setData] = React.useState({
		otpVerify: "",
		phone: phone,
	})

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
		reset()
	}

	const onSubmit = async () => {
		try {
			const resData = await axios.post("/user/otpverify", data)
			if (resData.status === 200) {
				localStorage.setItem("userToken", resData.data.token)
				localStorage.setItem("userId", resData.data.user._id)
				localStorage.setItem("userImage", resData.data.user.image)
				localStorage.setItem("userName", resData.data.user.firstName)
				Toast.fire({
					position: "bottom-right",
					icon: "success",
					title: "user Logged in",
					showConfirmButton: false,
					timer: 3000,
				})
				navigate("/")
			} else {
				setError("Incorrect OTP")
			}
		} catch (err) {
			if (err.response) {
				setError(err.response.data.message)
			}
			console.log(err.message)
		}
	}

	return (
		<Grid
			item
			xs={12}
			sm={8}
			md={5}
			component={Paper}
			elevation={6}
			square
			sx={{
				borderRadius: "1rem",
			}}
		>
			<Box
				sx={{
					my: 4,
					mx: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box
					component="form"
					noValidate
					onSubmit={handleSubmit(onSubmit)}
					sx={{ mt: 1 }}
				>
					<TextField
						{...register("otpVerify", {
							required: "Provide OTP!",
						})}
						margin="normal"
						required
						fullWidth
						id="otpVerify"
						label="OTP"
						name="otpVerify"
						autoComplete="otpVerify"
						autoFocus
						onChange={handleChange}
						value={data.otpVerify}
						error={errors.otpVerify ? true : false}
						helperText={
							errors.otpVerify ? errors.otpVerify.message : null
						}
					/>
					<Typography sx={{ color: "red", m: 1 }}>
						{error ? error : ""}
					</Typography>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Verify OTP
					</Button>
					<Button
						onClick={() => {
							setOtp(false)
						}}
						fullWidth
						sx={{ mb: 4 }}
					>
						Sign In With Email and password
					</Button>
					{counter > 0 ? (
						<div>Resend OTP in {counter} sec</div>
					) : (
						<div
							onClick={async () => {
								try {
									await axios.post("/user/otplogin", otpData)
									setCounter(30)
								} catch (err) {
									console.log(err.message)
								}
							}}
						>
							<SmallButton
								value="Resend OTP"
								text="#609acf"
								color="#eaeaea"
							/>
						</div>
					)}
				</Box>
			</Box>
		</Grid>
	)
}

export default VerifyOtp
