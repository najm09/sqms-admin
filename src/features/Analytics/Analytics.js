import React from "react";
import AreaGraph from "./Area/Area";
import Diseases from "./Diseases/Diseases";
import TimeWiseReport from "./Time/TimeWiseReport";
import AlertTable from "./Alert/alertTable";
import { useStyles } from "./styles";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['Delhi', 'Mumbai', 'Hyderabad', 'Bangalore', 'Chennai', 'Pune', 'Noida', 'Gujrat', 'Agra', 'Indore'];

function getStyles(name, cityName, theme) {
  return {
    fontWeight:
      cityName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}




const Analytics = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [city, setCityName] = React.useState([]);
  const [selected, setSelected] = React.useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCityName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setSelected(true);
  };

  return (
    <div className={classes.root}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">City</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={city}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, city, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl >
      <AlertTable city={city} citySelected={selected}/>
      <Diseases city={city}/>
      <AreaGraph city={city}/>
      <TimeWiseReport city={city}/>
    </div>
  )
}

export default Analytics