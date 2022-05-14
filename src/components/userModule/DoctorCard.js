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
				sx={{ width: 151,height:151 }}
				image={props.doctor.image}
				alt={"picture"}
			/>
			<CardContent sx={{ flex: "1 0 " }}>
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
			<CardContent sx={{ flex: "1 0 " }}>
				<Typography component="div" variant="h5">
					OP Time
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="div"
				>
					{props.doctor.days.map((day,i) => {
						const weekDays = [
							"sun",
							"mon",
							"tue",
							"wed",
							"thu",
							"fri",
							"sat",
						]
						if(i+1 ===props.doctor.days.length){
							return (weekDays[day] + '.')
						}
						return (weekDays[day] + ", ")
					})}	
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="div"
				>
					{props.doctor.startTime} to {props.doctor.endTime}
				</Typography>
			</CardContent>
			<CardContent sx={{ display: "flex", flexDirection: {xs:'row',sm:"row",md:'column'} }}>
				<Link
					to="/doctorprofile"
					state={{ doctor: props.doctor }}
					style={{ textDecoration: "none" }}
				>
					<SmallButton value="Profile" />
				</Link>
				<Link
					to="/booking"
					state={{ doctor: props.doctor }}
					style={{ textDecoration: "none" }}
				>
					<SmallButton value="Appoint" />
				</Link>
			</CardContent>
		</Card>
	)
}
