import React, { useState } from "react";
import logoPic from "../images/logos/logo.png";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="menu-container">
        <div className="logo">
          <img src={logoPic} alt="site logo" />
        </div>
          <div className={menuOpen ? "menu on" : "menu"}>
            <a
              onClick={() => {
                setMenuOpen(false);
              }}
              href="#about"
              rel="noopener noreferrer"
            >
              About
            </a>
            <a
              onClick={() => {
                setMenuOpen(false);
              }}
              href="#expertise"
              rel="noopener noreferrer"
            >
              Skills
            </a>
            <a
              onClick={() => {
                setMenuOpen(false);
              }}
              href="#portfolio"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
            <a
              onClick={() => {
                setMenuOpen(false);
              }}
              href="#contact"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <div
              className={menuOpen ? "close closeShow" : "close"}
              onClick={() => {
                setMenuOpen(false);
              }}
            ></div>
          </div>

        <div className="contact-me">
          <button className="blueButton">
              <a
                onClick={() => {
                  setMenuOpen(false);
                }}
                href="#contact"
                rel="noopener noreferrer"
              >
                Contact
              </a>
          </button>
        </div>
        <div
          className="burgerContainer"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </div>
    </nav>
  );
};
