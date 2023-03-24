import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import './section.css'
import '../../assets/WIT-banner-logo.png'

export default function Section({color, height}) {
  return (
    <Box sx={{ flexGrow: 1 }} className='section'>
      <AppBar position='static' color={color} sx={{ minHeight: height }}/>
    </Box>
  );
}