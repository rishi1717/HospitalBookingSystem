import React from "react"
import CommonHome from "../components/userModule/CommonHome"
import UserHome from "../components/userModule/userHome"

const Landing = () => {
	return (
		<>
			{localStorage.userToken ? <UserHome /> : <CommonHome />}
		</>
	)
}

export default Landing
