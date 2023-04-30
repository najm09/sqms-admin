import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];


function PieChartComponent({ xData, yData, title }) {
  const data = xData.map((x, index) => ({ x, y: yData[index] }));
  

  return (
    <div>
      <PieChart width={500} height={300}>
        <Pie data={data} dataKey="y" nameKey="x" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      <p>{title}</p>
    </div>
  );
}

PieChartComponent.propTypes = {
  xData: PropTypes.arrayOf(PropTypes.string).isRequired,
  yData: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PieChartComponent;
