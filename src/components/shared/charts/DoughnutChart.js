"use client";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
	// same data you had
	const data = {
		datasets: [
			{
				label: "47",
				data: [20, 12, 15],
				backgroundColor: [
					"rgba(247, 247, 247, 0.2)",
					"rgba(247, 247, 247, 0.5)",
					"rgba(0, 117, 255, 1)",
				],
				borderWidth: 0,
				spacing: 4,
				hoverOffset: 0,
			},
		],
	};

	const options = {
		cutout: "60%",
		plugins: {
			legend: { display: false }, // hide legend like your vanilla example
			tooltip: { enabled: true }, // disable tooltip if you want exact copy
		},
	};

	return (
		<div className="h10-hero-stat-chart">
			<Doughnut className="tj-pie-chart" data={data} options={options} />
			<p className="h10-hero-stat-chart-text">Statics</p>
		</div>
	);
};
export default DoughnutChart;
