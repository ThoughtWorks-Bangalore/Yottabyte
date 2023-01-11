import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "./Navbar.css";
import { RedirectToURL } from "./../helpers/Redirection";

export const Navbar = () => {
  return (
    <div className="app_bar">
      <AppBar
        sx={{
          bgcolor: "#edf1f3",
          boxShadow: "none",
          color: "black",
          position: "fixed",
        }}
      >
        <Toolbar className="navbar">
          <Typography
            className="navbar_button"
            variant="h7"
            component="div"
            onClick={() => RedirectToURL("https://www.thoughtworks.com/")}
          >
            Thoughtworks
          </Typography>
          <div className="buttons">
            <div className="navbar_button" color="inherit">
              <a href="#about" className="nav_links">
                About
              </a>
            </div>
            <div className="navbar_button" color="inherit">
              <a href="#agenda" className="nav_links">
                Agenda
              </a>
            </div>
            <div className="navbar_button" color="inherit">
              <a href="#speakers" className="nav_links">
                Speakers
              </a>
            </div>
            <div className="navbar_button" color="inherit">
            <a href="https://forms.gle/V3LkS2YiRUyiRPgk9" className="nav_links" target="__blank">
                Registration
              </a>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
