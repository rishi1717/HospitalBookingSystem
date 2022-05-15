import React from "react"
import { Route } from "react-router-dom"
const ViewDoctors = React.lazy(() => import("../pages/doctorPages/viewDoctors"))
const DoctorRegister = React.lazy(() =>
	import("../pages/doctorPages/doctorRegister")
)
const PatientHistory = React.lazy(() =>
	import("../pages/doctorPages/patientHistory")
)
const Prescribe = React.lazy(() => import("../pages/doctorPages/prescribe"))
const UserProfile = React.lazy(() => import("../pages/doctorPages/userProfile"))
const EditDoctor = React.lazy(() =>
	import("../pages/doctorPages/editDoctorDetails")
)
const DoctorAppointments = React.lazy(() =>
	import("../pages/doctorPages/doctorAppointments")
)
const DoctorLogin = React.lazy(() => import("../pages/doctorPages/doctorLogin"))
const DoctorHome = React.lazy(() => import("../pages/doctorPages/doctorHome"))
const NotFound = React.lazy(() => import("../pages/notFound"))
const DoctorProfile = React.lazy(() =>
	import("../pages/doctorPages/doctorProfile")
)
const DoctorPatients = React.lazy(() =>
	import("../pages/doctorPages/doctorPatients")
)
export default function doctorRoutes() {
	return (
		<>
			<Route
				path="/doctor/login"
				element={
					<React.Suspense>
						<DoctorLogin />
					</React.Suspense>
				}
			/>
			<Route
				path="/doctor/register"
				element={
					<React.Suspense>
						<DoctorRegister />
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
				path="/doctor/doctors"
				element={
					<React.Suspense>
						<ViewDoctors />
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
			<Route
				path="/doctor/Profile/edit"
				element={
					<React.Suspense>
						<EditDoctor />
					</React.Suspense>
				}
			/>
			<Route
				path="/doctor/patients/profile"
				element={
					<React.Suspense>
						<UserProfile />
					</React.Suspense>
				}
			/>
			<Route
				path="/doctor/patients/history"
				element={
					<React.Suspense>
						<PatientHistory />
					</React.Suspense>
				}
			/>
			<Route
				path="/doctor/patients/prescribe"
				element={
					<React.Suspense>
						<Prescribe />
					</React.Suspense>
				}
			/>
			<Route
				path="*"
				element={
					<React.Suspense>
						<NotFound />
					</React.Suspense>
				}
			/>
		</>
	)
}
