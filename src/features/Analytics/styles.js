import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgb(245, 242, 237)",
    display: "flex", 
    justifyContent: "space-around", 
    flexWrap:"wrap" 
  },
  title:{
    padding: 10,
    display: "flex",
    alignItems: "center"
  }
}))