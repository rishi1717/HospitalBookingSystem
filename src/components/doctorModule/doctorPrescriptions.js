import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Grid } from "@mui/material"

export default function DoctorPrescritption({ prescriptions }) {
	return (
		<>
			{prescriptions.map((prescription) => (
				<Card
					key={prescription._id}
					sx={{
						display: "flex",
						m: "0.4rem",
						flexDirection: { xs: "column", md: "row" },
						borderRadius: 2,
						backgroundColor: "#eaeaea",
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={3}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{prescription.medicine}
								</Typography>
							</CardContent>
						</Grid>

						<Grid item xs={12} sm={3.5}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{prescription.dosage}
								</Typography>
							</CardContent>
						</Grid>

						<Grid item sm={2}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{prescription.date}
								</Typography>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			))}
		</>
	)
}
