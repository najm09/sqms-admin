import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    padding: 10,
    backgroundColor: "rgb(245, 242, 237)",
    display: "flex", 
    justifyContent: "space-around", 
    flexWrap:"wrap" 
  },
  title:{
    padding: 10,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  graphTitle: {
    textAlign: "center",
    fontSize: "16px",
    color: "green",
    fontWeight: "bold",
    textDecoration: "underline"
  },


}))