import * as React from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

function Banner(props) {
	return (
		<Grid item xs={12} sx={{ mt: "1rem" }}>
			<CardActionArea component="a" href="#">
				<Card
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
								display: { xs: "block", sm: "block" },
								fontSize: { xs: "0.6rem", sm: "0.6rem" },
							}}
							component="p"
						>
							{props.smallText ? props.smallText : ""}
						</Typography>
						<Typography
							sx={{
								display: { xs: "block", sm: "block" },
								fontSize: { xs: "0.7rem", sm: "1rem" },
							}}
							component="p"
						>
							{props.largeText ? props.largeText : ""}
						</Typography>
						<Typography
							sx={{
								align: "center",
								display: { xs: "block", sm: "block" },
								fontSize: { xs: "1rem", sm: "1.2rem" },
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
							maxWidth: { xs: 200, sm: 400 },
							maxHeight: { xs: 300, sm: 300 },
							display: { xs: "block", sm: "block" },
						}}
						image={props.image}
						alt="image"
					/>
				</Card>
			</CardActionArea>
		</Grid>
	)
}
export default Banner
