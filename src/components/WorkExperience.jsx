import React from "react";
import mac from "../images/imac.jpg";

export const WorkExperience = () => {
  return (
    <div className="work-experience-outer">
      <div className="work-experience-container">
        <div className="history">
          <h3>EMPLOYMENT/EXPERIENCE HISTORY</h3>
          <ul>
            <li>
              <h4>Coding Bootcamp</h4>
              <h5>at Northcoders</h5>
              <p>2022 - 2023</p>
            </li>
            <li>
              <h4>Customer Assistant</h4>
              <h5>at New Life Charity</h5>
              <p>2021 - Present</p>
            </li>
            <li>
              <h4>Web Developer Placement</h4>
              <h5>EvolveNet</h5>
              <p>2013 - 2014</p>
            </li>
          </ul>
        </div>
        <div className="skills">
          <h3>SKILL AND EXPERTISE</h3>
          <ul>
            <li>
              Node
              <div className="slider">
                <div style={{ width: "70%" }} className="slider-inner"></div>
              </div>
            </li>
            <li>
              Express
              <div className="slider">
                <div style={{ width: "60%" }} className="slider-inner"></div>
              </div>
            </li>
            <li>
              React
              <div className="slider">
                <div style={{ width: "65%" }} className="slider-inner"></div>
              </div>
            </li>
            <li>
              HTML/CSS
              <div className="slider">
                <div style={{ width: "80%" }} className="slider-inner"></div>
              </div>
            </li>
          </ul>
          <img src={mac} alt="imac"/>

        </div>
      </div>
    </div>
  );
};
