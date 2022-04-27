import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const DoctorAppointments =  React.lazy(() => import("../pages/doctorPages/doctorAppointments"))
const DoctorSchedule =  React.lazy(() => import("../pages/doctorPages/doctorSchedule"))
const DoctorLogin = React.lazy(() => import("../pages/doctorPages/doctorLogin"))
const DoctorHome = React.lazy(() => import("../pages/doctorPages/doctorHome"))
const DoctorProfile = React.lazy(() =>
	import("../pages/doctorPages/doctorProfile")
)
const DoctorPatients = React.lazy(() =>
	import("../pages/doctorPages/doctorPatients")
)
function DoctorRoutes() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/doctor/login"
						element={
							<React.Suspense>
								<DoctorLogin />
							</React.Suspense>
						}
					/>
					<Route
						path="/doctor"
						element={
							<React.Suspense>
								<DoctorHome />
							</React.Suspense>
						}
					/>
					<Route
						path="/doctor/profile"
						element={
							<React.Suspense>
								<DoctorProfile />
							</React.Suspense>
						}
					/>
					<Route
						path="/doctor/patients"
						element={
							<React.Suspense>
								<DoctorPatients />
							</React.Suspense>
						}
					/>
					<Route
						path="/doctor/schedule"
						element={
							<React.Suspense>
								<DoctorSchedule />
							</React.Suspense>
						}
					/>
					<Route
						path="/doctor/appointments"
						element={
							<React.Suspense>
								<DoctorAppointments />
							</React.Suspense>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default DoctorRoutes
