import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import './header.css'
import { Toolbar } from '@mui/material';
import MenuButton from '../menuButton/menuButton';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} className='header'>
      <AppBar position="static" color="primary">
          <Toolbar>
            <div className='logoWrapper'>
              <img src='src/assets/WIT-text-multi-white-logo.png'/>
            </div>
            <div>
              <Link to={'/about'}><MenuButton color='white' text='About'/></Link>
              <Link to={'/events'}><MenuButton color='white' text='Events'/></Link>
              <Link to={'/contact'}><MenuButton color='white' text='Contact'/></Link>
              <Link to={'/faq'}><MenuButton color='white' text='FAQ'/></Link>
            </div>
          </Toolbar>
      </AppBar>
    </Box>
  );
}