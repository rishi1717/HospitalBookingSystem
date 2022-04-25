import React from "react"
import Navbar from "../components/Navbar"
import UserNavbar from "../components/userModule/UserNavbar"
import Footer from "../components/userModule/footer"

const FullLayout = ({ children }) => {
	return (
		<div
			style={{ minHeight: "98vh", display: "flex", flexDirection: "column" }}
		>
			<div style={{ position: "sticky", zIndex:2, top: 0 }}>
				{localStorage.userToken ? <UserNavbar /> : <Navbar />}
			</div>
			{children}
			<div style={{ marginTop:'auto' }}>
				<Footer />
			</div>
		</div>
	)
}

export default FullLayout
