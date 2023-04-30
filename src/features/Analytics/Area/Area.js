import React from 'react'
import Chart from '../../../Components/Chart'

const AreaGraph = () => {
  const xData = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", ".", ".", "X", "Y", "Z"]
  const yData = [100, 300, 120, 20, 10, 100, 600, 450, 444, 123, 435, 300, 987, 0, 0, 111, 121, 212]
  const title = "Location Wise Health Report : No of patients in an area "
  return (
    <div>
      <Chart xData={xData} yData={yData} title={title}/>
    </div>
  )
}

export default AreaGraph