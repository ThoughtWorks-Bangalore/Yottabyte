import React from "react";
import "./Introduction.css";
import { RedirectToThoughtworksPage } from "./../helpers/ThoughtworksRedirection";
import logo from "./assets/tw-logo.png";
import Typography from "@mui/material/Typography";

export const Introduction = () => {
  return (
    <section className="introduction_section">
      <img
        src={logo}
        alt="logo"
        className="logo"
        onClick={RedirectToThoughtworksPage}
      />
      <h1 className="heading"> YottaBytes 2023, Bengaluru </h1>
      <p className="description">
        YottaBytes aims to bring together ideators, designers, analysts,
        solution providers, and technologists to connect, collaborate and learn
        from each other.
      </p>
    </section>
  );
};
