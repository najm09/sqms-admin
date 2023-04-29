import PieChartComponent from "../../../Components/PieChart"

const TimeWiseReport = () => {
  const xData = ["Jan", "Feb", "March", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const yData = [100, 300, 120, 20, 10, 100, 600, 450, 444, 123, 111, 321]
  const title = "Monthly Health report for a particular area Y"
  return <PieChartComponent xData={xData} yData={yData} title={title}/>
}

export default TimeWiseReport