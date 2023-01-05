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
      <div className="details">
        <div className="edition">
          <p class="aboveDotted">
            1<sup>st</sup> edtion
          </p>
          <h6 className="belowDotted">
            25<sup>th</sup> - 26<sup>th</sup> September
          </h6>
        </div>
        <div className="days">
          <p class="aboveDotted"> Days Left </p>
          <h6 className="belowDotted">0 days left </h6>
        </div>
      </div>
      <div className="buttonSection">
        <h4 className="agendaButton"> Agenda </h4>
        <h4 className="speakerButton"> Speakers </h4>
      </div>
    </section>
  );
};
