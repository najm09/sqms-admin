import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    margin: 5,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    marginTop: 1,
    fontFamily: "sans-serif",
    "& tr:nth-child(even)":{
      backgroundColor: "#ffcdd2",
      color: 'white',
    }
  },
  header:{
    display: "flex",
    backgroundColor: "#b71c1c !important",
    color: "white !important",
    whiteSpace: "nowrap",
    fontWeight: "bold !important",
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  message:{
    padding: 10,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    color : "red",
  }
  
}))

//