import React, { FC } from 'react';
//import styles from './Navbar.module.css';

import './Abouteme.page.scss';
import { Card } from 'react-bootstrap';

interface AboutmeProps {}

const AboutmePage: FC<AboutmeProps> = () => {
  
  return (
  <div id='main'>
    <Card id="hidiv">
      <Card.Body>
        <Card.Title>HI</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">I'm Paweł Piórkowski</Card.Subtitle>
        <Card.Text>
          Welcome
        </Card.Text>
        <Card.Link href="https://www.linkedin.com/in/pawe%C5%82-pi%C3%B3rkowski-084b2518b/">LinkedIn</Card.Link>
        <Card.Link href="https://github.com/InKronos">Github</Card.Link>
        <Card.Link href="CV_Paweł_Piórkowski.pdf">Download CV</Card.Link>
      </Card.Body>
    </Card>
    <div className="skill-container">
    <h1>Skill Set</h1>
        <div className="icon-container">
            <div className="icon-wrapper">
                <i className="devicon-c-plain colored icon"></i>
                <p className="description">C</p>
            </div>
            <div className="icon-wrapper">
                <i className="devicon-cplusplus-plain colored icon"></i>
                <p className="description">C++</p>
            </div>
            <div className="icon-wrapper">
                <i className="devicon-typescript-plain colored icon"></i>
                <p className="description">TypeScript</p>
            </div>
            <div className="icon-wrapper">
                <i className="devicon-python-plain colored icon"></i>
                <p className="description">Python</p>
            </div>
            <div className="icon-wrapper">
                <i className="devicon-php-plain colored icon"></i>
                <p className="description">PHP</p>
            </div>
            <div className="icon-wrapper">
                <i className="devicon-java-plain colored icon"></i>
                <p className="description">Java</p>
            </div>
        </div>
    </div>
    <div className="skill-container">
    <h1>Technologies</h1>
    <div className="icon-container">
            <div className="icon-wrapper">
                <i className="devicon-react-original colored icon"></i>
                <p className="description">React</p>
            </div>
            <div className="icon-wrapper">
                <i className="devicon-angularjs-plain colored icon"></i>
                <p className="description">Angular</p>
            </div>
            <div className="icon-wrapper">
                <i className="devicon-nodejs-plain-wordmark colored icon"></i>
                <p className="description">NodeJS</p>
            </div>
            <div className="icon-wrapper">
                <i className="devicon-azuresqldatabase-plain colored icon"></i>
                <p className="description">Databases</p>
            </div>
            <div className="icon-wrapper">
                <i className="devicon-tensorflow-original colored icon"></i>
                <p className="description">Tensorflow</p>
            </div>
            <div className="icon-wrapper">
                <i className="devicon-linux-plain colored icon"></i>
                <p className="description">Linux</p>
            </div>
            <div className="icon-wrapper">
                <i className="devicon-ros-original colored icon"></i>
                <p className="description">ROS</p>
            </div>
        </div>
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
                        <p>Work as a support developer in software maintenance and website development.</p>
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
                        <p>Master's Degree in Computer Science at the Silesian University of Technology, specializing in Internet of Things.</p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>October 2019 - Febuary 2023</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Bachelor Degree</h3>
                        <p>Bachelor's Degree in Computer Science at the Silesian University of Technology, specializing in Computer Graphics. </p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>September 2015 - May 2019</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Technical High School</h3>
                        <p>Technical High School Degree in Computer Engineering </p>
                    </div>
                </li>
            </ul>
    </div>
  </div>
)};

export default AboutmePage;
