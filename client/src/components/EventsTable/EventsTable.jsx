import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EventRow from "./EventRow/EventRow";
import Typography from "@mui/material/Typography";
import {
  selectEventsStatus,
  selectAllEventsError,
} from "../../slices/eventsSlice";
import { translations } from "../../translations/translations";

import { useStyles } from "./eventsTable.style";

const EventsTable = ({ events }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const eventsStatus = useSelector(selectEventsStatus);
  const lastError = useSelector(selectAllEventsError);

  const classes = useStyles();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return eventsStatus === "succeed" ? (
    <div className={classes.wrapper}>
      <TableContainer className={classes.container}>
        <Table stickyHeader className={classes.eventsTable}>
          <TableHead>
            <TableRow className={classes.headerRow}>
              <TableCell className={classes.emptyCell} />
              <TableCell className={classes.headerType}>
                {translations.headerType}
              </TableCell>
              <TableCell className={classes.headerSevirity}>
                {translations.headerSeverity}
              </TableCell>
              <TableCell className={classes.headerUser}>
                {translations.headerUser}
              </TableCell>
              <TableCell className={classes.headerDate}>
                {translations.headerDate}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((event) => {
                return (
                  <EventRow key={event.time} event={event} classes={classes} />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={classes.pagination}
        rowsPerPageOptions={[5, 10, 50]}
        component="div"
        count={events.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  ) : (
    <Typography variant="h4" className={classes.errorPaper}>
      {lastError}
    </Typography>
  );
};

EventsTable.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default memo(EventsTable);
