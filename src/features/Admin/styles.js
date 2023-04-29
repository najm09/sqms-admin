import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "sans-serif",
    width: "100%",
    display : "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: 100,
    "& input": {
      position: "relative",
      width: "70vh"
    },
  },
}))