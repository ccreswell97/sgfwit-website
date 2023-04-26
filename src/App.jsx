import './App.css'

import Header from './components/header/header';
import { Box, Typography } from '@mui/material';
import Section from './components/section/section';

function App() {

  return (
      <div className='App'>
        <Header/>
        <Box className='about-section' flexDirection={"column"} sx={{backgroundColor: 'white', minHeight: '70vh'}}>
            <Typography fontSize={42} fontWeight={600}>According to a survey by Women Tech Network, women hold only 28% of jobs in the tech industry</Typography>
            <Typography fontSize={30} fontWeight={300}>This lack of representation can have significant consequences, including limited opportunities for women in the industry, a lack of diverse perspectives and ideas, and a perpetuation of gender biases and stereotypes. That’s why we are committed to addressing these issues and promoting greater diversity and inclusion in tech, as well as fostering a sense of community and empowerment across the board.</Typography>
        </Box>
        <Section color={'secondary'} height={'75vh'}/>
        <Section color={'white'} height={'75vh'}/>
        <Section color={'primary'} height={'25vh'}/>
      </div>
  )
}

export default App;
