import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllEvents = createAsyncThunk(
  "events/fetchAllEvents",
  async (payload, { rejectWithValue }) => {
    const url = "/events/all";
    const response = await fetch(url);
    const events = await response.json();

    if (events.error) {
      return rejectWithValue({
        error: events.error,
        text: "additional error text",
      });
    }

    return events;
  }
);

const initialState = {
  all: [],
  types: [],
  allEventsStatus: "idle",
  lastError: null,
};
export const eventsSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: {
    [fetchAllEvents.pending]: (state) => {
      state.allEventsStatus = "loading";
    },
    [fetchAllEvents.fulfilled]: (state, { payload: events }) => {
      const types = events.map(({ eventType }) => eventType);
      state.all = events;
      state.types = [...new Set(types)];
      state.allEventsStatus = "succeed";
    },
    [fetchAllEvents.rejected]: (state, { payload }) => {
      state.lastError = payload.error;
      state.allEventsStatus = "failed";
    },
  },
});

export const selectAllEvents = (state) => state.events.all;
export const selectEventTypes = (state) => state.events.types;
export const selectEventsStatus = (state) => state.events.allEventsStatus;
export const selectAllEventsError = (state) => state.events.lastError;

export default eventsSlice.reducer;
