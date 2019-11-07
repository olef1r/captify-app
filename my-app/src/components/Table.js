import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  container: {
    marginBottom: '29px',
    marginTop: '29px'
  },
  root: {
    overflowX: 'auto',
    marginBottom: '16px'
  }
}));

export default function SimpleTable({ rows }) {
  const classes = useStyles();
  return (
    <Container maxWidth='xs' className={classes.container}>
    <Paper className={classes.root}>
      <Table  aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell align="center" >Items</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i)=> (
            <TableRow key={i}>
              <TableCell align="center" variant="body" component="th" scope="row">
                {row}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Container>
  );
}