import React from "react";
import { Paper } from "@mui/material";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
  
  
const Graph = (props) => {
  const {data} = props;
return (
    <Paper>
    <Chart data={data}>
      <ArgumentAxis />
      <ValueAxis />
      <BarSeries valueField="value" argumentField="argument" />
    </Chart>
  </Paper>
);
}
  
export default Graph;