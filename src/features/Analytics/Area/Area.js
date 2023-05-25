import React from 'react'
import Chart from '../../../Components/Chart'
import {generateRandomNumbers } from '../../../Constants/Calender';
import { toUpper } from 'lodash';

const AreaGraph = (props) => {
  const {city} = props;
  const xData = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", ".", ".", "X", "Y", "Z"]
  var yData = generateRandomNumbers(20);
  const title = `PATIENTS DISTRIBUTION CHART ${toUpper(city)}`
  return (
    <div>
      <Chart xData={xData} yData={yData} title={title}/>
    </div>
  )
}

export default AreaGraph