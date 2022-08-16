import React from "react";
import { useSelector } from "react-redux";
import { selectEventTypes } from "../../slices/eventsSlice";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import { translations } from "../../translations/translations";
import { useStyle } from "./eventsHeader.style";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "lightgrey",
    },
  },
};

const EventsHeader = ({ filterChanged }) => {
  const [selectedTypes, setSelectedTypes] = React.useState([]);
  const eventTypes = useSelector(selectEventTypes);

  const classes = useStyle();

  const handleDeleteTypes = (ev, value) => {
    ev.preventDefault();
    const selected = selectedTypes.filter((selected) => selected !== value);
    filterChanged(selected);
    setSelectedTypes(selected);
  };

  const handleChangeTypes = (event) => {
    const {
      target: { value },
    } = event;
    filterChanged(value);
    setSelectedTypes(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <Typography variant="body1" className={classes.title}>
        {translations.title}
      </Typography>
      <FormControl className={classes.dropdown}>
        <InputLabel id="demo-multiple-chip-label">
          {translations.dropdownLabel}
        </InputLabel>
        <Select
          multiple
          value={selectedTypes}
          onChange={handleChangeTypes}
          input={<OutlinedInput label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  clickable
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                  className={classes.chip}
                  onDelete={(ev) => handleDeleteTypes(ev, value)}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {eventTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default EventsHeader;
