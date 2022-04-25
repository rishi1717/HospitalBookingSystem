import { Box, TextField } from '@mui/material'
import React from 'react'

const Search = () => {
  return (
		<Box
			display="flex"
			justifyContent="center"
			component="form"
			autoComplete="off"
			onChange={()=>{console.log('123')}}
			noValidate
			sx={{ mt: 1, mb: 2 }}
		>
			<TextField
				margin="normal"
				fullWidth
				id="search"
				label="Search"
				name="search"
				autoFocus
				variant="standard"
				sx={{ width: "90%" }}
			/>
		</Box>
  )
}

export default Search