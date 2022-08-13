import { makeStyles } from "@mui/styles";

export const defaultStyles = () => ({
  container: {
    height: 437,
  },
  wrapper: {
    marginTop: "15px !important",
  },
  errorPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#919EAB",
    backgroundColor: "#222B36",
    height: 437,
  },
  eventsTable: {
    "& .MuiTableCell-root": {
      padding: "0 0 0 16px",
      color: "#FFFFFF",
      borderBottomColor: "#3D4752",
      backgroundColor: "#222B36",
      "&$emptyCell": {
        width: 51,
      },
      "&$headerType": {
        width: 319,
      },
      "&$headerSeverity": {
        width: 252,
      },
      "&$headerUser": {
        width: 319,
      },
      "&$headerDate": {
        width: 319,
      },
    },
  },
  headerRow: { height: 57 },
  headerType: {},
  pagination: {
    color: "#FFFFFF !important",
    "& .MuiTablePagination-selectIcon": {
      color: "#919EAB",
    },
  },
  emptyCell: {},
  typeCell: {},
  headerSeverity: {},
  headerUser: {},
  headerDate: {},
});

export const useStyles = makeStyles(defaultStyles);
