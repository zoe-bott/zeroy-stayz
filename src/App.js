import logo from './logo.png'
import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Splash } from './splash/index';

export const App = () => {
  return (
    <Box sx={{ margin: "20px 300px" }}>
      <div className="App">
        <header>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={logo} alt="Zeroy stayz logo" height="200px" />
            <Button sx={{ height: 40 }} variant='contained' color="secondary">Book now</Button>
          </Box>
        </header>
        <Splash />
      </div>
    </Box>
  );
}

export default App;
