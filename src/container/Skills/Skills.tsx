import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { skills } from '../../constants';
import './Skills.scss';

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Skills <span>&</span> Experience</h2>

      <div className="app__skills-container app_flex">
        <motion.div className="app__skills-list app__flex">
          {skills.map((skill, index) => (
            <motion.div
              transition={{ duration: 0.5 }}
              whileInView={{opacity: [0, 1]}}
              className="app__skills-item app__flex"
            >
              <div
                className="overlay_circle app__flex"
                style={{ backgroundColor: 'white' }}
              >
                <img src={skill[0]} alt={`"skill-${index}"`} />
              </div>
              <p className="p-text">{skill[1]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(Skills, 'skills', 'app__skills');