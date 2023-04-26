import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from "./routes/root";
import About from './routes/about';
import Events from './routes/events';
import Contact from './routes/contact';
import Sponsor from './routes/sponsor';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/sponsor",
    element: <Sponsor />,
  },

]);

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


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
