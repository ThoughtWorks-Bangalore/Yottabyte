import React from "react";

import "./Agenda.css";

export const Agenda = () => {
  return (
    <div className="agenda_section" id="agenda">
      <h2 className="agenda_heading">Agenda</h2>
      <div className="agenda_dates">
        <div className="row">
          <h6>Day 1 - 25th March, 2022</h6>
        </div>
        <div>
          <div>
            <p>14:00 - 14:10</p>
          </div>
          <div>
            <p>Introduction to Converge</p>
          </div>
        </div>
      </div>
    </div>
  );
};
