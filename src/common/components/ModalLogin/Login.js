import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI
import { Button, Divider, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';

// other
import { v4 as uuidv4 } from 'uuid';
import Logo from '../../../assets/images/logo.png';

import Config from '../../../config';

const { REACT_APP_REDIRECT_URI } = process.env;
const { clientId, clientSecret, authRedirect } = Config.api;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

export default function Login() {
  const isLogged = useSelector((state) => state.Global.isLogged);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isLogged) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isLogged]);

  const Redirect = () => {
    window.location.replace(
      `${authRedirect}?client_id=${clientId}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URI}&state=${uuidv4()}&scope=user-read-private user-read-email`
    );
  };

  return (
    <Modal disableAutoFocus open={isOpen}>
      <Box style={style}>
        <Box display='flex' justifyContent='center' alignItems='center' mb={4}>
          <img src={Logo} alt='Spotify' width='20%' />
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Typography color='primary' id='modal-modal-title' variant='h4' component='h2'>
            InSpotify
          </Typography>
        </Box>
        <Box mt={4}>
          <Divider />
        </Box>
        <Box padding='0 40px' mt={2}>
          <Button onClick={Redirect} variant='contained' fullWidth>
            Login With Spotify
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
