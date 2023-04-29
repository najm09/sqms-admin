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

const Patients = () => {
  const dispatch = useDispatch();
  const {fetched, data, paginatedData, page, rows} = useSelector(({PatinetsListActionReducer}) => PatinetsListActionReducer);
  const TableHeader = ["id", "Name", "Contact Number", "Family Contact", "Address", "Doctor", "Registered By", "Token Number","Current Panelty", "Body Temp", "Age", "Weight", "Blood Type", "Blood Pressure", "Oxygen Level", "Description", "Apppointment Date", "Gender"];
  useEffect(() => {
    dispatch(patientsList());
  },[])

  const handleChangePage = (event, newPage) => {
    dispatch(changePage(newPage));
  };
  const handleChangeRowsPerPage = (event) => {
    dispatch(changeRow((parseInt(event.target.value, 10))));
  };
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="a dense table">
        <TableHead>
          <TableRow>
            {
              TableHeader.map((heading) => (
                <TableCell style={{whiteSpace: "nowrap"}}>{heading}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {fetched && paginatedData.map((data) => (
            <TableRow>
              {Object.values(data).map((item) => <TableCell style={{whiteSpace: "nowrap"}}>{item}</TableCell>)}
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