import AreaGraph from "./Area/Area";
import Diseases from "./Diseases/Diseases";
import TimeWiseReport from "./Time/TimeWiseReport";

const Analytics = () => {
  return (
    <span style={{ display: "flex", justifyContent: "space-around", flexWrap:"wrap" }}>
      <Diseases />
      <Diseases/>
      <TimeWiseReport/>
      <AreaGraph />
    </span>
  )
}

export default Analytics