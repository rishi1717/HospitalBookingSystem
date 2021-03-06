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
						flex: 2,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "0.8rem", sm: "1rem", color: "#595959" },
						}}
						component="p"
					>
						{props.smallText ? props.smallText : ""}
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "1rem", sm: "1.8rem", color: "#595959" },
						}}
						component="p"
					>
						{props.largeText ? props.largeText : ""}
					</Typography>
					<Typography
						sx={{
							fontSize: { xs: "1.1rem", sm: "2rem", fontFamily: "revert" },
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
					}}
					image={props.image}
					alt="image"
				/>
			</Card>
		</Grid>
	)
}
export default Banner
