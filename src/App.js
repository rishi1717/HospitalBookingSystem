import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserNavbar from "./components/userModule/UserNavbar"
import EditUser from "./pages/EditUser"
import ConfirmBooking from "./pages/ConfirmBooking"
import Navbar from "./components/Navbar"
import Footer from "./components/userModule/footer"
const Payment =  React.lazy(() => import("./pages/Payment"))
const Booking = React.lazy(() => import("./pages/booking"))
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
				<Routes>
					<Route
						path="/landing"
						element={
							<React.Suspense>
								<Navbar />
								<Landing />
							</React.Suspense>
						}
					/>
					<Route
						path="/register"
						element={
							<React.Suspense>
								<Navbar />
								<Register />
							</React.Suspense>
						}
					/>
					<Route
						path="/login"
						element={
							<React.Suspense>
								<Navbar />
								<UserLogin />
							</React.Suspense>
						}
					/>
					<Route
						path="/"
						element={
							<React.Suspense>
								<UserNavbar />
								<UserHome />
							</React.Suspense>
						}
					/>
					<Route
						path="/appointments"
						element={
							<React.Suspense>
								<UserNavbar />
								<UserAppointments />
							</React.Suspense>
						}
					/>
					<Route
						path="/doctors"
						element={
							<React.Suspense>
								<UserNavbar />
								<UserDoctorPage />
							</React.Suspense>
						}
					/>
					<Route
						path="/prescriptions"
						element={
							<React.Suspense>
								<UserNavbar />
								<UserPrescriptions />
							</React.Suspense>
						}
					/>
					<Route
						path="/about"
						element={
							<React.Suspense>
								<UserNavbar />
								<AboutUs />
							</React.Suspense>
						}
					/>
					<Route
						path="/profile"
						element={
							<React.Suspense>
								<UserNavbar />
								<UserProfile />
							</React.Suspense>
						}
					/>
					<Route
						path="/editprofile"
						element={
							<React.Suspense>
								<UserNavbar />
								<EditUser />
							</React.Suspense>
						}
					/>
					<Route
						path="/doctorprofile"
						element={
							<React.Suspense>
								<UserNavbar />
								<DoctorProfile />
							</React.Suspense>
						}
					/>
					<Route
						path="/booking"
						element={
							<React.Suspense>
								<UserNavbar />
								<Booking />
							</React.Suspense>
						}
					/>
					<Route
						path="/confirmbooking"
						element={
							<React.Suspense>
								<UserNavbar />
								<ConfirmBooking />
							</React.Suspense>
						}
					/>
					<Route
						path="/payment"
						element={
							<React.Suspense>
								<UserNavbar />
								<Payment />
							</React.Suspense>
						}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
