import { toUpper } from "lodash";
import PieChartComponent from "../../../Components/PieChart"
import {generateRandomNumbers } from '../../../Constants/Calender';

const TimeWiseReport = (props) => {
  const {city} = props;
  const xData = ["Jan", "Feb", "March", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  var yData = generateRandomNumbers(12);
  const title = `MONTHLY HEALTH REPORT FOR ${toUpper(city)}`
  return <PieChartComponent xData={xData} yData={yData} title={title}/>
}

export default TimeWiseReport