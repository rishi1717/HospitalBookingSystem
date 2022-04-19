import * as React from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import image from "../static/images/doctorPortrait.webp"
import { Box, Grid } from "@mui/material"
import { SmallButton } from "../components/Buttons"
import { Link } from "react-router-dom"
// import LogoutIcon from "@mui/icons-material/Logout"
function DoctorProfile() {
	return (
		<Card
			elevation={3}
			sx={{
				m: "auto",
				mt: 5,
				width: "85%",
				minHeight: { xs: 0, sm: 150 },
				px: { xs: 1, sm: 7 },
				py: { xs: 2, sm: 4 },
			}}
		>
			<Grid container spacing={2} alignItems="center">
				<Grid item xs={12} sm={4} sx={{ mt: "1rem" }}>
					<Box
						component="div"
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							mr: { xs: 2, sm: 5 },
						}}
					>
						<Typography
							sx={{
								fontSize: {
									xs: "0.9rem",
									sm: "1.2rem",
								},
								fontFamily: "sans-serif",
								color: "#595959",
							}}
							component="p"
						>
							<b>Dr Jiljith</b>
						</Typography>
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
						<Link style={{ textDecoration: "none" }} to="/editprofile">
							<SmallButton
								value="Book now"
								color="#609acf"
								text="##1976D2"
							/>
						</Link>
					</Box>
				</Grid>

				<Grid item xs={12} sm={8} sx={{ mt: "1rem" }}>
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
									xs: "0.75rem",
									sm: "1rem",
									textAlign: "left",
								},
								fontFamily: "sans-serif",
								color: "#595959",
							}}
							component="p"
						>
							<b>Qualification :</b>
						</Typography>
						<Typography
							sx={{
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
							MBBS , MD
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
							<b>College :</b>
						</Typography>
						<Typography
							sx={{
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
							MBBS,MD- Pariyaram Medical College
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
							<b>Experience :</b>
						</Typography>
						<Typography
							sx={{
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
							Over 8 years of experience in general medicine.
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
							<b>Area of Expertise :</b>
						</Typography>
						<Typography
							sx={{
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
							Handling Complicated Diabetic patients, Snake bites,
							Critical Care, Infection Diseases and other Life style
							Disease
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
							<b>OP Time :</b>
						</Typography>
						<Typography
							sx={{
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
							Mon – Sat, 10am to 5pm
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	)
}
export default DoctorProfile
