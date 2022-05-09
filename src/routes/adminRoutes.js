import React from "react"
import { Route } from "react-router-dom"
import Appointments from "../pages/adminPages/appointments"
import DashBoard from "../pages/adminPages/dashBoard"
import Departments from "../pages/adminPages/departments"
import Login from "../pages/adminPages/login"
import Patients from "../pages/adminPages/patients"
import Profile from "../pages/adminPages/profile"
import Doctors from "../pages/adminPages/doctors"
import UserProfile from "../pages/adminPages/userProfile"

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
			<Route
				path="/admin"
				element={
					<React.Suspense>
						<DashBoard />
					</React.Suspense>
				}
			/>
			<Route
				path="/admin/patients"
				element={
					<React.Suspense>
						<Patients />
					</React.Suspense>
				}
			/>
			<Route
				path="/admin/doctors"
				element={
					<React.Suspense>
						<Doctors />
					</React.Suspense>
				}
			/>
			<Route
				path="/admin/appointments"
				element={
					<React.Suspense>
						<Appointments />
					</React.Suspense>
				}
			/>
			<Route
				path="/admin/departments"
				element={
					<React.Suspense>
						<Departments />
					</React.Suspense>
				}
			/>
			<Route
				path="/admin/profile"
				element={
					<React.Suspense>
						<Profile />
					</React.Suspense>
				}
			/>
			<Route
				path="/admin/patients/profile"
				element={
					<React.Suspense>
						<UserProfile />
					</React.Suspense>
				}
			/>
		</>
	)
}

export default adminRoutes
