import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
let prescriptions = ["one", "two", "three"]

export default function PrescriptionCard(props) {
	return (
		<>
			{prescriptions.map((e) => (
				<Card
				key={e}
					sx={{
						display: "flex",
						m: "0.4rem",
						flexDirection: { xs: "column", md: "row" },
						borderRadius: 2,
						backgroundColor: "#eaeaea",
					}}
				>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
						>
							Aspirin
						</Typography>
					</CardContent>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
						>
							Daily 1. Each morning one each.
						</Typography>
					</CardContent>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
						>
							16/04/2022
						</Typography>
					</CardContent>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
						>
							Dr.Adnan
						</Typography>
					</CardContent>
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
				</Card>
			))}
		</>
	)
}
