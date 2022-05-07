import React from "react"
import { Route } from "react-router-dom"
import Login from "../pages/adminPages/login"

const adminRoutes = () => {
	return (
		<>
			<Route
				path="/admin/login"
				element={
					<React.Suspense>
						<Login />
					</React.Suspense>
				}
			/>
		</>
	)
}

export default adminRoutes
