import React, {useState} from 'react'
import { Months } from "../../Constants/Calender"
import { QueueAction } from "./QueueSlice"
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import { Grid, TableBody, Chip } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



export default function FirstComponent() {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const {fetched, data } = useSelector(({ QueueActionReducer }) => QueueActionReducer);


  const TableHeader = ["Name", "contact", "Token Number"];

  const handleChange = (e) => {
    let [year, month, currDate] = e.target.value.split("-");
    month = Months[month];
    setDate([currDate, month, year].join("-"));
    dispatch(QueueAction({ date }));
  }

  return (
    <div>
      <input type='date' onChange={handleChange}></input>
      {
        fetched ? <TableContainer component={Grid} margin={5}>
          <Chip label={`Queue Status : ${data.length}`} variant='outlined' color='info' /> &nbsp;
          <Chip label={`Date : ${date}`} variant='outlined' color='secondary' />
          <hr />
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {
                  TableHeader.map((heading) => (
                    <TableCell style={{ fontWeight: "bold" }}>{heading}</TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>

              {fetched && data.map((data) => (
                <TableRow key={data._id}>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.contactNumber}</TableCell>
                  <TableCell>{data.tokenNumber}</TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer> : <Chip label="No Apppointment on this day"/>
      }

    </div>
  );
}
