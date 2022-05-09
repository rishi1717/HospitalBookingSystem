import axios from '../../axios'
import React, { useEffect } from 'react'
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material"
import { SmallButton } from '../Buttons'
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
const deleteIcon = <DeleteRoundedIcon sx={{ fontSize: "1rem" }} />

const UserAppointments = ({userId,token}) => {
  const [appointments, setAppointments] = React.useState([])
  useEffect(() => {
		;(async function() {
			const detail = await axios.get(`/appointment/${userId}`, {
				headers: {
					"auth-token": token,
				},
			})
			setAppointments(detail.data.appointment)
		})()
  }, [])
  return (
		<div>
			<TableContainer component={Paper} sx={{ maxWidth: "88vw" }}>
				<Table sx={{ minWidth: { sm: 650 } }} aria-label="simple table">
					<TableHead>
						<TableRow sx={{ backgroundColor: "#1976D2" }}>
							<TableCell align="center" sx={{ color: "white" }}>
								Doctor
							</TableCell>
							<TableCell align="center" sx={{ color: "white" }}>
								Date
							</TableCell>
							<TableCell align="center" sx={{ color: "white" }}>
								Time
							</TableCell>
							<TableCell align="center" sx={{ color: "white" }}>
								Status
							</TableCell>
							<TableCell align="center" sx={{ color: "white" }}>
								Fee
							</TableCell>
							<TableCell align="center" sx={{ color: "white" }}>
								Options
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{appointments.map((row, index) => (
							<TableRow
								key={index}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 },
								}}
							>
								<TableCell align="center" component="th" scope="row">
									{row.doctor}
								</TableCell>
								<TableCell align="center">{row.date}</TableCell>
								<TableCell align="center">{row.time}</TableCell>
								<TableCell align="center">{row.status}</TableCell>
								<TableCell align="center">{row.fee}</TableCell>
								<TableCell
									sx={{
										display: { sm: "flex" },
										justifyContent: "center",
									}}
								>
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

export default UserAppointments
