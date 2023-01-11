import React from "react";
import "./Introduction.css";
import { RedirectToURL } from "../helpers/Redirection";
import logo from "./../assets/tw-logo.png";

export const Introduction = () => {
  return (
    <section className="introduction_section">
      <img
        src={logo}
        alt="logo"
        className="logo"
        onClick={() => RedirectToURL("https://www.thoughtworks.com/")}
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
            25<sup>th</sup> - 26<sup>th</sup> January
          </h6>
        </div>
        <div className="days">
          <p class="aboveDotted"> Days Left </p>
          <h6 className="belowDotted">0 days left </h6>
        </div>
      </div>
      <div className="buttonSection">
        <h4 className="agendaButton">
        <a href="#agenda" className="button_links">
                Agenda
              </a>
        </h4>
        <h4 className="speakerButton"> 
        <a href="#speakers" className="button_links">
                Speakers
              </a>
        </h4>
      </div>
    </section>
  );
};
