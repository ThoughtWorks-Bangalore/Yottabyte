import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import "./About.css";
import { RedirectToURL } from "../helpers/Redirection";

export const About = () => {
  return (
    <div className="about_section" id="about">
      <div className="social_links">
        <div
          className="facebook_logo"
          onClick={() =>
            RedirectToURL("https://www.facebook.com/Thoughtworks/")
          }
        >
          <ThumbUpAltIcon className="facebook_icon" />
        </div>
        <div
          className="linkedin_logo"
          onClick={() =>
            RedirectToURL("https://www.linkedin.com/company/thoughtworks/")
          }
        >
          <LinkedInIcon className="linkedin_icon" />
        </div>
        <div className="twitter_logo">
          <TwitterIcon
            className="twitter_icon"
            onClick={() => RedirectToURL("https://twitter.com/thoughtworksIN")}
          />
        </div>
        <div className="email_logo">
          <a href="mailto:yottabyte_india_core_group@thoughtworks.com">
            <EmailRoundedIcon className="email_icon" />
          </a>
        </div>
      </div>
      <div className="about_details">
        <h4 className="about_heading"> Data and AI for love and for money </h4>
        <p className="about_description">
          In today’s dynamic business environment, leaders are increasingly
          navigating economic duress with data driven decisions. Amidst the
          multitude of decisions being made every minute – how do we ensure they
          are being made for the right reasons? Will it help businesses generate
          greater value to better understand the emotions behind customers’
          decisions?
        </p>
        <p className="about_description">
          Dare we say, decisions are a response to or of love. They could also
          be related to money. We have seen how data and AI, when exclusively
          tailored to love as a motivation, have customers fall in love with
          brands. Data and AI, when adapted for money as a motivation, make
          businesses exceedingly profitable.
        </p>
        <p className="about_description">
          However, data and AI that is designed to look at love and money as
          propellers can turn all that customer love into hard cash and cut the
          cost of reaching one’s beloved customers. 2023’s Yottabyte dives into
          how Data and AI can incorporate a love for responsible tech, for
          respecting customers’ privacy, for operational efficiency, for revenue
          maximization, for inclusivity and much more!
        </p>
        <p className="registration_details">
          <i>Venue: Thoughtworks Koramangala and Gurgaon offices.</i>
        </p>
        <button
          className="register_button"
          onClick={() => RedirectToURL("https://forms.gle/V3LkS2YiRUyiRPgk9")}
        >
          {" "}
          Register Now{" "}
        </button>
        <p className="email_details">
          If you have any questions, you can send an email to:
        </p>
        <a
          href="mailto:yottabyte_india_core_group@thoughtworks.com"
          className="email"
        >
          <em> yottabyte_india_core_group@thoughtworks.com </em>
        </a>
      </div>
    </div>
  );
};
