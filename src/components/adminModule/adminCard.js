import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { SmallButton } from "../Buttons"
import Swal from "sweetalert2"
import axios from "../../axios"
import { useSelector } from "react-redux"

export default function AdminCard({ admin, state, setState }) {
	const adminState = useSelector((storeState) => storeState.admin)
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
				sx={{ width: 151,height:151 }}
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
				<div
					onClick={async () => {
						const con = await Swal.fire({
							title: "Are you sure?",
							text: "Remove admin access?",
							background: "#eaeaea",
							color: "#595959",
							showCancelButton: true,
							cancelButtonColor: "#609ACF",
							confirmButtonText: "Remove",
							confirmButtonColor: "#B81C1C",
						})
						if (con.isConfirmed) {
							await axios.put(
								`/doctor/${admin._id}`,
								{ ...admin, admin: false },
								{
									headers: {
										"auth-token": adminState.token,
									},
								}
							)
							setState(!state)
						}
					}}
				>
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
