import React from "react"
import Navbar from "../components/Navbar"
import UserNavbar from "../components/userModule/UserNavbar"
import Footer from "../components/userModule/footer"

const FullLayout = ({ children }) => {
	return (
		<>
			{localStorage.userToken ? <UserNavbar /> : <Navbar />}
			{children}
			<Footer />
		</>
	)
}

export default FullLayout
