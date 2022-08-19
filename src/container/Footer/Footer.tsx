import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Come And Drink Coffee Together <span>On Me</span></h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:isekaicode@gmail.com" className="p-text">isekaicode@gmail.com</a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel: (216) 29-073-200" className="p-text">(+216) 29-073-200</a>
        </div>
      </div>
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="button" className="p-text" >Send Me</button>
        </div>
    </>
  );
};

export default AppWrap(Footer, 'contact', 'app__contact');