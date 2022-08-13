import React, { memo } from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { useStyles } from "./userCell.style";

const UserCell = ({ user }) => {
  const { name, email } = user;
  const classes = useStyles();
  const tooltipText = (
    <div>
      Name: {name}
      <br />
      email: {email}
    </div>
  );

  return (
    <Tooltip title={tooltipText} placement="bottom-start">
      <span>
        <Typography variant="body1" component="div" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="body1" component="div" className={classes.email}>
          {email}
        </Typography>
      </span>
    </Tooltip>
  );
};

UserCell.propTypes = {
  text: PropTypes.string,
};

export default memo(UserCell);
