import React from 'react';
import heroImg from './assets/hero-image.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <div className="hero-center">
          <div className="hero-title">
            <h1>Lubo Hlavina</h1>
            <h4>Frontend developer</h4>
            <p>turning ideas into interactive reality</p>
            <div className="icons-div">
              <a href="https://github.com/HopCip" target="_blank">
                <FaGithub className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/%C4%BEubom%C3%ADr-hlavina-ba21a5212/"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
            <div className="btn-div">
              <a href="#projects" className="btn">
                Portfolio
              </a>
            </div>
          </div>
          <div className="img-container">
            <img src={heroImg} alt="man on browser" className="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
