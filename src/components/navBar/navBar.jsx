import * as React from 'react';
import Box from '@mui/material/Box';

import MenuButton from '../menuButton/menuButton';
import { Link } from 'react-router-dom';
import '../navBar/navBar.css'
import { Button, Menu, MenuItem, Typography } from '@mui/material';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className='navbar'>
      <div className='logoWrapper'>
        <img src='src/assets/WIT-text-multi-white-logo.png'/>
      </div>
      <div className='menuLinks'>
        <Button
          id="about-button"
          color="white"
          aria-controls={open ? 'about-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <Typography fontSize={'2rem'} fontWeight={200}>
            About
          </Typography>
        </Button>
        <Menu
          id="about-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'about-button',
          }}
        >
          <Link to={'/leadership'} style={{ textDecoration: 'none', color: 'black'}}><MenuItem onClick={handleClose}>Leadership</MenuItem></Link>
          <Link to={'/about'} style={{ textDecoration: 'none', color: 'black'}}><MenuItem onClick={handleClose}>Mission</MenuItem></Link>
        </Menu>

        <Link to={'/events'}><MenuButton color='white' text='Events'/></Link>
        <Link to={'/contact'}><MenuButton color='white' text='Contact'/></Link>
        <Link to={'/sponsor'}><MenuButton color='white' text='Sponsor'/></Link>
      </div>
    </Box>
  );
}