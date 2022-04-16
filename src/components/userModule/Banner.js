import * as React from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

function Banner(props) {
	return (
		<Grid item xs={12} sx={{ mt: "1rem" }}>
			<Card
				elevation={0}
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
							fontSize: { xs: "0.6rem", sm: "1rem" },
						}}
						component="p"
					>
						{props.smallText ? props.smallText : ""}
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "0.7rem", sm: "1.8rem" },
						}}
						component="p"
					>
						{props.largeText ? props.largeText : ""}
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "1rem", sm: "2rem" },
						}}
						component="p"
					>
						{props.phrase ? props.phrase : ""}
					</Typography>
				</CardContent>
				<CardMedia
					component="img"
					sx={{
						margin: "0.4rem",
						maxWidth: { xs: 200, sm: 600 },
						maxHeight: { xs: 300, sm: 300 },
						display: { xs: "block", sm: "block" },
					}}
					image={props.image}
					alt="image"
				/>
			</Card>
		</Grid>
	)
}
export default Banner
