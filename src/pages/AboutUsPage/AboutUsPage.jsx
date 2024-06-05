import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './AboutUsPage.css';

function AboutUsPage() {
    return (
        <div className="aboutus-container">
            <Card className="text-center custom-card">
                <Card.Body>
                    <Card.Title><strong>Ernesto Hilarión | Cristina Ferreiro</strong>
                        <hr></hr>
                        As art enthusiasts, we decided to create this website to merge our diverse skills and experiences into a project that reflects our dedication and creativity.
                        We are Full Stack Developers with varied and complementary backgrounds. One of us has a solid experience as a project manager in architecture, graphic design, contemporary art, exhibition design, and lighting.
                        This allows them to create responsive web applications that are both functional and visually appealing. The other has extensive experience in administration and the insurance sector, providing a deep understanding of client needs and the ability to develop web applications that adapt to the changing demands of the job market.
                        We use frontend and backend technologies such as MongoDB, Express, React, and Node.js, ensuring our applications not only work flawlessly but also offer a pleasant user experience and adapt to market requirements. Our goal is to develop robust, efficient, and aesthetically pleasing solutions, always with the end user in mind.
                        <hr></hr>
                    </Card.Title>
                    <ListGroup>
                        <ListGroup.Item as="a" href="https://www.linkedin.com/in/ernestohilarion/" target="_blank">LinkedIn Ernesto</ListGroup.Item>
                        <ListGroup.Item as="a" href="https://github.com/ernohilarion" target="_blank">GitHub Ernesto</ListGroup.Item>
                    </ListGroup>
                    <hr></hr>
                    <ListGroup>
                        <ListGroup.Item as="a" href="https://www.linkedin.com/in/cristina-ferreiro-2b59182aa/" target="_blank">LinkedIn Cristina</ListGroup.Item>
                        <ListGroup.Item as="a" href="https://github.com/cristinaferreiro" target="_blank">GitHub Cristina</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>

    );
}

export default AboutUsPage;
