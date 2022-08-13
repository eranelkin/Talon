import { makeStyles } from "@mui/styles";

export const defaultStyles = () => ({
  loading: {
    display: "flex",
    justifyContent: "center",
    height: 634,
    alignItems: "center",
  },
  paper: {
    overflow: "hidden",
    backgroundColor: "#222B36 !important",
    height: 634,
  },
});

export const useStyles = makeStyles(defaultStyles);
