import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';

import './_table.scss';
import { millisToMinutesAndSeconds } from '../../../helpers/timeConverter';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function TableComponent({ column = [], data = [], onClick = () => {} }) {
  console.log(data);
  return (
    <Box height='80%' mb={4} padding='0 20px'>
      <Box mb={2}>
        <div className='discover-block__header'>
          <h2>Songs / Podcasts</h2>
          <span />
        </div>
      </Box>
      <TableContainer className='listsong__content' style={{ height: '90%' }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='caption table'>
          <TableHead>
            <TableRow>
              {column.map((val, ind) => {
                return (
                  <TableCell align='left'>
                    <span>{val.title}</span>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow onClick={() => onClick(row)} hover key={row.name}>
                {column.map((val, ind) => {
                  if (val.keyObject === 'artists') {
                    return (
                      <TableCell
                        align='left'
                        style={{ borderBottom: 'none', border: 'none' }}
                        component='th'
                        scope='row'
                      >
                        <span>{row[val.keyObject][0].name}</span>
                      </TableCell>
                    );
                  } else if (val.keyObject === 'album') {
                    return (
                      <TableCell
                        align='left'
                        style={{ borderBottom: 'none', border: 'none' }}
                        component='th'
                        scope='row'
                      >
                        {/* {row[val.keyObject]} */}
                        <span>
                          <Avatar alt={row[val.keyObject].name} src={row[val.keyObject].images[0].url} />
                        </span>
                      </TableCell>
                    );
                  } else if (val.keyObject === 'duration_ms') {
                    return (
                      <TableCell
                        align='left'
                        style={{ borderBottom: 'none', border: 'none' }}
                        component='th'
                        scope='row'
                      >
                        <span>{millisToMinutesAndSeconds(row[val.keyObject])}</span>
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell
                        align='left'
                        style={{ borderBottom: 'none', border: 'none' }}
                        component='th'
                        scope='row'
                      >
                        <span>{row[val.keyObject]}</span>
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
