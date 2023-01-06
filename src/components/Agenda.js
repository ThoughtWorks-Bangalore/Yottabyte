import React from "react";

import "./Agenda.css";

export const Agenda = () => {
  return (
    <div className="agenda_section" id="agenda">
      <h2 className="agenda_heading">Agenda</h2>
      <div className="agenda_schedule">
        <div className="agenda_day">
          <p className="agenda_subheading">Day 1 - 25th March, 2022</p>
        </div>
        <div className="schedule-info">
          <div className="timing">
            <p>14:00 - 14:10</p>
          </div>
          <div className="seperation">$</div>
          <div className="detail">
            <p>Introduction to Converge.</p>
          </div>
        </div>
        <div className="schedule-info">
          <div className="timing">
            <p>14:00 - 14:10</p>
          </div>
          <div className="seperation">$</div>
          <div className="detail">
            <p>Metaverse as a Service Vinodh Arumugam</p>
          </div>
        </div>
        <div className="schedule-info">
          <div className="timing">
            <p>14:00 - 14:10</p>
          </div>
          <div className="seperation">$</div>
          <div className="detail">
            <p>
              XaaS: Looking back to look forward Panelists - Madhavi Das, Rohit
              Karlo, Gunjan Shukla Moderator - Vinod Sankaranarayanan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
