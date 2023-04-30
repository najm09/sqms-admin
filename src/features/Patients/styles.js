import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    fontFamily: "sans-serif",
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
  
}))