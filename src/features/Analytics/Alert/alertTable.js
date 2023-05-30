import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useStyles } from './style';

const columns = [
  { id: 'City', label: 'City', minWidth: 170 },
  {
    id: 'Area',
    label: 'Area',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Month',
    label: 'Month',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Diseases',
    label: 'Diseases',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(City, Area, Month, Diseases) {
  return { City, Area, Month, Diseases };
}

export default function AlertTable(props) {
  const { city, citySelected } = props
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const classes = useStyles();

  const rows = [
    createData(`${city}`, 'XYZ', "January", "CVD"),
    createData(`${city}`, 'ABC', "February", "Diabetes"),
    createData(`${city}`, 'YTUD', "March", "Tuberculosis"),
    createData(`${city}`, 'SJSJ', "April", "Tuberculosis"),
    createData(`${city}`, 'SSJS', "May", "Tuberculosis"),
    createData(`${city}`, 'SSHS', "June", "Tuberculosis"),
    createData(`${city}`, 'QWER', "July", "Cancer"),
    createData(`${city}`, 'ASDF', "August", "Cancer"),
    createData(`${city}`, 'SWAW', "September", "Cancer"),
    createData(`${city}`, 'SEFGF', "October", "Cancer"),
    createData(`${city}`, 'KJUi', "November", "Stroke"),
    createData(`${city}`, 'gYUG', "Decemeber", "CVD"),
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} sx={{ width: '100%', overflow: 'hidden', margin: 2, wrap: 'no-wrap' }}>
      <TableContainer sx={{ maxHeight: 250 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={classes.header}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {citySelected ?
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow role="checkbox" tabIndex={-1}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody> : <span className={classes.message}>Select City To Get Data</span>

          }
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}