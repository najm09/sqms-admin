import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function BarGraph({ xData, yData, title }) {
  const data = xData.map((x, index) => ({ x, y: yData[index] }));

  return (
    <div>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="y" fill="#8884d8" />
      </BarChart>
      <p>{title}</p>
    </div>
  );
}

BarGraph.propTypes = {
  xData: PropTypes.arrayOf(PropTypes.string).isRequired,
  yData: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default BarGraph;
