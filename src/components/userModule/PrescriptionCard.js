import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import { Grid } from "@mui/material"
import jsPdf from "jspdf"

export default function PrescriptionCard({ prescriptions, user }) {
	const doc = new jsPdf()
	doc.setTextColor("#609acf")
	doc.setLineWidth(0.2)
	doc.rect(10, 8, 190, 280)
	doc.setFontSize(22)
	doc.text("One Health Hospital", 72, 20)

	return (
		<>
			{prescriptions.map((prescription, index) => (
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
						<Grid item xs={12} sm={1}>
							<CardContent
								sx={{
									flex: "1 0 auto",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									{index + 1}
								</Typography>
							</CardContent>
						</Grid>

						<Grid item xs={12} sm={3}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								{prescription.medicine.map((medicine, i) => (
									<Typography
										key={i}
										variant="subtitle1"
										color="text.secondary"
										component="div"
									>
										{i + 1}. {medicine}
									</Typography>
								))}
							</CardContent>
						</Grid>

						<Grid item xs={12} sm={3}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								{prescription.dosage.map((dosage, i) => (
									<Typography
										key={i}
										variant="subtitle1"
										color="text.secondary"
										component="div"
									>
										{dosage}
									</Typography>
								))}
							</CardContent>
						</Grid>

						<Grid item sm={2}>
							<CardContent sx={{ flex: "1 0" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{prescription.date}
								</Typography>
							</CardContent>
						</Grid>

						<Grid item sm={2}>
							<CardContent sx={{ flex: "1 0" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{prescription.doctor}
								</Typography>
							</CardContent>
						</Grid>

						<Grid item sm={1}>
							<CardContent sx={{ flex: "0.1 0" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
									textAlign="center"
								>
									<Button
										onClick={() => {
											doc.setTextColor("#595959")
											doc.setFontSize(16)
											doc.text(
												"Prescription for : " +
													user.firstName +
													" " +
													user.secondName,
												20,
												40
											)
											doc.text("Age : " + user.age, 150, 40)
											doc.text("Date : " + prescription.date, 20, 50)
											

											doc.text(
												"Prescribed by : Dr. " + prescription.doctor,
												20,
												60
											)

											prescription.medicine.forEach((medicine, i) => {
												doc.text(""+(i+1)+") ", 20, 80 + i * 40)
												doc.text(
													"Medicine : " + medicine,
													27,
													80+i*40
												)
												doc.text(
													"Prescribed for : " +
														prescription.prescribedFor[i],
													27,
													90+i*40
												)
												doc.text(
													"Dosage : " + prescription.dosage[i],
													27,
													100+i*40
												)
											})

											doc.save(prescription.medicine + ".pdf")
										}}
									>
										<FileDownloadOutlinedIcon />
									</Button>
								</Typography>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			))}
		</>
	)
}
