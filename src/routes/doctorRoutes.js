import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DoctorLogin from "../pages/doctorPages/doctorLogin"
import DoctorHome from "../pages/doctorPages/doctorHome"
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
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default DoctorRoutes
