import { Container, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import AdminLayout from "../../layouts/AdminLayout"
import { DataGrid } from "@mui/x-data-grid"
import axios from "../../axios"
import { useSelector } from "react-redux"
import CancelRoundedIcon from "@mui/icons-material/CancelRounded"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded"
import Swal from "sweetalert2"
import { Navigate } from "react-router-dom"

const deleteIcon = (
	<DeleteRoundedIcon sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }} />
)
const cancelIcon = (
	<CancelRoundedIcon sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }} />
)
const completeIcon = (
	<AssignmentTurnedInRoundedIcon
		sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
	/>
)

const Appointments = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	if(adminState.token)
	{const [update, setUpdate] = useState(true)
	const columns = [
		{ field: "user", headerName: "Patient", minWidth: 100, flex: 1 },
		{ field: "status", headerName: "Status", minWidth: 100, flex: 1 },
		{ field: "date", headerName: "Date", minWidth: 100, flex: 1 },
		{ field: "time", headerName: "Time", minWidth: 100, flex: 1 },
		{ field: "fee", headerName: "Amount", minWidth: 100, flex: 1 },
		{ field: "doctor", headerName: "Doctor", minWidth: 100, flex: 1.8 },
		{
			field: "Complete",
			renderCell: (cellValues) => {
				if (cellValues.row.status === "Scheduled") {
					return (
						<div
							variant="contained"
							color="primary"
							onClick={async (event) => {
								try {
									const con = await Swal.fire({
										title: "Are you sure?",
										text: "Appointment will be marked as complete",
										background: "#eaeaea",
										color: "#595959",
										showCancelButton: true,
										cancelButtonColor: "#B81C1C",
										confirmButtonText: "Mark as complete",
										confirmButtonColor: "#609ACF",
									})
									if (con.isConfirmed) {
										await axios.put(
											`/appointment/status/${cellValues.row._id}`,
											{
												status: "Complete",
											},
											{
												headers: {
													"auth-token": adminState.token,
												},
											}
										)
										setUpdate(!update)
									}
								} catch (err) {
									console.log(err.message)
								}
							}}
							style={{
								cursor: "pointer",
							}}
						>
							{completeIcon}
						</div>
					)
				} else {
					return
				}
			},
			width: 80,
		},
		{
			field: "Cancel",
			renderCell: (cellValues) => {
				if (cellValues.row.status === "Scheduled") {
					return (
						<div
							variant="contained"
							color="primary"
							onClick={async (event) => {
								try {
									const con = await Swal.fire({
										title: "Are you sure?",
										text: "Appointment will be cancelled",
										background: "#eaeaea",
										color: "#595959",
										showCancelButton: true,
										cancelButtonColor: "#B81C1C",
										confirmButtonText: "Mark as Cancelled",
										confirmButtonColor: "#609ACF",
									})
									if (con.isConfirmed) {
										await axios.put(
											`/appointment/status/${cellValues.row._id}`,
											{
												status: "Canceled",
											},
											{
												headers: {
													"auth-token": adminState.token,
												},
											}
										)
										setUpdate(!update)
									}
								} catch (err) {
									console.log(err.message)
								}
							}}
							style={{
								cursor: "pointer",
							}}
						>
							{cancelIcon}
						</div>
					)
				} else {
					return
				}
			},
			width: 80,
		},
		{
			field: "Delete",
			renderCell: (cellValues) => {
				return (
					<div
						variant="contained"
						color="primary"
						onClick={async (event) => {
							try {
								const con = await Swal.fire({
									title: "Are you sure?",
									text: "Appointment details will be removed!",
									background: "#eaeaea",
									color: "#595959",
									showCancelButton: true,
									cancelButtonColor: "#B81C1C",
									confirmButtonText: "Remove Appointment",
									confirmButtonColor: "#609ACF",
								})
								if (con.isConfirmed) {
									await axios.delete(
										`/appointment/${cellValues.row._id}`,
										{
											headers: {
												"auth-token": adminState.token,
											},
										}
									)
									setUpdate(!update)
								}
							} catch (err) {
								console.log(err.message)
							}
						}}
						style={{
							cursor: "pointer",
						}}
					>
						{deleteIcon}
					</div>
				)
			},
			width: 80,
		},
	]
	const [data, setData] = React.useState([])

	useEffect(() => {
		;(async function() {
			try {
				const response = await axios.get("/appointment", {
					headers: {
						"auth-token": adminState.token,
					},
				})
				setData(response.data.appointment)
			} catch (err) {
				console.log(err.message)
			}
		})()
	}, [update])

	return (
		<AdminLayout>
			<Container>
				<Typography
					sx={{
						fontSize: {
							xs: "1.2rem",
							sm: "1.4rem",
						},
						fontFamily: "sans-serif",
						color: "#1976D2",
					}}
					component="p"
				>
					Appointments
				</Typography>
				<div
					style={{
						display: "flex",
						height: "75vh",
						width: "100%",
						marginTop: "3rem",
					}}
				>
					<div>
						<DataGrid
							sx={{ width: { xs: "78vw", sm: "70vw" } }}
							getRowId={(row) => row._id}
							columns={columns}
							rows={data}
						/>
					</div>
				</div>
			</Container>
		</AdminLayout>
	)}
	else {
		return <Navigate to="/admin/login" />
	}
}

export default Appointments
