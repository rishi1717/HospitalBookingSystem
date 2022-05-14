import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Button, Grid } from "@mui/material"

export default function PrescriptionList({ prescriptions, setData }) {
	return (
		<>
			{prescriptions.medicine.map((prescription, index) => (
				<Card
					key={index}
					sx={{
						display: "flex",
						m: "0.4rem",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 2,
						backgroundColor: "#eaeaea",
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={3.5}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{prescription}
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
									{prescriptions.dosage[index]}
								</Typography>
							</CardContent>
						</Grid>

						<Grid item xs={12} sm={3}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{prescriptions.prescribedFor[index]}
								</Typography>
							</CardContent>
						</Grid>

						<Grid
							item
							xs={12}
							sm={2}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Button
								sx={{ color: "red" }}
								onClick={() => {
									setData({
										medicine: prescriptions.medicine.filter(
											(_, i) => i !== index
										),
										dosage: prescriptions.dosage.filter(
											(_, i) => i !== index
										),
										prescribedFor: prescriptions.prescribedFor.filter(
											(_, i) => i !== index
										),
									})
								}}
							>
								X
							</Button>
						</Grid>
					</Grid>
				</Card>
			))}
		</>
	)
}
