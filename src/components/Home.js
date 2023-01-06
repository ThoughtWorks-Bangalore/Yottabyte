import React from "react";

import { Introduction } from "./Introduction";
import { About } from "./About";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Introduction />
      <About />
    </div>
  );
};
