import React from 'react'
import BarChart from '../../../Components/BarChart'
import {generateRandomNumbers } from '../../../Constants/Calender';
import { toUpper } from 'lodash';


const Diseases = (props) => {
  const {city} = props;
  const xData = ["TB", "Accident", "Cancer", "Asthama", "Fever", "Covid-19", "Cardiac Arrest", "Headache", "Migrane", ]
  var yData = generateRandomNumbers(20);
  const title = `DISEASES DISTRIBUTION CHART ${toUpper(city)}`
  return (
    <div>
      <BarChart xData={xData} yData={yData} title={title}/>
    </div>
  )
}

export default Diseases