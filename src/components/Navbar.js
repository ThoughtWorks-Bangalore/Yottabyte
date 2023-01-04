import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import "./Navbar.css";

const RedirectToThoughtworksPage = () => {
    window.open("https://www.thoughtworks.com/");
}

export const Navbar = () => {
  return (
    <div className="app_bar">
        <AppBar sx={{ bgcolor: "#edf1f3", boxShadow: "none", color: "black", position: "fixed" }}>
        <Toolbar className="navbar">
          <Typography className="navbar_button" variant="h7" component="div" onClick={RedirectToThoughtworksPage}>
            Thoughtworks
          </Typography>
            <div className='buttons'>
                <div className="navbar_button" color="inherit">About</div>
                <div className="navbar_button" color="inherit">Agenda</div>
                <div className="navbar_button" color="inherit">Speakers</div>
                <div className="navbar_button" color="inherit">Registration</div>
            </div>
        </Toolbar>
      </AppBar>

    </div>
    
  )
}


