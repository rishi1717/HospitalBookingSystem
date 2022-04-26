import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const EditUser = React.lazy(()=>import("./pages/userPages/EditUser"))
const ConfirmBooking = React.lazy(()=>import("./pages/userPages/ConfirmBooking"))
const Payment =  React.lazy(() => import("./pages/userPages/Payment"))
const Booking = React.lazy(() => import("./pages/userPages/booking"))
const DoctorProfile =  React.lazy(() => import("./pages/userPages/DoctorProfile"))
const Register = React.lazy(() => import("./pages/userPages/Register"))
const AboutUs = React.lazy(() => import("./pages/userPages/AboutUs"))
const UserAppointments = React.lazy(() => import("./pages/userPages/userAppointments"))
const UserDoctorPage = React.lazy(() => import("./pages/userPages/UserDoctorPage"))
const UserPrescriptions = React.lazy(() => import("./pages/userPages/UserPrescriptions"))
const UserLogin = React.lazy(() => import("./pages/userPages/UserLogin"))
const UserProfile = React.lazy(() => import("./pages/userPages/UserProfile"))
const Landing = React.lazy(()=> import('./pages/userPages/Landing'))

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
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
					<Route
						path="/booking"
						element={
							<React.Suspense>
								<Booking />
							</React.Suspense>
						}
					/>
					<Route
						path="/confirmbooking"
						element={
							<React.Suspense>
								<ConfirmBooking />
							</React.Suspense>
						}
					/>
					<Route
						path="/payment"
						element={
							<React.Suspense>
								<Payment />
							</React.Suspense>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
