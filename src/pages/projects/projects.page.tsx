import React, { FC } from 'react';
//import styles from './Navbar.module.css';

import './projects.page.scss';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ProjectsProps {}

const ProjectsPage: FC<ProjectsProps> = () => {

    return(
        <div id='main'>
            <Card  className='smallCard'>
                <Card.Body>
                    <Card.Title>Intel 8051 Emulator</Card.Title>
                    <Card.Text>
                    Intel 8051 Emulator writed in C++ using OOP paradigm.
                    </Card.Text>
                    <Card.Link href="#">Github</Card.Link>
                </Card.Body>
            </Card>
            <Card  className='smallCard'>
                <Card.Body>
                    <Card.Title>AR app</Card.Title>
                    <Card.Text>
                    AR app created in Unity where you can destroy city with helicopter.
                    </Card.Text>
                    <Card.Link href="#">Github</Card.Link>
                </Card.Body>
            </Card>
            <Card  className='smallCard'>
                <Card.Body>
                    <Card.Title>Plate generator</Card.Title>
                    <Card.Text>
                    Polish Licence Plate generator in python with OpenCV.
                    </Card.Text>
                    <Card.Link href="#">Github</Card.Link>
                </Card.Body>
            </Card>
            <Card  className='smallCard'>
                <Card.Body>
                    <Card.Title>Drone managment project</Card.Title>
                    <Card.Text>
                    React Native app with NodeJS server. Application for managment of drones.
                    </Card.Text>
                    <Card.Link href="#">Github</Card.Link>
                </Card.Body>
            </Card>
            <Card  className='smallCard'>
                <Card.Body>
                    <Card.Title>Decentralized Planet Shop</Card.Title>
                    <Card.Text>
                    Web3 app for buying a piece of planets.
                    </Card.Text>
                    <Card.Link href="#">Github</Card.Link>
                </Card.Body>
            </Card>
            <Card className="MYcard">
                <Card.Img variant="top" src="8051image.png" />
                <Card.ImgOverlay>
                    <Card.Title className='title'><Link to="https://github.com/InKronos/emu8051">Intel 8051 Emulator</Link></Card.Title>
                    <Card.Text className='text'>
                        Intel 8051 Emulator writed in C++ using OOP paradigm.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="MYcard">
                <Card.Img variant="top" src="AR app.png" />
                <Card.ImgOverlay>
                    <Card.Title className='title'><Card.Link href='https://github.com/InKronos/ar-app'>AR app</Card.Link></Card.Title>
                    <Card.Text className='text'>
                        AR app created in Unity where you can destroy city with helicopter.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="MYcard">
                <Card.Img variant="top" src="plategenerator.png" />
                <Card.ImgOverlay>
                    <Card.Title className='title'><Card.Link href='https://github.com/InKronos/License-Plate-Generator'>Plate generator</Card.Link></Card.Title>
                    <Card.Text className='text'>
                        Polish Licence Plate generator in python with OpenCV.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="MYcard">
                <Card.Img variant="top" src="dronemanagment.png" />
                <Card.ImgOverlay>
                    <Card.Title className='title'><Card.Link href='https://github.com/InKronos/Drone-management-project'>Drone managment project</Card.Link></Card.Title>
                    <Card.Text className='text'>
                        React Native app with NodeJS server. Application for managment of drones.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="MYcard">
                <Card.Img variant="top" src="mars.png" />
                <Card.ImgOverlay>
                    <Card.Title className='title'><Card.Link href='https://github.com/InKronos/decentralized-planet-shop'>Decentralized Planet Shop</Card.Link></Card.Title>
                    <Card.Text className='text'>
                        Web3 app for buying a piece of planets.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default ProjectsPage;
  