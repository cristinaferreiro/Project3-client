import React, { useState, useEffect, useRef } from 'react';
import './ArtworkDetailsPage.css';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import artworkServices from '../../services/artwork.services';
import AuctionForm from '../../components/AuctionForm/AuctionForm';
import bidServices from '../../services/bid.services';
import ScrollToTop from "react-scroll-to-top";

function ArtworkDetailsPage() {
    const { artworkId } = useParams();
    const [artwork, setArtwork] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [bidsData, setBidsData] = useState([]);
    const [isCommentEnabled, setIsCommentEnabled] = useState(false);
    const [isAuctionFormVisible, setIsAuctionFormVisible] = useState(false);
    const [isAuctionListVisible, setIsAuctionListVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);
    const navigate = useNavigate();
    const zoomContainerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        loadArtworkDetails();
        loadAuctions();
    }, [artworkId]);

    const loadAuctions = () => {
        bidServices
            .getBidsFromArtwork(artworkId)
            .then(({ data }) => setBidsData(data.auction.bids))
            .catch(err => console.log(err))
    }

    const loadArtworkDetails = () => {
        artworkServices
            .getOneArtwork(artworkId)
            .then(({ data }) => {
                setArtwork(data);
                setIsLoading(false);
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

    const handleStartAuction = () => {
        setIsCommentEnabled(true);
        setIsAuctionFormVisible(true);
        setIsAuctionListVisible(true);
        const auctionEndTime = Date.now() + 60000; // Duración de la subasta: 1 minuto
        const interval = setInterval(() => {
            const timeRemaining = auctionEndTime - Date.now();
            if (timeRemaining > 0) {
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                setTimeLeft({ hours, minutes, seconds });
            } else {
                setIsAuctionFormVisible(false); // Ocultar el formulario de subasta
                clearInterval(interval);
            }
        }, 1000);
    }

    const handleMouseMove = (e) => {
        const { offsetX, offsetY } = e.nativeEvent;
        const { offsetWidth, offsetHeight } = zoomContainerRef.current;
        const mouseX = (offsetX / offsetWidth) * 2 - 1; // Escala el valor del eje X entre -1 y 1
        const mouseY = (offsetY / offsetHeight) * 2 - 1; // Escala el valor del eje Y entre -1 y 1
        setMousePosition({ x: mouseX, y: mouseY });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
    };

    const sortedBids = bidsData.sort((a, b) => b.amount - a.amount);

    const handleBidPosted = () => {
        loadAuctions();
    };

    return (
        <Container className='Container'>
            <div className="ArtworkDetailsPage">
                <h2 className="therow-title">ARTWORK DETAILS</h2>
                <hr className="hr-full-width" />
                <div className="First-margin">
                    {isLoading ? (
                        <div className="d-flex justify-content-center">
                            <Spinner animation="border" size="sm" />
                        </div>
                    ) : (
                        <Row className="justify-content-center">
                            <Col md={{ span: 6 }} className="mb-5r">
                                <div className="zoom-container"
                                    ref={zoomContainerRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}>
                                    <img className="zoom-image" src={artwork.image} alt={artwork.title}
                                        style={{
                                            transform: `scale(1.2) translate(${mousePosition.x * 10}%, ${mousePosition.y * 10}%)`
                                        }} />
                                </div>
                                <div className="artwork-details">
                                    <div variant="flush" className='artist-profile-card'>
                                        <h4><strong>{artwork.title}</strong></h4>
                                        <h5>{artwork.technique}</h5>
                                        <h5>{artwork.dimension}</h5>
                                        <h5>{artwork.year}</h5>
                                        <br />
                                        <h4><strong>Start bid price {artwork.price} €</strong></h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )}
                    <Row className="justify-content-center">
                        <Col md={{ span: 6 }} className="mb-5r">
                            <div className='auctionCommets'>
                                <hr className="hr-full-width" />
                                <h2 className="therow-title">INITIATE YOUR AUCTION</h2>
                                <hr className="hr-full-width" />
                                <div className='biding-area'>
                                    {!isAuctionFormVisible && <Button variant="outline-danger mt-3 mb-2" onClick={handleStartAuction}>Start Auction</Button>}
                                    {isAuctionFormVisible && isCommentEnabled && <AuctionForm artworkId={artwork._id} bidsData={bidsData} onBidPosted={handleBidPosted} />}
                                    {timeLeft !== null && (
                                        <p>Time left: {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}</p>
                                    )}
                                </div>
                                <hr className="hr-full-width" />
                                {isAuctionListVisible && <div className='biddata-area'>
                                    <h2 className="therow-title">BIDS</h2>
                                    <ul>
                                        {sortedBids.map((bid, index) => {
                                            const bidDate = new Date(bid.date);
                                            const month = bidDate.toLocaleString('en-US', { month: 'short' });
                                            const day = bidDate.getDate();
                                            const hours = bidDate.getHours();
                                            const minutes = bidDate.getMinutes();
                                            const seconds = bidDate.getSeconds();
                                            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                                            const formattedDate = `${month} ${day} | ${formattedTime}`;
                                            return (
                                                <li key={index} className="bid-item">
                                                    <div className="user-info">
                                                        {bid.user.username} {bid.user.lastname}
                                                    </div>
                                                    <div className="date-info">
                                                        <h4 className="small-date">{formattedDate}</h4>
                                                    </div>
                                                    <div className="amount-info">
                                                        <strong>€{bid.amount}</strong>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>}
                                <hr />
                            </div>
                        </Col>
                    </Row>

                    <hr />
                    <Row className="justify-content-center" >
                        <Col md={{ span: 6 }} className="mb-5r">

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
                </div>
            </div>
        </Container>
    );
}

export default ArtworkDetailsPage;
