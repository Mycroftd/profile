import React from "react";
import aston from "../images/aston.png";
import north from "../images/Northcoders.png";

export const Aboutme = () => {
  return (
    <div className="aboutme-outer-container" id="about">
      <div className="aboutme-container">
        <div className="aboutme-left">
          <h2>About Me.</h2>
        </div>
        <div className="aboutme-right">
          <p>
            A recent career changer, I am now seeking a career within software
            development. Holding a first class degree in Computer Science with
            Multimedia, I have recently completed an intensive coding bootcamp to
            update my skills and learn about modern approaches to software
            development. During the bootcamp I have been able to learn, in
            detail, about test driven development, version controls and
            collaboration as well as front and back end development. I am now
            seeking a role where I can continue my learning journey and undertake
            a challenging, yet rewarding role.
          </p>
        </div>
      </div>
      <div className="study-logos-container">
        <img src={aston} alt="aston university logo"/>
        <img src={north} alt="northcoders logo"/>
      </div>
    </div>
  );
};
