import React from "react";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_text">
        <a href="window.location.href=this" className="footer_links">
          {" "}
          Converge Bangalore{" "}
        </a>
        <p className="text"> sponsored by </p>
        <a href="https://www.thoughtworks.com/" className="footer_links">
          {" "}
          Thoughtworks{" "}
        </a>
      </div>
    </div>
  );
};
