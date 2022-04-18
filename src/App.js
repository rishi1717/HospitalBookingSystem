import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserNavbar from "./components/userModule/UserNavbar"
const AboutUs = React.lazy(() => import("./pages/AboutUs"))
const Landing = React.lazy(() => import("./pages/Landing"))
const UserAppointments = React.lazy(() => import("./pages/userAppointments"))
const UserHome = React.lazy(() => import("./pages/UserHome"))
const UserDoctorPage = React.lazy(() => import("./pages/UserDoctorPage"))
const UserPrescriptions = React.lazy(() => import("./pages/UserPrescriptions"))
const UserLogin = React.lazy(() => import("./pages/UserLogin"))
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
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
