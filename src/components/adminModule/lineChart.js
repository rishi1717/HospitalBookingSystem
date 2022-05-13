import React, { useEffect } from "react"
import Chart from "chart.js/auto"
import { useSelector } from "react-redux"
import axios from "../../axios"

let LineChart

const LineGraph = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	const [date, setDate] = React.useState([])
	const [count, setCount] = React.useState([])
	useEffect(() => {
		;(async () => {
			const response = await axios.get("chart/line", {
				headers: {
					"auth-token": adminState.token,
				},
			})
			setDate(response.data.dates)
			setCount(response.data.count)
		})()
	}, [])

	useEffect(() => {
		buildChart()
	}, [count])

	const buildChart = () => {
		const ctx = document.getElementById("LineChart").getContext("2d")

		if (typeof LineChart !== "undefined") LineChart.destroy()

		LineChart = new Chart(ctx, {
			type: "line",
			data: {
				labels: date,
				datasets: [
					{
						label: "Total Users",
						data: count,
						fill: false,
						borderColor: "rgb(75, 192, 192)",
						backgroundColor: ["#4d79ff", "#862d86", "#008080", "#6666ff"],
						tension: 0.1,
					},
				],
			},
		})
	}

	return (
		<>
			<h4 style={{ color: "#595959" }}>Users per day</h4>
			<div>
				<canvas id="LineChart" width="1000" height="450" />
			</div>
		</>
	)
}

export default LineGraph
