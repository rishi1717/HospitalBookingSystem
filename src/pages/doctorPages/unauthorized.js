import { Box, Button, Container, Paper } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import FullLayout from "../../layouts/FullLayout"

const Unauthorized = () => {
	const navigate = useNavigate()
	return (
		<FullLayout>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					alignContent: "center",
					justifyContent: "center",
					height: "60vh",
				}}
			>
				<Paper
					elevation={3}
					sx={{
						border: 1,
						borderColor: "#EF4242",
						display: "flex",
						flexDirection: "column",
						alignContent: "center",
						justifyContent: "center",
						m: { xs: 1, sm: 15 },
						p: { xs: 2, sm: 4 },
						backgroundColor: "#eaeaea",
					}}
				>
					<Box
						sx={{ p: 2, color: "#595959", fontSize: "1.6rem" }}
						textAlign="center"
					>
						You are not authorized to access this page !!!
					</Box>
					<Button
						onClick={() => {
							navigate("/doctor/login")
						}}
						sx={{ p: 2, fontWeight: "bold" }}
					>
						Login To access this page
					</Button>
				</Paper>
			</Container>
		</FullLayout>
	)
}

export default Unauthorized
