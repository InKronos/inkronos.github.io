import React, { FC } from 'react';
//import styles from './Navbar.module.css';

import './projects.page.scss';
import { Card } from 'react-bootstrap';

interface ProjectsProps {}

const ProjectsPage: FC<ProjectsProps> = () => {

    return(
        <div id='main'>
            <Card className="MYcard">
                <Card.Img variant="top" src="background.png" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="MYcard">
                <Card.Img variant="top" src="background.png" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="MYcard">
                <Card.Img variant="top" src="background.png" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="MYcard">
                <Card.Img variant="top" src="background.png" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default ProjectsPage;
  