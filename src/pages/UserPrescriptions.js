import { Card, CardContent, Container, Typography } from "@mui/material"
import React from "react"
import Search from "../components/Search"
import PrescriptionCard from "../components/userModule/PrescriptionCard"
function UserPrescriptions() {
	return (
		<Container>
			<Search />
			<Card
				sx={{
					display: "flex",
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
					<Typography
						variant="subtitle1"
						color="white"
						component="div"
					>
						Download
					</Typography>
				</CardContent>
			</Card>
			<PrescriptionCard />
		</Container>
	)
}

export default UserPrescriptions
