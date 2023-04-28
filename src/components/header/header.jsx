import * as React from 'react';
import Box from '@mui/material/Box';

import './header.css'
import { Typography } from '@mui/material';
import Navbar from '../navBar/navBar';

export default function Header() {
  return (
    <Box className='header'>
      <Navbar/>
      <Box className='main-content'>
        <Typography fontSize={'3.25rem'} fontWeight={300}>
          Elevating, engaging, and empowering local women and gender minorities working in technology.
        </Typography>
      </Box>
    </Box>
  );
}