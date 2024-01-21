import React from 'react';
import logo from './logo.png'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <header>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img onClick={() => navigate('/')} src={logo} alt="Zeroy stayz logo" height="200px" />
                <Button onClick={() => navigate('/book')} sx={{ height: 40 }} variant='contained' color="secondary">Book now</Button>
            </Box>
        </header>
    )
}