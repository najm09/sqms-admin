import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "sans-serif",
    marginTop: 10,
    "& tr:nth-child(even)": {
      backgroundColor: "#e8f3fc"
    },
    flexWrap: "nowrap"
  },
  header: {
    backgroundColor: "#1976d2 !important",
    color: "white !important",
    whiteSpace: "nowrap",
    fontWeight: "bold !important",
    fontFamily: "sans-serif",
  },

}))