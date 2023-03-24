import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'

import Header from './components/header/header';
import { Box, Typography } from '@mui/material';
import Section from './components/section/section';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003847',
    },
    secondary: {
      main: '#F8DED2',
    },
    white: {
      main: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: [
      'Source Sans Pro', 
      'sans-serif'
    ].join(','),
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App;
