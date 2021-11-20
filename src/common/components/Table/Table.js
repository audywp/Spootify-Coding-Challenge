import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function TableComponent({ column = [], data = [] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='caption table'>
        <TableHead>
          <TableRow>
            <TableCell>#Title</TableCell>
            <TableCell align='right'>Album</TableCell>
            <TableCell align='right'>Artist</TableCell>
            <TableCell align='right'>
              <AccessTimeIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{ borderBottom: 'none', border: 'none' }} component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell style={{ borderBottom: 'none', border: 'none' }} align='right'>
                {row.calories}
              </TableCell>
              <TableCell style={{ borderBottom: 'none', border: 'none' }} align='right'>
                {row.fat}
              </TableCell>
              <TableCell style={{ borderBottom: 'none', border: 'none' }} align='right'>
                {row.carbs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
