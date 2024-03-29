import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert } from '@mui/material';
import { usersList } from './usersSlice';
import { useStyles } from './style';
import AdminActionForm from '../Admin/AdminActions';

const Users = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const { fetching, fetched, data } = useSelector(({ UsersListActionReducer }) => UsersListActionReducer);
  const {fetching:adminFetching, fetched:adminFetched} = useSelector(({ adminActionReducer }) => adminActionReducer);

  useEffect(() => {
    dispatch(usersList());
  }, [dispatch, adminFetched])

  
  const header = ["User Id", "Name", "Email", "Role", "Actions"];

  return (
    <TableContainer component={Paper} >
      {
        adminFetching ? <Alert severity='info'>Changing role</Alert> :
          adminFetched ? <Alert severity='success'>Role Changed</Alert> : 
          fetching ? <Alert severity='info'>Fetching Users Data</Alert> : ""
      }
      <Table className={classes.root}>
        <TableHead>
          <TableRow>
            {
              header.map(heading => (
                <TableCell key={heading} className={classes.header}>
                  {heading}
                </TableCell>
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
              <TableCell 
              component="th" 
              scope="row" 
              style={{ whiteSpace: "nowrap" }}
              >
                {row._id || "Not Available"}
              </TableCell>
              <TableCell component="th" scope="row" style={{ whiteSpace: "nowrap" }}>
                {row.name || "Not Available"}
              </TableCell>
              <TableCell >{row.email || "Not Available"}</TableCell>
              <TableCell >
                {row.role || "Not Available"}
              </TableCell>
              <TableCell>
                <AdminActionForm role={row.role} email={row.email} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Users