import React from "react"
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

const VerifyOtp = () => {
	const [error, setError] = React.useState()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [data, setData] = React.useState({
		otpVerify: "",
	})

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const onSubmit = async () => {
		try {
			const resData = await axios.post("/user/otpverify", data)
			console.log(resData.data)
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
						error={errors.otpVerify}
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
				</Box>
			</Box>
		</Grid>
	)
}

export default VerifyOtp
