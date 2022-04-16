import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import { Grid, Typography } from "@mui/material"

const Footer = () => {
	return (
		<AppBar position="static" sx={{ borderRadius: "0.6rem", mt: "1rem" }}>
			<Container maxWidth="xl">
				<Grid container spacing={2}>
					<Grid
						item
						xs={11}
						sm={2}
						sx={{ m: { xs: 0.2, sm: 2 }, mt: { xs: 1.8, sm: 2 } }}
					>
						<Typography sx={{ fontSize: "0.6rem" }}>
							One Health Hospital
							<br /> Kakanad,
							<br /> Cochin,
							<br /> 682021.
						</Typography>
					</Grid>
					<Grid
						item
						xs={11}
						sm={6}
						sx={{ m: "auto", textAlign: "center" }}
						order={{ xs: 3, sm: 2 }}
					>
						<Typography align="center" sx={{ fontSize: "0.55rem" }}>
							Copyright © 2022 OneHealth. All rights reserved
						</Typography>
					</Grid>
					<Grid
						item
						xs={11}
						sm={2}
						sx={{ m: { xs: 0.2, sm: 2 } }}
						order={{ xs: 2, sm: 3 }}
					>
						<Typography sx={{ fontSize: "0.6rem" }}>
							<b>Phone :</b> 0497-2422359
							<br /> <b>Mobile :</b> 7990000122, 7990000242
							<br />
							<b> Mail : </b>onehealth@mail.com
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</AppBar>
	)
}
export default Footer
