import React from 'react';

import { AppWrap } from '../../wrapper';
import './Research.scss';

const Research = () => {
  return (
    <>
      <h2 className='head-text'> <span>Bonus</span> Research For <span>Nerds</span> </h2>

      <div className="app__research-item app__flex">

      </div>
    </>
  );
}

export default AppWrap(Research, 'research', 'app__research');