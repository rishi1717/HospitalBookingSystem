import * as React from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
function AboutCard(props) {
	return (
		<Grid item xs={12} sm={6} sx={{ mt: "1rem" }}>
			<Card
				elevation={3}
				sx={{
					display: "flex",
					maxHeight: "18rem",
					minHeight: { xs: 0, sm: 150 },
				}}
			>
				<CardMedia
					component="img"
					sx={{
						margin: "0.4rem",
						maxWidth: { xs: 120, sm: 150 },
						maxHeight: { xs: 120, sm: 150 },
					}}
					image={props.image}
					alt="image"
				/>
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
							fontSize: {
								xs: "0.85rem",
								sm: "1rem",
								fontWeight: "bold",
							},
							fontFamily: "sans-serif",
							color: "#595959",
						}}
						component="p"
					>
						{props.head}
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "0.75rem", sm: "1rem", textAlign:'left' },
							fontFamily: "sans-serif",
							color: "#595959",
						}}
						component="p"
					>
						{props.text}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}
export default AboutCard
