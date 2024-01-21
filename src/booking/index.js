import { Box, Button } from "@mui/material";
import React from "react";
import logo from "../logo.png";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

export const Booking = () => {
  return (
    <Box sx={{ margin: "20px 300px" }}>
      <header>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Zeroy stayz logo" height="200px" />
          <Button sx={{ height: 40 }} variant="contained" color="secondary">
            Book now
          </Button>
        </Box>
      </header>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateRangeCalendar']}>
            <DateRangeCalendar />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </Box>
  );
};
