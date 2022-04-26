import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Image from "../../static/images/doctorPortrait.webp"
import moment from "moment"
import { Container, Grid } from "@mui/material"

const date = moment().format("MMMM Do YYYY")
const day = moment().format("dddd")

export default function WelcomeCard(props) {
	return (
		<Container>
			<Card
				sx={{
					m: "1rem",
					flexDirection: { xs: "column", md: "row" },
					borderRadius: 2,
                    backgroundColor:'#eaeaea'
				}}
			>
				<Grid container spacing={2} sx={{ color: "#595959", width:'77vw' }}>
					<Grid item xs={12} sm={3}>
						<CardContent>
							<Typography
								component="div"
								sx={{
									fontSize: { xs: "1rem", sm: "1.4rem" },
								}}
							>
								{day}
							</Typography>
							<Typography
								component="div"
								sx={{
									fontSize: { xs: "1rem", sm: "1.4rem" },
								}}
							>
								{date}
							</Typography>
						</CardContent>
					</Grid>
					<Grid item xs={12} sm={7}>
						<CardContent>
							<Typography
								component="div"
								sx={{
									fontSize: { xs: "1rem", sm: "1.2rem" },
								}}
							>
								Welcome{" "}
								<span style={{ fontSize: "1.5rem" }}>Dr.Santhosh</span>{" "}
								, Have a great day
							</Typography>
						</CardContent>
					</Grid>
					<Grid item xs={6} sm={2}>
						<CardMedia
							component="img"
							sx={{ width: 120,borderRadius:'100%',m:1 }}
							image={Image}
							alt="picture"
						/>
					</Grid>
				</Grid>
			</Card>
		</Container>
	)
}
