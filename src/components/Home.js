import React from "react";

import { Introduction } from "./Introduction";
import { About } from "./About";
import "./Home.css";
import { Agenda } from "./Agenda";
import { Speakers } from "./Speakers";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div className="home">
      <Introduction />
      <About />
      <Agenda />
      <Speakers />
      <Footer />
    </div>
  );
};
