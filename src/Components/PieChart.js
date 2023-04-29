import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    margin: theme.spacing(2),
  },
  chartTitle: {
    marginBottom: theme.spacing(2),
  },
}));

function PieChartComponent({ xData, yData, title }) {
  const data = xData.map((x, index) => ({ x, y: yData[index] }));
  const classes = useStyles();

  return (
    <div className={classes.chartContainer}>
      <Typography variant="h6" className={classes.chartTitle}>
        {title}
      </Typography>
      <PieChart width={500} height={300}>
        <Pie data={data} dataKey="y" nameKey="x" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

PieChartComponent.propTypes = {
  xData: PropTypes.arrayOf(PropTypes.string).isRequired,
  yData: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PieChartComponent;
