import * as React from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Box, Grid } from "@mui/material"
import { MediumButton } from "../../components/Buttons"
import { Link, useLocation } from "react-router-dom"
import DoctorsLayout from "../../layouts/DoctorsLayout.js"

function DocProfile() {
	const location = useLocation()
	const { doctor } = location.state ? location.state : ""

	return (
		<DoctorsLayout>
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
					Doctor Profile
				</Typography>
				<Card
					elevation={3}
					sx={{
						border: "1px solid #609acf",
						mx: "auto",
						mt: 3,
						width: "75%",
						minHeight: { xs: 0, sm: 150 },
						px: { xs: 1, sm: 7 },
						py: { xs: 2, sm: 4 },
					}}
				>
					<Grid container spacing={2} alignItems="center">
						<Grid item xs={12} sm={6} sx={{ mt: "1rem" }}>
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
									<b>Dr. {doctor.name}</b>
								</Typography>
								<CardMedia
									component="img"
									sx={{
										margin: "0.4rem",
										maxWidth: { xs: 120, sm: 180 },
										maxHeight: { xs: 120, sm: 180 },
										borderRadius: 100,
									}}
									src={doctor.image}
									alt="image"
								/>
							</Box>
						</Grid>

						<Grid item xs={12} sm={6} sx={{ mt: "1rem" }}>
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
									<b>Qualification :</b> {doctor.qualification}
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
									<b>Department :</b> {doctor.department}
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
									<b>Experience :</b> {doctor.experience}
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
									<b>Area of Expertise :</b> {doctor.expertise}
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
									<b>Working days :</b>{" "}
									{doctor.days.map((day, i) => {
										const weekDays = [
											"sun",
											"mon",
											"tue",
											"wed",
											"thu",
											"fri",
											"sat",
										]
										if (i + 1 === doctor.days.length) {
											return weekDays[day] + "."
										}
										return weekDays[day] + ", "
									})}
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
									<b>Timing :</b> {doctor.startTime} to{" "}
									{doctor.endTime}
								</Typography>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
				<Box
					sx={{
						ml: "auto",
						mr: "auto",
					}}
				>
					<Link
						style={{ textDecoration: "none" }}
						state={{ doctor: doctor }}
						to="/booking"
					>
						<MediumButton value="Book now" color="#1976D2" text="#fff" />
					</Link>
				</Box>
			</Grid>
		</DoctorsLayout>
	)
}
export default DocProfile
