import React, { useState, useEffect } from 'react';
import './ArtworkDetailsPage.css';
import { Container, Row, Col, Image, ListGroup, Spinner, Button } from 'react-bootstrap'
import { useParams, Link, useNavigate } from 'react-router-dom'
import artworkServices from '../../services/artwork.services'
function ArtworkDetailsPage() {
    const [artwork, setArtwork] = useState({})
    const { artworkId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();
    useEffect(() => {
        loadArtworkDetails()
    }, [artworkId])
    const loadArtworkDetails = () => {
        artworkServices
            .getOneArtwork(artworkId)
            .then(({ data }) => {
                setArtwork(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }
    const handleDeleteArtwork = () => {
        artworkServices
            .deleteArtwork(artworkId)
            .then(() => {
                console.log("Artwork deleted successfully");
                navigate('/profile');
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="ArtworkDetailsPage">
            <Container className='Container'>
                <h1 className="text-center my-4">Artwork Details</h1>
                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" size="sm" />
                    </div>
                ) : (
                    <Row className="justify-content-center" >
                        <Col md={{ span: 6 }} className="mb-5r">
                            <img
                                src={artwork.image}
                                alt={artwork.title}
                                className="artwork-image"
                            />
                            <div className="artwork-details">
                                <ListGroup variant="flush">
                                    <ListGroup.Item><strong> {artwork.title}</strong></ListGroup.Item>
                                    <ListGroup.Item><strong>Technique:</strong> {artwork.technique}</ListGroup.Item>
                                    <ListGroup.Item><strong>Dimension:</strong> {artwork.dimension}</ListGroup.Item>
                                    <ListGroup.Item><strong>Year:</strong> {artwork.year}</ListGroup.Item>
                                    <ListGroup.Item><strong>Price:</strong> {artwork.price} €</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                )}
                <div>
                    <Button variant="outline-danger" onClick={handleDeleteArtwork}>Delete Artwork</Button>
                </div>
                <div>
                    <Link to={`/artists/${artwork.owner?._id}`} className="btn btn-secondary">
                        Back
                    </Link>
                    <Link to={`/edit-artwork/${artworkId}`} className="btn btn-primary" style={{ marginLeft: '10px' }}>
                        Edit Artwork
                    </Link>
                </div>
            </Container>
        </div>
    );
}
export default ArtworkDetailsPage;









