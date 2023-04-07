import './App.css'

import Header from './components/header/header';
import { Box, Typography } from '@mui/material';
import Section from './components/section/section';

function App() {

  return (
      <div className='App'>
        <Header/>
        <Box className='main-content'>
          <Typography fontSize={50} fontWeight={300}>
            Elevating, engaging, and empowering local women and gender minorities working in technology.
          </Typography>
        </Box>
        <Box className='about-section' flexDirection={"column"} sx={{backgroundColor: '#F8DED2', minHeight: '70vh'}}>
            <Typography fontSize={50} fontWeight={500}>Diversity and inclusivity are essential for innovation and progress in tech.</Typography>
            <Typography fontSize={36} fontWeight={300}>That's why we are committed to promoting gender diversity and equality in the industry. As a group, we are committed to creating a community-driven experience for our members. We encourage active participation and engagement, and we offer opportunities for members to contribute their expertise and knowledge to our community.</Typography>
        </Box>
        <Section color={'white'} height={'75vh'}/>
      </div>
  )
}

export default App;
