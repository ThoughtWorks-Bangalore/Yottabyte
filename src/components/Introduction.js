import React, { useEffect, useState } from "react";
import "./Introduction.css";
import { RedirectToURL } from "../helpers/Redirection";
import logo from "./../assets/tw-logo.png";

export const Introduction = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  useEffect(() => {
    const targetDate = new Date('2023-05-12');
    const timeDiff = targetDate.getTime() - new Date().getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysLeft(daysLeft);
  }, []);
  return (
    <section className="introduction_section">
      <img
        src={logo}
        alt="logo"
        className="logo"
        onClick={() => RedirectToURL("https://www.thoughtworks.com/")}
      />
      <h1 className="heading"> Yottabyte 2023, India </h1>
      <p className="description">
        Yottabyte aims to bring together ideators, designers, analysts, solution
        providers, and technologists to connect, collaborate and learn from each
        other.
      </p>
      <div className="details">
        <div className="edition">
          <h6 className="belowDotted">
            12<sup>th</sup> May 2023
          </h6>
        </div>
        <div className="days">
          <h6 className="belowDotted">{daysLeft} days left </h6>
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
