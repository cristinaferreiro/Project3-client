
import React, { useState, useEffect } from 'react';
import './ArtworkDetailsPage.css';
import { Container, Row, Col, Image, ListGroup, Spinner, Button } from 'react-bootstrap'
import { useParams, Link, useNavigate } from 'react-router-dom'
import artworkServices from '../../services/artwork.services';
import AuctionForm from '../../components/AuctionForm/AuctionForm';
import AuctionList from '../../components/AuctionList/AuctionList';
import bidServices from '../../services/bid.services';
import ScrollToTop from "react-scroll-to-top";



function ArtworkDetailsPage() {
    const [artwork, setArtwork] = useState({})
    const { artworkId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [bidsData, setBidsData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadArtworkDetails();
        loadAuctions();
    }, [artworkId])


    const loadAuctions = () => {
        bidServices
            .getBidsFromArtiwork(artworkId)
            .then(({ data }) => setBidsData(data.auction.bids))
            .catch(err => console.log(err))
    }

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

    const handleBidPosted = () => {
        loadAuctions();
    };

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
                <hr />
                <Row className="justify-content-center" >
                    <Col md={{ span: 6 }} className="mb-5r">
                        <div className='auctionCommets'>

                            <AuctionForm artworkId={artwork._id} bidsData={bidsData} onBidPosted={handleBidPosted} />
                            <hr />
                            <AuctionList artworkId={artwork._id} bidsData={bidsData} />
                        </div>
                        <hr />
                    </Col>
                </Row>
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
                <ScrollToTop smooth />

            </Container>
        </div>
    );
}

export default ArtworkDetailsPage;
