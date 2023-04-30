import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {usersList} from './usersSlice';
import { useStyles } from './style';


const Users = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {fetched, data} = useSelector(({UsersListActionReducer}) => UsersListActionReducer);
  useEffect(() => {
    dispatch(usersList());
  },[dispatch])

  const header = ["User Id", "Name", "Email", "Role"];

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650, padding: 0 }} aria-label="a dense table" className={classes.root}>
        <TableHead>
          <TableRow>
            {
              header.map(heading => (
                <TableCell key={heading} className={classes.header}>{heading}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {fetched && data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{whiteSpace: "nowrap"}}>
                {row._id}
              </TableCell>
              <TableCell component="th" scope="row" style={{whiteSpace: "nowrap"}}>
                {row.name}
              </TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Users