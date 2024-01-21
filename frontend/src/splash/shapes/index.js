import { Box } from "@mui/material";
import React from "react";

export const Shapes = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          {/* top left */}
          <Box sx={{
            background: '#12100E',
            height: "200px",
            width: "200px",
            borderRadius: "40% 0 0 40%",
          }} />
          {/* middle left */}
          <Box sx={{
            // border: "8px solid #F75590",
            boxShadow: "inset 0 0 0 18px #F75590",
            height: "200px",
            width: "200px",
          }}
          />
          {/* middle bottom */}
          <Box sx={{
            borderRadius: "40% 40% 0 40%",
            height: "200px",
            width: "200px",
            background: '#F75590',
          }}
          />
        </Box>
        {/* top middle */}
        <Box sx={{
          background: '#FF934F',
          width: "141.4px",
          height: '141.4px',
          rotate: '45deg',
          margin: '29px',
        }} />
        <Box>
          {/* top right */}
          <Box sx={{
            background: '#76B041',
            width: '200px',
            height: '400px',
            borderRadius: "0 50% 50% 0",
          }} />
          {/* bottom right */}
          <Box sx={{
            background: '#F75590',
            width: '200px',
            height: '200px',
            borderRadius: "0 100% 0 0",
          }} />
        </Box>
      </Box>

    </Box>);
};
