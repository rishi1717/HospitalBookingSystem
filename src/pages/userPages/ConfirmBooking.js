import * as React from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Box, Grid } from "@mui/material"
import { SmallButton } from "../../components/Buttons"
import { Link, useLocation } from "react-router-dom"
import FullLayout from "../../layouts/FullLayout"

function ConfirmBooking() {
	const location = useLocation()
	const details = location.state.details
	return (
		<FullLayout>
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
						mt: 2,
						fontWeight: "bold",
						color: "#595959",
					}}
					component="p"
				>
					Confirm Booking
				</Typography>
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
							<b>Scheduled at :</b> date And time
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
							mr: { xs: 2, sm: 5 },
						}}
					>
						<Link style={{ textDecoration: "none" }} to="/doctors">
							<SmallButton
								value="Cancel"
								color="#eaeaea"
								text="#EF4242"
							/>
						</Link>
						<Link
							style={{ textDecoration: "none" }}
							to="/payment"
							state={{ details: details }}
						>
							<SmallButton
								value="Confirm"
								color="#eaeaea"
								text="#609ACF"
							/>
						</Link>
					</Box>
				</Card>
			</Grid>
		</FullLayout>
	)
}
export default ConfirmBooking
