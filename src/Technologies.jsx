import React from 'react';
import { FaCss3Alt, FaHtml5, FaReact, FaWordpress } from 'react-icons/fa';
import { SiJavascript, SiMui } from 'react-icons/si';

const Technologies = () => {
  return (
    <section className="tech-section" id="technologies">
      <div className="tech-center">
        <div className="title">
          <h2>TECH STACK</h2>
          <div className="title-underline"></div>
        </div>
        <div className="tech-div">
          <div className="tech-div-name">
            <FaHtml5
              className="tech-icon"
              style={{ color: '#ff9100' }}
            ></FaHtml5>
            <p>HTML</p>
          </div>
          <div className="tech-div-name">
            <FaCss3Alt
              className="tech-icon"
              style={{ color: '#2161ac' }}
            ></FaCss3Alt>
            <p>CSS</p>
          </div>
          <div className="tech-div-name">
            <SiJavascript
              className="tech-icon"
              style={{ color: '#60a313' }}
            ></SiJavascript>
            <p>JS</p>
          </div>
          <div className="tech-div-name">
            <FaReact
              className="tech-icon"
              style={{ color: '#5ed3f3' }}
            ></FaReact>
            <p>React</p>
          </div>
          <div className="tech-div-name">
            <FaWordpress
              className="tech-icon"
              style={{ color: '#000000' }}
            ></FaWordpress>
            <p>WP</p>
          </div>
          <div className="tech-div-name">
            <SiMui className="tech-icon" style={{ color: '#00aaf7' }}></SiMui>
            <p>MUI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
