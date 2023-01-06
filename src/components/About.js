import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import "./About.css";

export const About = () => {
  return (
    <div className="about_section">
      <div className="social_links">
        <div className="facebook_logo">
          <ThumbUpAltIcon className="facebook_icon" />
        </div>
        <div className="linkedin_logo">
          <LinkedInIcon className="linkedin_icon" />
        </div>
        <div className="twitter_logo">
          <TwitterIcon className="twitter_icon" />
        </div>
        <div className="email_logo">
          <EmailRoundedIcon className="email_icon" />
        </div>
      </div>
      <div className="about_details">
        <h4 className="about_heading"> XaaS - Anything as a Service </h4>
        <p className="about_description">
          XaaS - an acronym for Anything as a Service, a term widely used to
          categorize products, tools and other services. In the 7th edition of
          Converge we will focus on how XaaS is an alternative for everything,
          and how it has been adopted by organizations and technologists.
        </p>
        <p className="registration_details">
          <i>
            Don't forget to register for virtual Converge happening on 25th &
            26th March 2022!
          </i>
        </p>
        <button className="register_button"> Register Now </button>
        <p className="email_details">
          If you have any questions, you can send an email to:
        </p>
        <a href="mailto:yottabytes-bangalore@thoughtworks.com" className="email">
          <em> yottabytes-bangalore@thougtworks.com </em>
        </a>
      </div>
    </div>
  );
};
