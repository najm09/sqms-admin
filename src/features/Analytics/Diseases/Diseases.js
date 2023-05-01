import React from 'react'
import BarChart from '../../../Components/BarChart'

const Diseases = () => {
  const xData = ["TB", "Accident", "Cancer", "Asthama", "Fever", "Covid-19", "Cardiac Arrest", "Headache", "Migrane", ]
  const yData = [100, 300, 120, 20, 10, 100, 600, 450, 444]
  const title = "DISEASES DISTRIBUTION CHART"
  return (
    <div>
      <BarChart xData={xData} yData={yData} title={title}/>
    </div>
  )
}

export default Diseases