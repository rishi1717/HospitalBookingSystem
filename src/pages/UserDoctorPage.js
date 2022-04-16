import { Container } from "@mui/material"
import React from "react"
import Search from "../components/Search"
import Departments from "../components/userModule/Department"
function UserDoctorPage() {
	return (
		<Container>
			<Search />
				<Departments />
		</Container>
	)
}

export default UserDoctorPage
