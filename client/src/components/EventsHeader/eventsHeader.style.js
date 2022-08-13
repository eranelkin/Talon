import { makeStyles } from "@mui/styles";

export const defaultStyles = () => ({
  title: {
    fontSize: 17,
    fontWeight: 400,
    color: "#FFFFFF",
    margin: "17px 0 14px 16px !important",
  },
  dropdown: {
    width: 400,
    margin: "10px 0 0 16px !important",
    "& .MuiInputLabel-root": {
      color: "rgba(145, 158, 171, 1)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgba(145, 158, 171, 1)",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.23) !important",
    },
    "& .MuiOutlinedInput-root": {
      height: 61,
      "& .MuiChip-root.MuiChip-filled": {
        backgroundColor: "rgba(255, 255, 255, 0.16)",
        height: 30,
      },
    },
    "& .MuiSelect-icon": {
      color: "#919EAB",
    },
    "& .MuiChip-label": {
      color: "#FFFFFF",
    },
    "& .MuiChip-deleteIcon": {
      color: "#919EAB !important",
    },
  },
});

export const useStyle = makeStyles(defaultStyles);
