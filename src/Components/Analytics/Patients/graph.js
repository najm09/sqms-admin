import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./data";
import {BarChart} from "./barChart"
// import "./styles.css";

Chart.register(CategoryScale);
 
export default function Graph() {
  const [chartData] = useState({
    labels: Data.map((data) => data.name), 
    datasets: [
      {
        label: "Patients Distribution across year xx",
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
      <BarChart chartData={chartData}/>
    </div>
  );
}