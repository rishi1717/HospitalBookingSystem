import { Card, CardContent, Container, Grid, Typography } from "@mui/material"
import React from "react"
import Search from "../components/Search"
import PrescriptionCard from "../components/userModule/PrescriptionCard"
import FullLayout from "../layouts/FullLayout"
function UserPrescriptions() {
	return (
		<FullLayout>
			<Container sx={{ mb: 10 }}>
				<Typography
					sx={{
						textAlign: "center",
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
						display: { xs: "none", sm: "flex" },
						m: "1rem",
						flexDirection: { xs: "column", md: "row" },
						backgroundColor: "#585858",
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={2}>
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
						</Grid>

						<Grid item xs={4}>
							<CardContent>
								<Typography
									variant="subtitle1"
									color="white"
									component="div"
									borderRight={1}
								>
									Dosage
								</Typography>
							</CardContent>
						</Grid>

						<Grid item xs={2}>
							<CardContent>
								<Typography
									variant="subtitle1"
									color="white"
									component="div"
									borderRight={1}
								>
									Date
								</Typography>
							</CardContent>
						</Grid>

						<Grid item xs={3}>
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
						</Grid>

						<Grid item xs={1}>
							<CardContent>
								<Typography
									variant="subtitle1"
									color="white"
									component="div"
								></Typography>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
				<PrescriptionCard />
			</Container>
		</FullLayout>
	)
}

export default UserPrescriptions
