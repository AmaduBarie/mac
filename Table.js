import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';





const columns = [
  { id: 'name', label: 'Name', minWidth: 50 },
  { id: 'code', label: 'Purpose', minWidth: 50 },
  { id: 'date', label: 'Date', minWidth: 50 },
  {
    id: 'population',
    label: 'Amount',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
   
];

function createData(name, code,date, population) {
  
  return { name, code,date, population };
}






const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable({dd}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
   let rows = [
   
     
  ];
  
  
if(dd.length){
    dd.forEach(e => {
       const v = e[2].split("T")
       const n  =e[0].substr(0,1).toUpperCase()
       const s  =e[0].substr(1,e[0].length).toLowerCase()
               const ff = n+s
      rows.push( createData(ff, e[1],v[0],e[3]))
  });
}
  
 

  
  
    
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column,k) => (
                <TableCell
                  key={k}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,k) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={`key${k}`}>
                  {columns.map((column,k) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={`k${k}`} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
