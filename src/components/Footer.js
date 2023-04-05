import React from "react";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_text">
        <a href="/" className="footer_links">
          {" "}
          Yottabyte India{" "}
        </a>
        <p className="text"> sponsored by </p>
        <a href="https://www.thoughtworks.com/" className="footer_links" target="__blank">
          {" "}
          Thoughtworks{" "}
        </a>
      </div>
    </div>
  );
};
