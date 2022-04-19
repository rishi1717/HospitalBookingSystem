import { Card, CardContent, Container, Typography } from "@mui/material"
import React from "react"
import Search from "../components/Search"
import PrescriptionCard from "../components/userModule/PrescriptionCard"
function UserPrescriptions() {
	return (
		<Container>
			<Typography
				sx={{
					textAlign:'center',
					fontSize: { xs: "1rem", sm: "1.5rem" },
					fontFamily: "sans-serif",
					mt: 2,
					fontWeight: "bold",
					color: "#595959",
				}}
				component="p"
			>
				Prescriptions
			</Typography>
			<Search />
			<Card
				sx={{
					display:{xs:'none',sm:"flex"},
					m: "1rem",
					flexDirection: { xs: "column", md: "row" },
					backgroundColor: "#585858",
				}}
			>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography
						variant="subtitle1"
						color="white"
						component="div"
						borderRight={1}
					>
						Medicine
					</Typography>
				</CardContent>
				<CardContent sx={{ flex: "2 0 auto" }}>
					<Typography
						variant="subtitle1"
						color="white"
						component="div"
						borderRight={1}
					>
						Dosage
					</Typography>
				</CardContent>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography
						variant="subtitle1"
						color="white"
						component="div"
						borderRight={1}
					>
						Date Prescribed
					</Typography>
				</CardContent>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography
						variant="subtitle1"
						color="white"
						component="div"
						borderRight={1}
					>
						Doctor
					</Typography>
				</CardContent>
				<CardContent sx={{ flex: "0.1 0 auto" }}>
					<Typography variant="subtitle1" color="white" component="div">
						Download
					</Typography>
				</CardContent>
			</Card>
			<PrescriptionCard />
		</Container>
	)
}

export default UserPrescriptions
