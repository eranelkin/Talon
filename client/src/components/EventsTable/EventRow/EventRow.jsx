import React, { memo } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import PropTypes from "prop-types";
import SeverityCell from "../cells/SeverityCell/SeverityCell";
import UserCell from "../cells/UserCell/UserCell";

const EventRow = ({ event, classes }) => {
  const date = event.time.split("T");
  const time = date[1].split(".")[0];
  const dateTimeCell = `${date[0]} | ${time}`;

  return (
    <TableRow hover style={{ height: 76 }}>
      <TableCell className={classes.emptyCell} />
      <TableCell className={classes.typeCell}>{event.eventType}</TableCell>
      <TableCell className={classes.severityCell}>
        <SeverityCell text={event.severity} />
      </TableCell>
      <TableCell className={classes.userCell}>
        <UserCell user={event.user} />
      </TableCell>
      <TableCell className={classes.dateCell}>{dateTimeCell}</TableCell>
    </TableRow>
  );
};

EventRow.propTypes = {
  event: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default memo(EventRow);
