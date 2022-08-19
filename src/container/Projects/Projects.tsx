import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { projects } from '../../constants';
import './Projects.scss';

const Projects = () => {

  const [activeFilter, setActiveFilter] = useState('UI/UX');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleProjectFilter = (item : string) => {
    
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
    setTimeout(() => {
      setActiveFilter(item);
    }, 500);
  };
  return (
    <>
      <h2 className='head-text'>Featured <span>Portfolio</span> Projects</h2>

      <div className="app__projects-filter app__flex">
        {['UI/UX', 'Web App', 'Mobile App', 'Desktop App', 'Other'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(item)}
            className={`app__projects-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
            
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__projects-portfolio"
      >
        {projects[activeFilter].map((project, index) => (
          <div className="app__projects-item app__flex" key={index}>
            <div className="app__projects-img app__flex">
              <img src={project[0]} alt={`"project-${index}"`} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__projects-hover app__flex"
              >
                <a href={project[2]} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={project[3]} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__projects-content app__flex">
              <h4 className="bold-text">{project[1]}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{project[4]}</p>

              <div className="app__projects-tag app__flex">
                <p className="p-text">{project[5]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(Projects, 'projects', 'app__projects');