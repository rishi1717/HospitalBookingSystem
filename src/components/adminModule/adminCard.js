import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { SmallButton } from "../Buttons"

export default function AdminCard({admin}) {
	return (
		<Card
			sx={{
				display: "flex",
				m: "1rem",
				flexDirection: { xs: "column", md: "row" },
				borderRadius: 2,
				backgroundColor: "#eaeaea",
			}}
		>
			<CardMedia
				component="img"
				sx={{ width: 151 }}
				image={admin.image}
				alt="picture"
			/>
			<CardContent sx={{ flex: "1 0 auto" }}>
				<Typography component="div" variant="h5">
					{admin.name}
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="div"
				>
					{admin.department}
				</Typography>
				<Typography
					variant="subtitle1"
					color="text.secondary"
					component="div"
				>
					{admin.qualification}
				</Typography>
			</CardContent>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignContent: "center",
				}}
			>
				<div>
					<SmallButton
						value="Remove Admin Access"
						color="white"
						text="#B81C1C"
					/>
				</div>
			</CardContent>
		</Card>
	)
}
