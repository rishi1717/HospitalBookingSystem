import * as React from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import image from "../static/images/userPortrait.png"
import { Box, Grid } from "@mui/material"
import { SmallButton } from "../components/Buttons"
// import LogoutIcon from "@mui/icons-material/Logout"
function UserProfile() {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justify="center"
			style={{ minHeight: "100vh" }}
		>
			<Card
				elevation={3}
				sx={{
					mt: 5,
					display: "flex",
					maxHeight: "18rem",
					minHeight: { xs: 0, sm: 150 },
					px: { xs: 1, sm: 7 },
					py: { xs: 2, sm: 4 },
				}}
			>
				<Box
					component="div"
					sx={{
						display: "flex",
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
				</Box>
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
						<b>Name :</b> Rishi Releesh
					</Typography>
					<Typography
						sx={{
							mt: 2,
							fontSize: { xs: "0.75rem", sm: "1rem", textAlign: "left" },
							fontFamily: "sans-serif",
							color: "#595959",
						}}
						component="p"
					>
						<b>ID :</b> AD7956
					</Typography>
					<Typography
						sx={{
							mt: 2,
							fontSize: { xs: "0.75rem", sm: "1rem", textAlign: "left" },
							fontFamily: "sans-serif",
							color: "#595959",
						}}
						component="p"
					>
						<b>Age :</b> 22
					</Typography>
					<Typography
						sx={{
							mt: 2,
							fontSize: { xs: "0.75rem", sm: "1rem", textAlign: "left" },
							fontFamily: "sans-serif",
							color: "#595959",
						}}
						component="p"
					>
						<b>Gender :</b> Male
					</Typography>
					<Typography
						sx={{
							mt: 2,
							fontSize: { xs: "0.75rem", sm: "1rem", textAlign: "left" },
							fontFamily: "sans-serif",
							color: "#595959",
						}}
						component="p"
					>
						<b>Mobile :</b> 7994268435
					</Typography>
					<Typography
						sx={{
							mt: 2,
							fontSize: { xs: "0.75rem", sm: "1rem", textAlign: "left" },
							fontFamily: "sans-serif",
							color: "#595959",
						}}
						component="p"
					>
						<b>Blood Group :</b> B +ve
					</Typography>
				</CardContent>
			</Card>
			<Grid alignItems="center" justify="center">
				<SmallButton value="Edit Details" color="#eaeaea" text="#595959" />
				<SmallButton value="Prescriptions" color="#eaeaea" text="#595959" />
				<SmallButton value="Appointments" color="#eaeaea" text="#595959" />
				<SmallButton value="Logout" color="#eaeaea" text="#B81C1C" />
			</Grid>
		</Grid>
	)
}
export default UserProfile
