import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import image from "../static/images/hospital.webp"
import { Container } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

export default function UserLogin() {
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
			const resData = await axios.post("http://localhost:4000/user/login",data)

			console.log(resData)
			Toast.fire({
				position: "bottom-right",
				icon: "success",
				title: "user Logged in",
				showConfirmButton: false,
				timer: 3000,
			})
			navigate("/")
		} catch (e) {
			console.log(e.message)
		}
	}

	return (
		<Container>
			<Grid container mt={4}>
				<Grid item xs={false} sm={4} md={7}>
					<Box
						item
						mt={10}
						xs={false}
						sm={4}
						md={7}
						component="img"
						sx={{
							height: "auto",
							width: "auto",
							maxWidth: { xs: 0, sm: 400, md: 500 },
						}}
						alt="Hospital"
						src={image}
					/>
				</Grid>
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
								helperText={errors.email ? errors.email.message : null}
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
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
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
								<Grid item>
									<Link href="#" variant="body2">
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}
