import axios from "../../axios"
import React, { useEffect } from "react"
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material"
import { SmallButton } from "../Buttons"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
const deleteIcon = <DeleteRoundedIcon sx={{ fontSize: "1rem" }} />
const editIcon = <EditRoundedIcon sx={{ fontSize: "1rem" }} />

const UserPrescriptions = ({ userId, token }) => {
	const [prescriptions, setPrescriptions] = React.useState([])
	useEffect(() => {
		;(async function() {
			const detail = await axios.get(`/prescription/${userId}`, {
				headers: {
					"auth-token": token,
				},
			})
			setPrescriptions(detail.data.prescription)
		})()
	}, [])
	return (
		<div>
			<TableContainer component={Paper} sx={{ maxWidth: "88vw" }}>
				<Table sx={{ minWidth: { sm: 650 } }} aria-label="simple table">
					<TableHead>
						<TableRow sx={{ backgroundColor: "#1976D2" }}>
							<TableCell align="center" sx={{ color: "white" }}>
								Medicine
							</TableCell>
							<TableCell align="center" sx={{ color: "white" }}>
								Date
							</TableCell>
							<TableCell align="center" sx={{ color: "white" }}>
								Prescribed by
							</TableCell>
							<TableCell align="center" sx={{ color: "white" }}>
								Options
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{prescriptions.map((row, index) => (
							<TableRow
								key={index}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 },
								}}
							>
								<TableCell align="center" component="th" scope="row">
									{row.medicine}
								</TableCell>
								<TableCell align="center">{row.date}</TableCell>
								<TableCell align="center">{row.doctor}</TableCell>
								<TableCell
									sx={{ display: { sm: "flex" }, justifyContent: "center" }}
								>
									<div>
										<SmallButton
											value={editIcon}
											color="white"
											text="#FEB139"
										/>
									</div>
									<div>
										<SmallButton
											value={deleteIcon}
											color="white"
											text="#B81C1C"
										/>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default UserPrescriptions
