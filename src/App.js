import React from "react"
import { BrowserRouter, Routes } from "react-router-dom"
import "./App.css"
import adminRoutes from "./routes/adminRoutes"
import doctorRoutes from "./routes/doctorRoutes.js"
import userRoutes from "./routes/userRoutes.js"

function App() {
	const userRoute = userRoutes()
	const doctorRoute = doctorRoutes()
	const adminRoute = adminRoutes()
	return (
		<>
			<BrowserRouter>
				<Routes>
					{userRoute}
					{doctorRoute}
					{adminRoute}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
