import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h4 style={{ textAlign: "center" }}>Area wise health report</h4>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Area wise Disease distribution chart"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;