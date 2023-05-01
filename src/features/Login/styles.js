import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    padding : "1%",
    margin : "15% 6%",
    width: "40%",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    position: "fixed",

    "& button":{
      position: "relative",
      marginTop: 20,
      width: "30%"
    },
    "& input": {
      position: "relative",
    },
    "& h3": {
      color: "#33691e"
    }
  },
  alert: {
    paddingBottom: 10
  }

}))