import * as React from 'react';
import Box from '@mui/material/Box';

import MenuButton from '../menuButton/menuButton';
import { Link } from 'react-router-dom';
import '../navBar/navBar.css'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} className='navbar'>
      <div className='logoWrapper'>
        <img src='src/assets/WIT-text-multi-white-logo.png'/>
      </div>
      <div className='menuLinks'>
        <Link to={'/about'}><MenuButton color='white' text='About'/></Link>
        <Link to={'/events'}><MenuButton color='white' text='Events'/></Link>
        <Link to={'/contact'}><MenuButton color='white' text='Contact'/></Link>
        <Link to={'/sponsor'}><MenuButton color='white' text='Sponsor'/></Link>
      </div>
    </Box>
  );
}