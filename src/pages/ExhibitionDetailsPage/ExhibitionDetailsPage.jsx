// import React from 'react';
// import './ExhibitionDetailsPage.css';

// function ExhibitionDetailsPage() {
//     return (
//         <div>
//             <h1>Exhibition Details Page TEST</h1>
//         </div>
//     );
// }

// export default ExhibitionDetailsPage;


import { Container, Row, Col, Button, Image, ListGroup, ButtonGroup } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './ExhibitionDetailsPage.css'

const apiURL = import.meta.env.VITE_API_URL

function ExhibitionDetailsPage() {
    const [exhibition, setExhibition] = useState({})
    const { exhibitionId } = useParams()

    useEffect(() => {
        loadExhibitionDetails()
    }, [exhibitionId])



    return (
        <div className="ExhibitionDetailsPage">
            <Container>
                <h1>{exhibition.title} - {exhibition.owner}</h1>
                <hr />
                <Row className="align-items-center">
                    <Col md={4} className="img-col">
                        <Image src={exhibition.cover} alt={exhibition.title} />
                    </Col>
                    <Col md={6} className="details-col">
                        <ListGroup variant="flush">
                            <ListGroup.Item><h4>{exhibition.title}</h4></ListGroup.Item>
                            <ListGroup.Item><h5>{exhibition.date}</h5></ListGroup.Item>
                            <ListGroup.Item><h5>{exhibition.description} </h5></ListGroup.Item>
                            <ListGroup.Item><h6>{exhibition.place}</h6></ListGroup.Item>
                            <ListGroup.Item><h6>{exhibition.owner} </h6></ListGroup.Item>
                            <ListGroup.Item><h6>{exhibition.artwork} </h6></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default ExhibitionDetailsPage
