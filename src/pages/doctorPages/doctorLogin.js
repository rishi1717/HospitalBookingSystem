import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { Container } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import axios from "../../axios.js"
import Swal from "sweetalert2"
import image from "../../static/images/teams.webp"
import Paper from "@mui/material/Paper"
import { useDispatch } from "react-redux"
import {
	addDoctorToken,
	addDoctorId,
	addDoctorName,
	addDoctorImage,
} from "../../redux/doctorSlice"
import DocNav from "../../components/doctorModule/docNav.js"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

export default function DoctorLogin() {
	const dispatch = useDispatch()
	const [error, setError] = React.useState()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [data, setData] = React.useState({
		email: "",
		password: "",
	})

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
	}

	const onSubmit = async () => {
		try {
			const resData = await axios.post("/doctor/login", data)

			dispatch(addDoctorToken(resData.data.token))
			dispatch(addDoctorId(resData.data.doctorId))
			dispatch(addDoctorName(resData.data.doctorName))
			dispatch(addDoctorImage(resData.data.image))
			Toast.fire({
				position: "bottom-right",
				icon: "success",
				title: "Logged in",
				showConfirmButton: false,
				timer: 3000,
			})
			navigate("/doctor")
		} catch (err) {
			setError(err.response.data.message)
		}
	}

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<DocNav />
			</Box>
			<Container>
				<Grid container mt={4}>
					<Grid
						item
						xs={false}
						sm={6}
						sx={{ display: { xs: "none", sm: "block" } }}
					>
						<Box
							item
							mt={10}
							xs={false}
							component="img"
							sx={{
								height: "auto",
								width: "auto",
								maxWidth: { xs: 0, sm: 500 },
								borderRadius: 100,
								display: { xs: "none", sm: "block" },
							}}
							alt="Hospital"
							src={image}
						/>
					</Grid>
					<Grid item xs={12} sm={6} component={Paper} elevation={6}>
						<Box
							sx={{
								my: 8,
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
									{...register("email", {
										required: "Provide email!",
									})}
									margin="normal"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									autoFocus
									onChange={handleChange}
									value={data.email}
									error={errors.email}
									helperText={
										errors.email ? errors.email.message : null
									}
								/>
								<TextField
									{...register("password", {
										required: "provide a password!",
									})}
									margin="normal"
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
										errors.password ? errors.password.message : null
									}
								/>
								<Typography sx={{ color: "red", m: 1 }}>
									{error ? error : ""}
								</Typography>
								<FormControlLabel
									control={
										<Checkbox value="remember" color="primary" />
									}
									label="Remember me"
								/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
								>
									Sign In
								</Button>
								<Grid container>
									<Grid item xs>
										<Link href="#" variant="body2">
											Forgot password?
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
