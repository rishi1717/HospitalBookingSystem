import { Container, Typography } from "@mui/material"
import React, { useEffect } from "react"
import AdminLayout from "../../layouts/AdminLayout"
import { DataGrid } from "@mui/x-data-grid"
import axios from "../../axios"
import { useSelector } from "react-redux"

const Appointments = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	const columns = [
		{ field: "user", headerName: "Patient", flex:1 },
		{ field: "status", headerName: "Status", flex:1 },
		{ field: "date", headerName: "Date", flex:1 },
		{ field: "time", headerName: "Time", flex:1 },
		{ field: "fee", headerName: "Amount", flex:1 },
		{ field: "doctor", headerName: "Doctor", flex:1 },
	]
	const [data, setData] = React.useState([])

	useEffect(() => {
		(async function(){
			try{
				const response = await axios.get("/appointment",{
					headers:{
						"auth-token": adminState.token
					}
				})
				setData(response.data.appointment) 
			}catch(err){
				console.log(err.message)
			}	
		})()
	},[])

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
				<div style={{ display: "flex", height: "70vh", marginTop: "3rem" }}>
					<div style={{ flexGrow: 1 }}>
						<DataGrid
							getRowId={(row) => row._id}
							columns={columns}
							rows={data}
						/>
					</div>
				</div>
			</Container>
		</AdminLayout>
	)
}

export default Appointments
