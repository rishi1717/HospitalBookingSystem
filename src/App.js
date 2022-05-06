import React from "react"
import { BrowserRouter, Routes } from "react-router-dom"
import "./App.css"
import doctorRoutes from "./routes/doctorRoutes.js"
import userRoutes from "./routes/userRoutes.js"

function App() {
	const userRoute = userRoutes()
	const doctorRoute = doctorRoutes()
	return (
		<>
			<BrowserRouter>
				<Routes>
					{userRoute}
					{doctorRoute}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
