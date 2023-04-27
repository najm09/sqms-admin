import * as React from 'react';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import Tab from '@mui/base/Tab';
import { makeStyles } from '@mui/styles';
import AdminActionForm from "../Admin/AdminActions";
import Users from '../Users/users';
import Patients from '../Patients/patients';

const useStyles = makeStyles({
  tableList: {
    paddingLeft: "5%",
    paddingRight: "5%",
    position: "fixed",
    left: "0",
    top: "0.3",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  panel: {
    marginTop: '1em'
  }
});



function Dashboard() {
  const classes = useStyles();
  return (
    <Tabs>
      <TabsList className={classes.tableList}>
        <Tab>Users</Tab>
        <Tab>Patients</Tab>
        <Tab>Admin Actions</Tab>
      </TabsList>
      <div className={classes.panel}>
        <TabPanel ><Users /></TabPanel>
        <TabPanel><Patients /></TabPanel>
        <TabPanel><AdminActionForm /></TabPanel>
      </div>
    </Tabs>
  );
}

export default Dashboard;