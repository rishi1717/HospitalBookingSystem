import * as React from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { SmallButton } from "../Buttons"

function HomeCard(props) {
	return (
		<Grid item xs={12} sm={6} sx={{ mt: "1rem" }}>
			<Card
				elevation={1}
				sx={{
					display: "flex",
					maxHeight: "18rem",
					minHeight: { xs: 0, sm: 200 },
				}}
			>
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
							marginLeft: "1rem",
							display: { xs: "block", sm: "block" },
							fontSize: { xs: "0.8rem", sm: "1rem" },
							fontFamily: "sans-serif",
						}}
						component="p"
					>
						{props.smallPhrase ? props.smallPhrase : ""}
					</Typography>
					<SmallButton value={props.phrase} />
				</CardContent>
				<CardMedia
					component="img"
					sx={{
						margin: "0.4rem",
						maxWidth: { xs: 180, sm: "auto" },
						maxHeight: { xs: 150, sm: "auto" },
						display: { xs: "block", sm: "block" },
					}}
					image={props.image}
					alt="image"
				/>
			</Card>
		</Grid>
	)
}
export default HomeCard
