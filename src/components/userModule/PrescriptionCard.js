import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import axios from "axios"
import { Grid } from "@mui/material"

export default function PrescriptionCard(props) {
	const [prescriptions, setPrescriptions] = React.useState([])
	React.useEffect(() => {
		;(async function() {
			const userData = await axios.get("http://localhost:4000/users/1")
			setPrescriptions(userData.data.prescriptions)
		})()
	}, [])
	return (
		<>
			{prescriptions.map((prescription) => (
				<Card
					key={prescription.id}
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

						<Grid item sm={3}>
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

						<Grid item sm={1}>
							<CardContent sx={{ flex: "0.1 0 auto" }}>
								<Typography
									variant="subtitle1"
									color="text.secondary"
									component="div"
								>
									<a
										href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
										rel="noopener noreferrer"
										target="_blank"
										download="PDF"
									>
										<FileDownloadOutlinedIcon />
									</a>
								</Typography>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			))}
		</>
	)
}
