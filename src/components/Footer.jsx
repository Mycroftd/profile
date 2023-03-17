import React from 'react'
import logo from '../images/logos/logo.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-top'>
        <div className='footer-logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='footer-menu'>
          <a href="#headerId">Top</a>
          <a href="#about">About</a>
          <a href="#expertise">Skills</a>
          <a href="#portfolio">Portfolio</a>          
        </div>
        <div className='footer-icons'>
          <img src={github} alt="github logo" />
          <img src={linkedin} alt="linkedin logo" />
        </div>
      </div>
      <div className='footer-bottom'>
        <span>Coded by David Mycroft</span>
      </div>
    </div>
  )
}
