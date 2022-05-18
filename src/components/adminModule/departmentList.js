import React from "react"
import Typography from "@mui/material/Typography"
import DoctorCard from "./doctorCard"
import axios from "../../axios.js"
import { useSelector } from "react-redux"
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	TextField,
} from "@mui/material"
import { SmallButton } from "../Buttons"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

const deleteIcon = (
	<DeleteRoundedIcon sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }} />
)
const editIcon = (
	<EditRoundedIcon sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }} />
)

export default function DepartmentList({
	departments,
	doctors,
	state,
	setState,
}) {
	const adminState = useSelector((storeState) => storeState.admin)
	const [depName, setDepName] = React.useState("")
	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(depName)
		await axios.post(
			`/department`,
			{ name: depName },
			{
				headers: {
					"auth-token": adminState.token,
				},
			}
		)
		setState(!state)
	}
	const handleChange = (e) => {
		setDepName(e.target.value)
	}
	return (
		<div>
			{departments.map((department) => (
				<Accordion
					key={department._id}
					sx={{
						m: "1rem",
						borderRadius: 2,
						"&:before": {
							display: "none",
						},
						backgroundColor: "#eaeaea",
					}}
				>
					<AccordionSummary>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								alignContent: "center",
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignContent: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: { xs: "1rem", sm: "1.4rem" },
										color: "#595959",
									}}
								>
									{department.name}
								</Typography>
							</div>
							<Box
								sx={{
									display: "flex",
								}}
							>
								<div
									onClick={(e) => {
										e.stopPropagation()
									}}
								>
									<SmallButton
										value={editIcon}
										color="white"
										text="#FEB139"
									/>
								</div>
								<div
									onClick={async (e) => {
										e.stopPropagation()
										try {
											const con = await Swal.fire({
												title: "Are you sure?",
												text: "Department will be deleted!",
												background: "#eaeaea",
												color: "#595959",
												showCancelButton: true,
												cancelButtonColor: "#609ACF",
												confirmButtonText: "Delete",
												confirmButtonColor: "#B81C1C",
											})
											if (con.isConfirmed) {
												await axios.delete(
													`/department/${department._id}`,
													{
														headers: {
															"auth-token": adminState.token,
														},
													}
												)
												setState(!state)
												Toast.fire({
													position: "bottom-right",
													icon: "success",
													title: "Deleted",
													showConfirmButton: false,
													timer: 3000,
												})
											}
										} catch (err) {
											console.log(err)
										}
									}}
								>
									<SmallButton
										value={deleteIcon}
										color="white"
										text="#B81C1C"
									/>
								</div>
							</Box>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						{doctors.map((doctor) => (
							<div key={doctor._id}>
								{department.doctors.includes(doctor._id) ? (
									<DoctorCard
										key={doctor.id}
										doctor={doctor}
									/>
								) : (
									""
								)}
							</div>
						))}
					</AccordionDetails>
				</Accordion>
			))}
			<Accordion
				sx={{
					m: "1rem",
					borderRadius: 2,
					"&:before": {
						display: "none",
					},
					backgroundColor: "#eaeaea",
				}}
			>
				<AccordionSummary
					sx={{
						display: "flex",
						justifyContent: "center",
						alignContent: "center",
					}}
				>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
							alignContent: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignContent: "center",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "1rem", sm: "1rem" },
									color: "#595959",
									textAlign: "center",
								}}
							>
								Add Department
							</Typography>
						</div>
						<div>
							<SmallButton value="+" color="#eaeaea" text="#595959" />
						</div>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<Box
						component="form"
						sx={{ display: "flex" }}
						noValidate
						onSubmit={handleSubmit}
					>
						<Box
							sx={{
								backgroundColor: "white",
								width: "50vw",
							}}
						>
							<TextField
								name="name"
								required
								fullWidth
								id="name"
								label="Department Name"
								autoFocus
								onChange={handleChange}
								value={depName}
							/>
						</Box>
						<Box
							fullWidth
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<Button type="submit">Add</Button>
						</Box>
					</Box>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
