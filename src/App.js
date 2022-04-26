import React from "react"
import "./App.css"
import DoctorRoutes from "./routes/doctorRoutes"
import UserRoutes from "./routes/userRoutes"

function App() {
	return (
		<>
			<UserRoutes />
			<DoctorRoutes />
		</>
	)
}

export default App
