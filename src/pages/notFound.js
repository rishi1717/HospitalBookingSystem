import { Box, Button, Container } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import notFound from "../static/images/404.jpg"

const NotFound = () => {
	const navigate = useNavigate()
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignContent: "center",
				justifyContent: "center",
				height:'90vh'
			}}
		>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					alignContent: "center",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{ p: 2, color: "#595959", fontSize: "1.6rem" }}
					textAlign="center"
				>
					404, Page Not Found!
				</Box>
				<Container
					sx={{
						display: "flex",
						flexDirection: "row",
						alignContent: "center",
						justifyContent: "center",
					}}
				>
					<Box
						component="img"
						sx={{
							width: "50vw",
						}}
						alt="Hospital"
						src={notFound}
					/>
				</Container>
				<Button
					onClick={() => {
						navigate("/")
					}}
					sx={{ p: 2, fontWeight: "bold" }}
				>
					Back to home
				</Button>
			</Container>
		</Container>
	)
}

export default NotFound
