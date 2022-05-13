import React, { useEffect } from "react"
import Chart from "chart.js/auto"
import { useSelector } from "react-redux"
import axios from "../../axios"

let BarChart

const BarGraph = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	const [dates, setDates] = React.useState([])
	const [amount, setAmount] = React.useState([])
	useEffect(() => {
		;(async () => {
			const response = await axios.get("chart/bar", {
				headers: {
					"auth-token": adminState.token,
				},
			})
			setDates(response.data.dates)
			setAmount(response.data.amount)
		})()
	}, [])

	useEffect(() => {
		buildChart()
	}, [amount])

	const buildChart = () => {
		const ctx = document.getElementById("BarChart").getContext("2d")

		if (typeof BarChart !== "undefined") BarChart.destroy()

		BarChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: dates,
				datasets: [
					{
						label: "Total Amount",
						data: amount,
						fill: false,
						borderColor: "rgb(75, 192, 192)",
						backgroundColor: "#609acf",
						tension: 0.1,
					},
				],
			},
		})
	}

	return (
		<>
			<h4 style={{color: "#595959"}}>Amount Per Day</h4>
			<div>
				<canvas id="BarChart" width="1000" height="450" />
			</div>
		</>
	)
}

export default BarGraph
