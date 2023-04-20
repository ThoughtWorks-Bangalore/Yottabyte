import React from "react";

import "./Speakers.css";
import { KeynoteSpeakerDetails, SpeakerDetails } from "../helpers/SpeakerDetails";

const SpeakerDescription = ({ name, designation, image}) => {

  return (
    <div className="speakers_list_description">
      <div className="image">
        <img src={image} alt="speaker-img" className="speakers_image" />
      </div>

      <div className="speaker_details">
        <p className="speaker_name"> {name} </p>
        <p className="speaker_designation"> {designation} </p>
        {/* <p className="speaker_company">CredAvenue</p> */}
      </div>
    </div>
  );
};

export const Speakers = () => {

  return (
    <div className="speakers_section" id="speakers">
      <p className="speakers_heading">Speakers</p>
      <div className="speaker_keynoteSpeakers_list">
        {
          KeynoteSpeakerDetails.map((speaker, index) => {
            console.log(speaker);

            return (
              <SpeakerDescription 
                key={index}
                name={speaker.name} 
                designation={speaker.designation} 
                image={speaker.image} />
            );
          })
        }
      </div>
      <div className="speaker_list">
        {
          SpeakerDetails.map((speaker, index) => {
            console.log(speaker);

            return (
              <SpeakerDescription 
                key={index}
                name={speaker.name} 
                designation={speaker.designation} 
                image={speaker.image} />
            );
          })
        }
      </div>
    </div>
  );
};
