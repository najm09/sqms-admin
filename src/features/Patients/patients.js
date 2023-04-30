import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import {TableBody, TablePagination} from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {patientsList, changePage, changeRow} from './patientsSlice';
import { useStyles } from './styles';

const Patients = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {fetched, data, paginatedData, page, rows} = useSelector(({PatinetsListActionReducer}) => PatinetsListActionReducer);
  const TableHeader = ["User Id", "Name", "Contact Number", "Family Contact", "Address", "Doctor", "Registered By", "Token Number","Current Panelty", "Body Temp", "Age", "Weight", "Blood Type", "Blood Pressure", "Oxygen Level", "Description", "Apppointment Date", "Gender", "Allergies"];
  useEffect(() => {
    dispatch(patientsList());
},[dispatch])

  const handleChangePage = (event, newPage) => {
    dispatch(changePage(newPage));
  };
  const handleChangeRowsPerPage = (event) => {
    dispatch(changeRow((parseInt(event.target.value, 10))));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.root}>
        <TableHead>
          <TableRow >
            {
              TableHeader.map((heading) => (
                <TableCell key={heading} className={classes.header}>{heading}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {fetched && paginatedData.map((data) => (
            <TableRow key={data._id}>
              {Object.values(data).map((item) => <TableCell key={data._id} style={{whiteSpace: "nowrap"}}>{item || "Not Available"}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={data?.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rows}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default Patients