import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    marginTop: "100px",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    "& input": {
      width: "300px",
      height: "38px",
      fontSize: "16px",
      marginBottom: "40px",
      border: '2px solid #1976d2'
    },
    "& p": {
      color: "red"
    },
    "& label": {
      marginBottom: "10px",
      fontWeight: "bold",
      display: "block",
      color: "#1976d2",
    },
    "& tr:nth-child(even)":{
      backgroundColor: "#e8f3fc"
    }
  },
  header:{
    backgroundColor: "#1976d2 !important",
    color: "white !important",
    whiteSpace: "nowrap",
    fontWeight: "bold !important",
    fontFamily: "sans-serif",
  },
  chip:{
    fontWeight: "bold",
  },
  gridContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px"
  }

  
}))