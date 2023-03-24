import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import './header.css'
import { Container, Toolbar } from '@mui/material';
import MenuButton from '../menuButton/menuButton';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} className='header'>
      <AppBar position="static" color="primary">
        
          <Toolbar>
            <div className='logoWrapper'>
              <img src='src/assets/WIT-text-multi-white-logo.png'/>
            </div>
            <div>
              <MenuButton color='white' text='About'/>
              <MenuButton color='white' text='Events'/>
              <MenuButton color='white' text='Contact'/>
              <MenuButton color='white' text='FAQ'/>
            </div>
          </Toolbar>
        
      </AppBar>
    </Box>
  );
}