
import React from 'react';
import { Box } from '@mui/material';
import { Splash } from './splash/index';
import { Navbar } from './navbar';

export const App = () => {
  return (
    <Box sx={{ margin: "20px 300px" }}>
      <div className="App">
        <Navbar />
        <Splash />
      </div>
    </Box>
  );
}

export default App;
