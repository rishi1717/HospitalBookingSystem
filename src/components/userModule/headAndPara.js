import { Typography } from '@mui/material'
import React from 'react'

const HeadAndPara = (props) => {
  return (
		<>
			<Typography
				sx={{
					fontSize: { xs: "0.9rem", sm: "1.4rem" },
					fontFamily: "sans-serif",
					fontWeight: "bold",
					color: "#595959",
					mt: 10,
				}}
				component="p"
			>
				{props.head}
			</Typography>
			<Typography
				sx={{
					mx: { xs: 3, sm: 20 },
					fontSize: { xs: "0.8rem", sm: "1rem" },
					fontFamily: "sans-serif",
					mt: 2,
					mb: 2,
					color: "#595959",
				}}
				component="p"
			>
				{props.para}
			</Typography>
		</>
  )
}

export default HeadAndPara