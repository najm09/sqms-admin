import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    margin: theme.spacing(1),
  },
  chartTitle: {
    marginBottom: theme.spacing(1),
  },
}));

function BarGraph({ xData, yData, title }) {
  const data = xData.map((x, index) => ({ x, y: yData[index] }));
  const classes = useStyles();

  return (
    <div className={classes.chartContainer}>
      <Typography variant="h6" className={classes.chartTitle}>
        {title}
      </Typography>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="y" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

BarGraph.propTypes = {
  xData: PropTypes.arrayOf(PropTypes.string).isRequired,
  yData: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default BarGraph;
