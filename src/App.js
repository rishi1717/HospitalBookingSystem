import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserNavbar from "./components/userModule/UserNavbar"
import EditUser from "./pages/EditUser"
const DoctorProfile =  React.lazy(() => import("./pages/DoctorProfile"))
const Register = React.lazy(() => import("./pages/Register"))
const AboutUs = React.lazy(() => import("./pages/AboutUs"))
const Landing = React.lazy(() => import("./pages/Landing"))
const UserAppointments = React.lazy(() => import("./pages/userAppointments"))
const UserHome = React.lazy(() => import("./pages/UserHome"))
const UserDoctorPage = React.lazy(() => import("./pages/UserDoctorPage"))
const UserPrescriptions = React.lazy(() => import("./pages/UserPrescriptions"))
const UserLogin = React.lazy(() => import("./pages/UserLogin"))
const UserProfile = React.lazy(() => import("./pages/UserProfile"))
function App() {
	return (
		<div>
			<BrowserRouter>
				<UserNavbar />
				<Routes>
					<Route
						path="/landing"
						element={
							<React.Suspense>
								<Landing />
							</React.Suspense>
						}
					/>
					<Route
						path="/register"
						element={
							<React.Suspense>
								<Register />
							</React.Suspense>
						}
					/>
					<Route
						path="/login"
						element={
							<React.Suspense>
								<UserLogin />
							</React.Suspense>
						}
					/>
					<Route
						path="/"
						element={
							<React.Suspense>
								<UserHome />
							</React.Suspense>
						}
					/>
					<Route
						path="/appointments"
						element={
							<React.Suspense>
								<UserAppointments />
							</React.Suspense>
						}
					/>
					<Route
						path="/doctors"
						element={
							<React.Suspense>
								<UserDoctorPage />
							</React.Suspense>
						}
					/>
					<Route
						path="/prescriptions"
						element={
							<React.Suspense>
								<UserPrescriptions />
							</React.Suspense>
						}
					/>
					<Route
						path="/about"
						element={
							<React.Suspense>
								<AboutUs />
							</React.Suspense>
						}
					/>
					<Route
						path="/profile"
						element={
							<React.Suspense>
								<UserProfile />
							</React.Suspense>
						}
					/>
					<Route
						path="/editprofile"
						element={
							<React.Suspense>
								<EditUser />
							</React.Suspense>
						}
					/>
					<Route
						path="/doctorprofile"
						element={
							<React.Suspense>
								<DoctorProfile />
							</React.Suspense>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
