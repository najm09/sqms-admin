import AreaGraph from "./Area/Area";
import Diseases from "./Diseases/Diseases";
import TimeWiseReport from "./Time/TimeWiseReport";
import { useStyles } from "./styles";

const Analytics = () => {
  const classes = useStyles();
  return (
    <span className={classes.root}>
      <Diseases />
      <Diseases/>
      <TimeWiseReport/>
      <AreaGraph />
    </span>
  )
}

export default Analytics