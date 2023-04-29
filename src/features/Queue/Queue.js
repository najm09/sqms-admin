import React from 'react'
import { Months } from "../../Constants/Calender"
import { QueueAction } from "./QueueSlice"
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import { Grid, TableBody, Chip } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useStyles } from './styles';


export default function QueueStatus() {
  const classes = useStyles();
  const TableHeader = ["Name", "Contact Number", "Token Number"];
  const dispatch = useDispatch();
  const { fetched, data, date, error } = useSelector(({ QueueActionReducer }) => QueueActionReducer);

  const handleChange = (e) => {
    let [year, month, currDate] = e.target.value.split("-");
    month = Months[month];
    let requestDate = [currDate, month, year].join("-");
    dispatch(QueueAction({ date: requestDate }));
  }

  return (
    <div className={classes.root}>
      <label for="date">Please Select a Date</label>
      <input type='date' onChange={handleChange} id="date"></input>
      {error ? <Chip label={error} className={classes.chip} color="error" /> : ""}
      {
        fetched ? <TableContainer component={Grid}>
          <div className={classes.gridContainer}>
            <Chip label={"Queue Status"} color='primary' className={classes.chip} />
            <Chip label={`Total Appointments:${data.length}`} color='error' className={classes.chip} />
            <Chip label={`Date:${date}`} color='info' className={classes.chip} />

          </div>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {
                  TableHeader.map((heading) => (
                    <TableCell className={classes.header}>{heading}</TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {fetched && data.map((data) => (
                <TableRow key={data._id}>
                  <TableCell>{data.name || "Not Available"} </TableCell>
                  <TableCell>{data.contactNumber || "Not Available"}</TableCell>
                  <TableCell>{data.tokenNumber || "Not Available"}</TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer> : ""
      }

    </div>
  );
}
