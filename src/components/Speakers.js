import React from "react";

import "./Speakers.css";
import speakerImg from "../assets/speaker-img.jpeg";

const SpeakerDescription = () => {
  return (
    <div className="speakers_list_description">
      <div className="image">
        <img src={speakerImg} alt="speaker-img" className="speakers_image" />
      </div>

      <div className="speaker_details">
        <p className="speaker_name">Bharat Krishnamurthy</p>
        <p className="speaker_designation">Vice President</p>
        <p className="speaker_company">CredAvenue</p>
      </div>
    </div>
  );
};

export const Speakers = () => {
  return (
    <div className="speakers_section" id="speakers">
      <p className="speakers_heading">Speakers</p>
      <div className="speaker_list">
        <SpeakerDescription />
        <SpeakerDescription />
        <SpeakerDescription />
        <SpeakerDescription />
        <SpeakerDescription />
        <SpeakerDescription />
        <SpeakerDescription />
        <SpeakerDescription />
      </div>
    </div>
  );
};
