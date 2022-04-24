import React, { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import image from "../static/images/userPortrait.png"
import { Box, Grid } from "@mui/material"
import { SmallButton } from "../components/Buttons"
import { Link } from "react-router-dom"
import axios from 'axios'

function UserProfile() {
	const [user,setUser] = useState([])
	useEffect(()=>{
		(async function (){
			const userData = await axios.get(
				"http://localhost:4000/user/6263b790bb65608cbe37b1b3"
			)
			setUser(userData.data.user)
		})()
	},[])
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justify="center"
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
						<b>Name :</b> {user.firstName}
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
						<b>ID :</b>
						{user._id}
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
						<b>Age :</b> {user.age}
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
						<b>Gender :</b> {user.gender}
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
						<b>Mobile :</b> {user.phone}
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
						<b>Blood Group :</b> {user.blood}
					</Typography>
				</CardContent>
			</Card>
			<Grid alignItems="center" justify="center">
				<Link style={{ textDecoration: "none" }} to="/editprofile">
					<SmallButton
						value="Edit Details"
						color="#eaeaea"
						text="#595959"
					/>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/prescriptions">
					<SmallButton
						value="Prescriptions"
						color="#eaeaea"
						text="#595959"
					/>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/appointments">
					<SmallButton
						value="Appointments"
						color="#eaeaea"
						text="#595959"
					/>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/login">
					<SmallButton value="Logout" color="#eaeaea" text="#B81C1C" />
				</Link>
			</Grid>
		</Grid>
	)
}
export default UserProfile
