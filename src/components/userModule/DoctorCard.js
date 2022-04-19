import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { SmallButton } from "../Buttons"
import { Link } from "react-router-dom"

export default function DoctorCard(props) {

	return (
		<Card sx={{ display: "flex", m:'1rem', flexDirection:{xs:'column', md:'row'}, borderRadius:2 }}>
			<CardMedia
				component="img"
				sx={{ width: 151 }}
				image={props.image}
				alt="Live from space album cover"
			/>
			<CardContent sx={{ flex: "1 0 auto" }}>
				<Typography component="div" variant="h5">
					Rishi
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="div"
				>
					Consultant-general medicine
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="div"
				>
					MBBS,MD
				</Typography>
			</CardContent>
			<CardContent sx={{ flex: "1 0 auto" }}>
				<Typography component="div" variant="h5">
					OP Time
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="div"
				>
					Mon-Sun
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="div"
				>
					10 : 00 AM to 5 : 00 PM
				</Typography>
			</CardContent>
			<CardContent sx={{display:'flex', flexDirection:'column'}}>
				<Link to='/doctorprofile' style={{textDecoration:'none'}}><SmallButton value="Profile"/></Link>
				<Link to='/doctorprofile' style={{textDecoration:'none'}}><SmallButton value="Appoint"/></Link>
			</CardContent>
			
		</Card>
	)
}
