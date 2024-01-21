import React from "react";
import { Shapes } from "./shapes";
import { Box, Button, Typography } from "@mui/material";

export const Splash = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", marginTop: '30px' }}>
        <Box sx={{ flexGrow: '1', width: "50%", alignSelf: "center", padding: "20px" }}>
          <Typography variant="h3" component="div">

            Need a place to crash in <span style={{ color: "#FF934F" }}>Melbourne?</span>
          </Typography>
          <Typography variant="h5">
            Or maybe you really do miss Zoe and Leroy...
          </Typography>
        </Box>
        <Box sx={{ flexGrow: '1', width: "50%" }}><Shapes /></Box>
      </Box >
      <Typography variant="h3" component="div" sx={{ marginTop: '150px' }}>
        Come <span style={{ color: '#76B041' }}>Stayz</span> with <span style={{ color: '#F75590' }}>Zeroy</span>
      </Typography>
      <Button sx={{ height: 40, marginTop: '40px', marginBottom: '120px' }} variant='contained' color="secondary">Book now</Button>
    </Box>
  );
};
