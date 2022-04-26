import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import image from "../../static/images/userPortrait.png"
import { Box, Button, Grid, TextField } from "@mui/material"
import { SmallButton } from "../../components/Buttons"
import FullLayout from "../../layouts/FullLayout"
// import LogoutIcon from "@mui/icons-material/Logout"
function EditUser() {
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		})
	}
	return (
		<FullLayout>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				maxWidth={800}
				m="auto"
			>
				<Card
					elevation={3}
					sx={{
						mt: 5,
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						minHeight: { xs: 0, sm: 150 },
						px: { xs: 1, sm: 7 },
						py: { xs: 2, sm: 4 },
					}}
				>
					<Box
						component="div"
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							mr: { xs: 2, sm: 5 },
						}}
					>
						<CardMedia
							component="img"
							sx={{
								margin: "0.4rem",
								maxWidth: { xs: 120, sm: 150 },
								maxHeight: { xs: 120, sm: 150 },
								borderRadius: 100,
							}}
							image={image}
							alt="image"
						/>
						<Grid item xs={12} sm={6} textAlign="center">
							<Button
								variant="outlined"
								component="label"
								sx={{ fontSize: "0.8rem" }}
							>
								Change picture
								<input type="file" hidden />
							</Button>
						</Grid>
					</Box>
					<CardContent
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
						<Grid item xs={12} sm={12}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
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
									</Grid>
									<Grid alignItems="center" justify="center">
										<SmallButton
											value="Cancel"
											color="#eaeaea"
											text="#B81C1C"
										/>
										<SmallButton
											type="submit"
											value="Edit"
											color="#eaeaea"
											text="#609acf"
										/>
									</Grid>
								</Box>
							</Box>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</FullLayout>
	)
}
export default EditUser
