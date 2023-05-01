import AreaGraph from "./Area/Area";
import Diseases from "./Diseases/Diseases";
import TimeWiseReport from "./Time/TimeWiseReport";
import { useStyles } from "./styles";

const Analytics = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>SQMS | ANALYTICS</h1>
      <Diseases />
      <AreaGraph />
      <TimeWiseReport/>
      {/* <Diseases />
      <TimeWiseReport/>
      <AreaGraph /> */}
      
    </div>
  )
}

export default Analytics