import { makeStyles } from "@mui/styles";

export const defaultStyles = () => ({
  indicator: {
    fontSize: 11,
    borderRadius: "8px",
    display: "inline-block",
    padding: "3px 8px 3px 8px",
  },
  high: {
    backgroundColor: "#F06161",
  },
  medium: {
    backgroundColor: "#FFB547",
  },
  low: {
    backgroundColor: "#3A90E5",
  },
});

export const useStyles = makeStyles(defaultStyles);
