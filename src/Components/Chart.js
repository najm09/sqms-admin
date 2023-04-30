import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = (props) => {
  const {xData, yData, title} = props;
  const data = xData.map((x, index) => ({ x, y: yData[index] }));
  
  return (
    <div>
      <p>{title}</p>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="x" />
        <YAxis dataKey="y"/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

Chart.propTypes = {
  xData: PropTypes.arrayOf(PropTypes.string).isRequired,
  yData: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Chart;
