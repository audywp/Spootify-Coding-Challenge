/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faWindowClose } from '@fortawesome/free-solid-svg-icons';
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
import { useAudio } from '../../../helpers/audioPlayer';
import { useSelector } from 'react-redux';
import { PlayCircle } from '@mui/icons-material';

export default function TableComponent({ column = [], data = [], onClick = () => {}, type = '' }) {
  const { preview_url } = useSelector((state) => state.Global.playedSong);
  const [toggle, changeSong] = useAudio(preview_url);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists((prevState) => {
      return data.map((Val) => {
        return { ...Val, active: false };
      });
    });
  }, [data]);

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
              <TableCell align='left'>
                <span>action</span>
              </TableCell>
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
            {lists.map((row, index) => {
              return (
                <TableRow
                  onClick={() => {
                    changeSong();
                    onClick(row, index);
                    setLists((prevState) => {
                      const newArray = [];
                      prevState.forEach((val) => {
                        newArray.push({ ...val, active: false });
                      });
                      newArray[index].active = true;
                      return newArray;
                    });
                  }}
                  hover
                  selected={row.active}
                  key={row.name}
                  className={!row.preview_url ? 'no__preview' : 'with__preview'}
                >
                  <TableCell align='left' style={{ borderBottom: 'none', border: 'none' }} component='th' scope='row'>
                    {!row.preview_url ? (
                      <FontAwesomeIcon icon={faWindowClose} color='#FFB5A7' />
                    ) : (
                      <FontAwesomeIcon icon={row.active ? faPauseCircle : faPlayCircle} color='#FFB5A7' />
                    )}
                  </TableCell>
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
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
