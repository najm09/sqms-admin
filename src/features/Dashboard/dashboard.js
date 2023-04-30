import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import AdminActionForm from "../Admin/AdminActions";
import Users from '../Users/users';
import Error from "../../Components/Error"
import Patients from '../Patients/patients';
import QueueStatus from "../../features/Queue/Queue"
import Analytics from '../Analytics/Analytics';
import { useStyles } from './styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{marginTop:2}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { isAdmin } = useSelector(({ loginActionReducer }) => loginActionReducer)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {
        isAdmin ?
          <Box sx={{borderColor:1, borderBottom:"divider"}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Users" {...a11yProps(0)} />
              <Tab label="Patients" {...a11yProps(1)} />
              <Tab label="Admin Actions" {...a11yProps(2)} />
              <Tab label="Appointment Details" {...a11yProps(3)} />
              <Tab label="Analytics" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}><Users /></TabPanel>
            <TabPanel value={value} index={1}><Patients /></TabPanel>
            <TabPanel value={value} index={2}><AdminActionForm /></TabPanel>
            <TabPanel value={value} index={3}><QueueStatus /></TabPanel>
            <TabPanel value={value} index={4}>
              <Analytics />
            </TabPanel>
          </Box> : <Error />
      }
    </div>
  );
}