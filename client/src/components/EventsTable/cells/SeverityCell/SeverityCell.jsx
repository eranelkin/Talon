import React, { memo } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useStyles } from "./severityCell.style";

const SeverityCell = ({ text }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.indicator, {
        [classes.low]: text === "low",
        [classes.medium]: text === "medium",
        [classes.high]: text === "high",
      })}
    >
      {text.toUpperCase()}
    </div>
  );
};

SeverityCell.propTypes = {
  text: PropTypes.string.isRequired,
};

export default memo(SeverityCell);
