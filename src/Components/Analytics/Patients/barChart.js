import { Bar } from "react-chartjs-2";
import './chart.css'
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h4 style={{ textAlign: "center" }}>Patient Flow through out xx year</h4>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Patients Distribution chart"
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