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
						<Grid item xs={12} sm={2}>
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

						<Grid item xs={12} sm={4}>
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

						<Grid item sm={2.5}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									{prescription.doctor}
								</Typography>
							</CardContent>
						</Grid>

						<Grid item sm={1.5}>
							<CardContent sx={{ flex: "0.1 0 auto" }}>
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
											doc.text(
												"Date : " + prescription.date,
												20,
												50
											)
											doc.text(
												"Medicine : " + prescription.medicine,
												20,
												70
											)
											console.log(prescription);
											doc.text(
												"Prescribed for : " + prescription.prescribedFor,
												20,
												80
											)
											doc.text(
												"Dosage : " + prescription.dosage,
												20,
												90
											)
											doc.text(
												"Prescribed by : " + prescription.doctor,
												20,
												100
											)

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
