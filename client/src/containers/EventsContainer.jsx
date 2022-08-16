import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import EventsHeader from "../components/EventsHeader/EventsHeader";
import { useStyles } from "./eventsContainer.style";

import {
  fetchAllEvents,
  selectAllEvents,
  selectEventsStatus,
} from "../slices/eventsSlice";
import EventsTable from "../components/EventsTable/EventsTable";

const EventsContainer = () => {
  const [filteredEvents, setFilteredEvents] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const events = useSelector(selectAllEvents);
  const isLoading = useSelector(selectEventsStatus);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  useEffect(() => {
    if (events.length > 0 && isLoading === "succeed") {
      setFilteredEvents(
        selectedTypes.length === 0
          ? events
          : events.filter((event) => selectedTypes.includes(event.eventType))
      );
    }
  }, [events, isLoading, selectedTypes]);

  const filterChanged = (filters) => {
    setSelectedTypes(filters);
  };

  return isLoading === "loading" ? (
    <div className={classes.loading}>
      <CircularProgress disableShrink />
    </div>
  ) : (
    <Paper className={classes.paper}>
      <EventsHeader filterChanged={filterChanged} />
      <EventsTable events={filteredEvents} />
    </Paper>
  );
};

export default memo(EventsContainer);
