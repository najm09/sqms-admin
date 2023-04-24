import { Bar } from "react-chartjs-2";
import './chart.css'
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h4 style={{ textAlign: "center" }}>Types of diseases encountered in an area</h4>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Area Report"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};