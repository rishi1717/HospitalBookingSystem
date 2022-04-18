import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserNavbar from "./components/userModule/UserNavbar"
import AboutUs from "./pages/AboutUs"
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
