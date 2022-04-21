import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { SmallButton } from "../Buttons"
import { Link } from "react-router-dom"

export default function DoctorCard(props) {
	return (
		<Card
			sx={{
				display: "flex",
				m: "1rem",
				flexDirection: { xs: "column", md: "row" },
				borderRadius: 2,
			}}
		>
			<CardMedia
				component="img"
				sx={{ width: 151 }}
				image={props.image}
				alt="Live from space album cover"
			/>
			<CardContent sx={{ flex: "1 0 auto" }}>
				<Typography component="div" variant="h5">
					{props.doctor.name}
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="div"
				>
					{props.doctor.department}
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="div"
				>
					{props.doctor.qualification}
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
					{props.doctor.days}
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="div"
				>
					{props.doctor.optime}
				</Typography>
			</CardContent>
			<CardContent sx={{ display: "flex", flexDirection: "column" }}>
				<Link
					to="/doctorprofile"
					state={{ doctor: props.doctor }}
					style={{ textDecoration: "none" }}
				>
					<SmallButton value="Profile" />
				</Link>
				<Link to="/booking" style={{ textDecoration: "none" }}>
					<SmallButton value="Appoint" />
				</Link>
			</CardContent>
		</Card>
	)
}
