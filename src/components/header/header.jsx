import * as React from 'react';
import Box from '@mui/material/Box';

import './header.css'
import MenuButton from '../menuButton/menuButton';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} className='header'>
      <div className='logoWrapper'>
        <img src='src/assets/WIT-text-multi-white-logo.png'/>
      </div>
      <div className='menuLinks'>
        <Link to={'/about'}><MenuButton color='white' text='About'/></Link>
        <Link to={'/events'}><MenuButton color='white' text='Events'/></Link>
        <Link to={'/contact'}><MenuButton color='white' text='Contact'/></Link>
        <Link to={'/sponsor'}><MenuButton color='white' text='Sponsor'/></Link>
      </div>
      <Box className='main-content'>
        <Typography fontSize={'3.25rem'} fontWeight={300}>
          Elevating, engaging, and empowering local women and gender minorities working in technology.
        </Typography>
      </Box>
    </Box>
  );
}