import React from "react";
import portfolio from "../images/portfolio/react.png";
import computerGame from "../images/portfolio/computer game.png";
import api from "../images/portfolio/api.png";

export const Portfolio = () => {
  return (
    <div className="outer-portfolio" id="portfolio">
      <div className="portfolio-titles">
        <h2>Recent Projetts</h2>
        <h3>My Portfolio</h3>
      </div>
      <div className="portfolios">
        <div>
          <img src={portfolio} alt="portfolio" />
          <h4>
            <a
              href="https://euphonious-sundae-44817e.netlify.app/reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              Game Review
            </a>
          </h4>
          <p>A React App utilising a Node API</p>
        </div>
        <div>
          <img src={computerGame} alt="computer game site" />
          <h4>
            <a
              href="https://fluffy-belekoy-21f1e2.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer Game Site
            </a>
          </h4>
          <p>
            A react app that uses an external api to show information about
            computer games. Uses a CORS enabledserver to allow data to be used
            within the React application
          </p>
        </div>
        <div>
          <img src={api} alt="portfolio" />
          <h4>
            <a
              href="https://be-nc-games-t92d.onrender.com/api/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Api for Game Reviews
            </a>
          </h4>
          <p>A Node API for game reviews</p>
        </div>
      </div>
    </div>
  );
};
