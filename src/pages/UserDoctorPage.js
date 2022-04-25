import { Container } from "@mui/material"
import React from "react"
import Search from "../components/Search"
import Departments from "../components/userModule/Department"
import FullLayout from "../layouts/FullLayout"
function UserDoctorPage() {
	return (
		<FullLayout>
			<Container>
				<Search />
				<Departments />
			</Container>
		</FullLayout>
	)
}

export default UserDoctorPage
