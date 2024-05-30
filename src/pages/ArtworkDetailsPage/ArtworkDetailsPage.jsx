import React from 'react';
import './ArtworkDetailsPage.css';
import { Container, Row, Col, Button, Image, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import artworkServices from '../../services/artwork.services'


function ArtworkDetailsPage() {

    const [artwork, setArtwork] = useState({})
    const { artworkId } = useParams()

    useEffect(() => {
        loadArtworkDetails()
    }, [artworkId])

    const loadArtworkDetails = () => {
        artworkServices
            .getOneArtwork(artworkId)
            .then(({ data }) => setArtwork(data))
            .catch(err => console.log(err))
    }


    return (
        <div className="ArtworkDetailsPage">
            <Container>
                <h1>{artwork.title} - {artwork.owner}</h1>
                <hr />
                <Row className="align-items-center">
                    <Col md={8} className="img-col">
                        <Image src={artwork.image} alt={artwork.title} />
                    </Col>
                    <Col md={4} className="details-col">
                        <ListGroup variant="flush">
                            <ListGroup.Item><h5>{artwork.technique}</h5></ListGroup.Item>
                            <ListGroup.Item><h5>{artwork.dimension} </h5></ListGroup.Item>
                            <ListGroup.Item><h6>{artwork.year}</h6></ListGroup.Item>
                            <ListGroup.Item><h6>{artwork.price} </h6></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default ArtworkDetailsPage