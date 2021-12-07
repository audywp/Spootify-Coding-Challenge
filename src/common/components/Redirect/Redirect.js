/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';

import Logo from '../../../assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { doLogin, setIsLogged } from '../../../store/globalAction';
import { useNavigate } from 'react-router';

export default function Redirect() {
  const params = new URLSearchParams(window.location.search);

  const code = params.get('code');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (code && code.length) {
      dispatch(doLogin(code, () => navigate('/')));
    } else {
      navigate('/');
    }
  }, [code]);

  useEffect(() => {
    dispatch(setIsLogged(true));
  }, []);

  return (
    <Box>
      <Box display='flex' justifyContent='center' alignItems='center' mb={4}>
        <img src={Logo} alt='Spotify' width='10%' />
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Typography color='primary' id='modal-modal-title' variant='h4' component='h2'>
          InSpotify
        </Typography>
      </Box>
      <Box mt={4}>
        <Divider />
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center' mt={2}>
        <Typography color='primary' variant='h6' component='h2'>
          You will redirected ...
        </Typography>
      </Box>
    </Box>
  );
}
