import './App.css'

import Header from './components/header/header';
import { Box, Typography } from '@mui/material';
import Section from './components/section/section';

function App() {

  return (
      <div className='App'>
        <Header/>
        <Box className='main-content'>
          <Typography fontSize={36} fontWeight={300}>
            Elevating, engaging, and empowering local women and gender minorities working in technology.
          </Typography>
        </Box>
        <Section color={'secondary'} height={'100vh'}/>
        <Section color={'white'} height={'75vh'}/>
      </div>
  )
}

export default App;
