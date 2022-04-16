import * as React from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { Grid, Typography } from "@mui/material"
import { SmallButton } from "../Buttons"
let array=[1,2]
export default function AppointmentCard() {
	return (
		<>
			{array.map((e) => (
				<Grid key={e} item xs={12} sm={6}>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							"& > :not(style)": {
								m: 1,
								minHeight: { xs: 0, sm: 150 },
								width: "100%",
							},
						}}
					>
						<Paper
							elevation={8}
							sx={{ backgroundColor: "#eaeaea", p: { xs: 1, sm: 2 } }}
						>
							<Typography
								sx={{
									fontSize: { xs: "0.8rem", sm: "1rem" },
								}}
								component="p"
							>
								Appointment with Dr.Santhosh
							</Typography>
							<Typography
								sx={{
									fontSize: {
										xs: "1rem",
										sm: "1.4rem",
										color: "#595959",
										fontWeight: "bold",
									},
								}}
								component="p"
							>
								16/04/2022
							</Typography>
							<Typography
								sx={{
									fontSize: {
										xs: "1.3rem",
										sm: "1.8rem",
										color: "#595959",
										fontWeight: "bold",
									},
								}}
								component="p"
							>
								5:15 PM
							</Typography>
							<Grid
								container
								rowSpacing={1}
								columnSpacing={{ xs: 1,}}
							>
								<Grid item xs={3.5}sx={{ ml: "auto" }}>
									<SmallButton color="#FEB139" value="Reschedule" />
								</Grid>
								<Grid
									item
									xs={3}
									sm={3}
									sx={{ mr: { xs: "2rem", sm: "0.5rem" } }}
								>
									<SmallButton color="#CC3E34" value="Cancel" />
								</Grid>
							</Grid>
						</Paper>
					</Box>
				</Grid>
			))}
		</>
	)
}
