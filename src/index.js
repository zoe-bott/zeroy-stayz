import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GentyDemo from './fonts/GentyDemo-Regular.otf'
import { Booking } from './booking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/book',
    element: <Booking />,
  }
]);

const theme = createTheme({
  palette: {
    //   black - 12100E
    // orange - FF934F
    // green - 76B041
    // pink - F75590
    // white - FCFAF9
    primary: { main: "#76B041", contrastText: "#12100E" },
    secondary: { main: "#FF934F" },
  },
  typography: {
    h3: {
      fontFamily: 'GentyDemo',
    },
    button: {
      fontWeight: 'bold'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'GentyDemo';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('GentyDemo'), local('GentyDemo'), url(${GentyDemo}) format('opentype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

