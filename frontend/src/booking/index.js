import { Box } from "@mui/material";
import React from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { Navbar } from "../navbar";

export const Booking = () => {
  return (
    <Box sx={{ margin: "20px 300px" }}>
      <Navbar />
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
