import React, { FC } from 'react';
//import styles from './Navbar.module.css';

import './Abouteme.page.scss';

interface AboutmeProps {}

const AboutmePage: FC<AboutmeProps> = () => {
  
  return (
  <div id='main'>
    <div id="hidiv">
      <h1 >HI</h1>
      <h1>I'm Paweł Piórkowski</h1>
      <h1 id="portfolio">Welcome to my porfolio</h1>
      <br/>
    </div>
    <div className="skill-container">
    <h1>Skill Set</h1>
    <div className="bar advanced" data-skill="C/C++"></div>
    <div className="bar front intermediate" data-skill="Python"></div>
    <div className="bar back advanced" data-skill="TypeScript"></div>

    </div>
    <div className="skill-container">
    <h1>Technologies</h1>
    <div className="bar back advanced" data-skill="React"></div>
    <div className="bar back advanced" data-skill="Node.js"></div>
    <div className="bar front intermediate" data-skill="Databases"></div>
    <div className="bar front intermediate" data-skill="Tenserflow"></div>
    <div className="bar basic" data-skill="RTOS"></div>


    </div>
    <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul className="timeline">
                 <li className="timeline-item period">
                    <div className="timeline-info"></div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h2 className="timeline-title">Work Experience</h2>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>November 2020 - October 2021</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Elzab S. A.</h3>
                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque.</p>
                    </div>
                </li>
                
                <li className="timeline-item period">
                    <div className="timeline-info"></div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h2 className="timeline-title">Education</h2>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>March 2023 - Now</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Master Degree</h3>
                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque.</p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>September 2019 - Febuary 2023</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Bachelor Degree</h3>
                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque. </p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>April 02, 2016</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Technical High School</h3>
                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque. </p>
                    </div>
                </li>
            </ul>
    </div>
  </div>
)};

export default AboutmePage;
