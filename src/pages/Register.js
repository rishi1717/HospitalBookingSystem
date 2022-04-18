import * as React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

export default function Register() {
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		})
	}

	return (
		<>
			<Container component="main" maxWidth="md">
				<Typography
					align="center"
					component="h1"
					variant="h5"
					sx={{
						marginTop: 3,
						color: "#595959",
					}}
				>
					Register
				</Typography>
				<Grid container spacing={2} alignItems='center'> 
					<Grid item xs={12} sm={6} textAlign="center">
						<Button variant="contained" component="label">
							Upload File
							<input type="file" hidden />
						</Button>
					</ Grid>
					<Grid item xs={12} sm={6}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<Box
								component="form"
								noValidate
								onSubmit={handleSubmit}
								sx={{ mt: 2 }}
							>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
										<TextField
											autoComplete="given-name"
											name="firstName"
											required
											fullWidth
											id="firstName"
											label="First Name"
											autoFocus
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											required
											fullWidth
											id="lastName"
											label="Last Name"
											name="lastName"
										/>
									</Grid>
									<Grid item xs={12} sm={4}>
										<TextField
											required
											fullWidth
											id="age"
											label="Age"
											name="age"
										/>
									</Grid>
									<Grid item xs={12} sm={4}>
										<TextField
											required
											fullWidth
											id="gender"
											label="Gender"
											name="gender"
										/>
									</Grid>
									<Grid item xs={12} sm={4}>
										<TextField
											required
											fullWidth
											id="blood"
											label="Blood Group"
											name="blood"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="email"
											label="Email Address"
											name="email"
											autoComplete="email"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											id="phone"
											label="Phone"
											name="phone"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											name="password"
											label="Password"
											type="password"
											id="password"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											fullWidth
											name="cpassword"
											label="Confirm Password"
											type="password"
											id="cpassword"
										/>
									</Grid>
								</Grid>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
								>
									Sign Up
								</Button>
								<Grid container justifyContent="flex-end">
									<Grid item>
										<Link href="#" variant="body2">
											Already have an account? Sign in
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
