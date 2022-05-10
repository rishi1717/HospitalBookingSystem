import React, { useEffect } from "react"
import Chart from "chart.js/auto"
import axios from "../../axios"
import { useSelector } from "react-redux"

let PieChart

const PieGraph = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	const [dates, setDates] = React.useState([])
	const [amount, setAmount] = React.useState([])
	useEffect(() => {
		;(async () => {
			const response = await axios.get("chart/pie", {
				headers: {
					"auth-token": adminState.token,
				},
			})
			setDates(response.data.status)
			setAmount(response.data.count)
		})()
	}, [])

	useEffect(() => {
		buildChart()
	}, [amount])

	const buildChart = () => {
		const ctx = document.getElementById("PieChart").getContext("2d")

		if (typeof PieChart !== "undefined") PieChart.destroy()

		PieChart = new Chart(ctx, {
			type: "pie",
			data: {
				labels: dates,
				datasets: [
					{
						label: "My First Dataset",
						data: amount,
						fill: false,
						backgroundColor: ["#990000", "#339933", "#609acf"],
						tension: 0.1,
					},
				],
			},
		})
	}

	return (
		<>
			<h4 style={{ color: "#595959" }}>Appointment status</h4>
			<div>
				<canvas id="PieChart" width="500" height="500" />
			</div>
		</>
	)
}

export default PieGraph
