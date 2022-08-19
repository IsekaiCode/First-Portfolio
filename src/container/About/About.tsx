import React from 'react';

import { AppWrap } from '../../wrapper';
import './About.scss';


const About = () => {
  return (
    <>
      <h2 className='head-text'>
        If you want to really learn something,
        <br />
        <span>try teaching it to somoene else.</span>
      </h2>
    </>
  );
}

export default AppWrap(About, 'about', 'app__about');