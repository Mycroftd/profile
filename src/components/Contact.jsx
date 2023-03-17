import React from "react";
import ContactForm from "./ContactForm";

export const Contact = () => {



  return (
    <div className="contact-outer-div" id="contact">
      <div className="contact-container">
        <div className="details">
          <h2>David Mycroft</h2>
          <h3>Junior Programmer</h3>
          <h4>My Person Email</h4>
          <p>mycroftd@hotmail.com</p>
          <h4>My LinkedIn</h4>
          <p>https://www.linkedin.com/in/david-mycroft-2b421563/</p>
        </div>
        <div className="contact-outer">
          <div className="bluepattern"></div>
          <div className="form-container">
            <div>
              <h3>Contact</h3>
              <h3>Me.</h3>
            </div>
            <div>
             <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
