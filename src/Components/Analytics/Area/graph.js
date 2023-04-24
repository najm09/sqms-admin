import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./data";
import PieChart from "./PieChart"
// import "./styles.css";

Chart.register(CategoryScale);
 
export default function AreaChart() {
  const [chartData] = useState({
    labels: Data.map((data) => data.name), 
    datasets: [
      {
        label: "Disease Report for a particular area",
        data: Data.map((data) => data.patients),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
    <div className="App">
      <PieChart chartData={chartData}/>
    </div>
  );
}