import React from "react";
import csharp from "../images/logos/csharp.png";
import html from "../images/logos/html.png";
import javascript from "../images/logos/javascript logo.png";
import sql from "../images/logos/SQL.png";

export const Skills = () => {
  return (
    <div className="skills-outer-container" id="expertise">
      <div className="skills-titles">
        <h2>My Skills</h2>
        <h3>My Expertise</h3>
      </div>
      <div className="skills-container">
        <div>
            <img src={javascript} alt="javascript logo" />
          <h4>JavaScript</h4>
          <p>Creating Websites and Apps using Node.js, React and Express.</p>
        </div>
        <div>
            <img src={html} alt="html logo" />
          <h4>HTML/CSS</h4>
          <p>Creating Websites using HTML and CSS</p>
        </div>
        <div>
        <img src={sql} alt="sql logo" />
          <h4>SQL</h4>
          <p>Creating, altering and updating databases using SQL.</p>
        </div>
        <div>
        <img src={csharp} alt="c sharp logo" />
          <h4>Java/C#</h4>
          <p>Creating software using Java and Unity games using C#</p>
        </div>
      </div>
    </div>
  );
};
