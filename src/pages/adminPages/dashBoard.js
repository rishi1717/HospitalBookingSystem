import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Box, Grid, Typography } from "@mui/material"
import BarGraph from '../../components/adminModule/barGraph'
import PieChart from '../../components/adminModule/pieGraph'

const DashBoard = () => {
  return (
		<AdminLayout>
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
				Dashboard
			</Typography>
			<Grid sx={{mt:0}} container spacing={4}>
				<Grid item xs={11} sm={8}>
					<Box>
						<BarGraph />
					</Box>
				</Grid>
				<Grid item xs={10} sm={4}>
					<Box>
						<PieChart />
					</Box>
				</Grid>
			</Grid>
		</AdminLayout>
  )
}

export default DashBoard