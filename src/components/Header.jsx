import React from "react";
import face from "../images/face.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

export const Header = () => {
  return (
    <header id="headerId">
      <div className="header-container">
        <div className="left">
          <span>Hey, I'm David</span>
          <h1>
            I'm Looking for a job in <span id="bluetext">programming</span>
          </h1>
          <p>
            Having just completed a Northcoders boot camp I'm now looking a
            junior programming role.
          </p>
          <a href="#contact">
            <button className="blueButton">Contact Me</button>
          </a>
          <a href="#portfolio">
            <button className="otherButton">See Porfolio</button>
          </a>
        </div>
        <div className="right">
          <img src={face} alt="David Mycroft" />
        </div>
      </div>
      <div className="links-container">
        <div className="links">
          <a
            href="https://www.linkedin.com/in/david-mycroft-2b421563/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin logo" />
          </a>

          <a href="https://github.com/Mycroftd" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github logo" 
            rel="noopener noreferrer"/>
          </a>
        </div>
      </div>
    </header>
  );
};
