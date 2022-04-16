import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserNavbar from "./components/userModule/UserNavbar"
import UserDoctorPage from "./pages/UserDoctorPage"
const UserAppointments = React.lazy(() => import("./pages/userAppointments"))
const UserHome = React.lazy(() => import("./pages/UserHome"))

function App() {
	return (
		<div>
			<BrowserRouter>
				<UserNavbar />
				<Routes>
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
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
