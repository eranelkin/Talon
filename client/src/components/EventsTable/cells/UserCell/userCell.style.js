import { makeStyles } from "@mui/styles";

export const defaultStyles = () => ({
  name: {
    fontSize: 14,
  },
  email: {
    fontSize: 13,
    color: "#919EAB",
  },
});

export const useStyles = makeStyles(defaultStyles);
