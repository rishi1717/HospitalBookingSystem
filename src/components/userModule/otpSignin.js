import React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { useForm } from "react-hook-form"
import axios from "../../axios.js"
import VerifyOtp from "./verifyOtp.js"

const OtpSignin = ({ setOtp }) => {
	const [error, setError] = React.useState()
	const [sendOtp, setSendOtp] = React.useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [data, setData] = React.useState({
		phone: "+91",
	})

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const onSubmit = async () => {
		try {
			const resData = await axios.post("/user/otplogin", data)
			console.log(resData.data)
			setSendOtp(true)
		} catch (err) {
			if (err.response) {
				setError(err.response.data.message)
			}
			console.log(err.message)
		}
	}

	if (!sendOtp) {
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
							{...register("phone", {
								required: "Provide phone!",
							})}
							margin="normal"
							required
							fullWidth
							id="phone"
							label="Phone"
							name="phone"
							autoComplete="phone"
							autoFocus
							onChange={handleChange}
							value={data.phone}
							error={errors.phone}
							helperText={errors.phone ? errors.phone.message : null}
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
							Send OTP
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
						<Grid container>
							<Grid item>
								<Link href="/register" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Grid>
		)
	}else{
        return (
				<VerifyOtp />
			)
    }
}

export default OtpSignin
