import React from 'react';

import "./Introduction.css";
import { RedirectToThoughtworksPage } from "./../helpers/ThoughtworksRedirection";
import logo from "./assets/tw-logo.png";

export const Introduction = () => {
  return (
    <div className="introduction_section">
        <img src={logo} alt="logo" className="logo" onClick={RedirectToThoughtworksPage}/>
    </div>
  )
}
