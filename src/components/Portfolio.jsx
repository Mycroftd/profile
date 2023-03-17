import React from "react";
import portfolio from "../images/portfolio/react.png";
import spaceWars from "../images/portfolio/space wars.png";
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
          <img src={spaceWars} alt="spaceWars" />
          <h4>
            <a href="http://spacewarsfront.eu-4.evennode.com/" target="_blank" rel="noopener noreferrer">
              Space Wars
            </a>
          </h4>
          <p>A two player space game using websockets and PIXI.js</p>
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
