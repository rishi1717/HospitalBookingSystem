import React, { useEffect } from "react"
import Chart from "chart.js/auto"
import { useSelector } from "react-redux"
import axios from "../../axios"

let DoughnutChart

const Doughnut = () => {
	const adminState = useSelector((storeState) => storeState.admin)
	const [depNames, setDepNames] = React.useState([])
	const [count, setCount] = React.useState([])
	useEffect(() => {
		;(async () => {
			const response = await axios.get("chart/doughnut", {
				headers: {
					"auth-token": adminState.token,
				},
			})
			setDepNames(response.data.depName)
			setCount(response.data.depCount)
		})()
	}, [])

	useEffect(() => {
		buildChart()
		console.log(count)
	}, [count])

	const buildChart = () => {
		const ctx = document.getElementById("DoughnutChart").getContext("2d")

		if (typeof DoughnutChart !== "undefined") DoughnutChart.destroy()

		DoughnutChart = new Chart(ctx, {
			type: "doughnut",
			data: {
				labels: depNames,
				datasets: [
					{
						label: "Total Amount",
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
			<h4 style={{ color: "#595959" }}>Departments</h4>
			<div>
				<canvas id="DoughnutChart" width="1000" height="500" />
			</div>
		</>
	)
}

export default Doughnut
