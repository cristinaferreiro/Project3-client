// // import React, { useContext, useEffect, useState, carrusel } from 'react'
// // import { useParams } from 'react-router-dom' // Importa el hook useParams
// // import { AuthContext } from '../../context/auth.context'
// // import userServices from '../../services/user.services'
// // import { Container, Row, Col, Carousel, Spinner, Button } from "react-bootstrap"
// // import ArtworkCard from '../../components/ArtworkCard/ArtworkCard'
// // import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard'
// // import './ArtistDetailPage.css'
// // import { useNavigate } from 'react-router-dom'

// // function ArtistDetailPage() {
// //     const { user } = useContext(AuthContext)
// //     const { userId } = useParams()
// //     const [userData, setUserInfo] = useState({})
// //     const [artworkData, setArtworkInfo] = useState([])
// //     const [exhibitionData, setExhibitionInfo] = useState([])
// //     const [isLoading, setIsLoading] = useState(true)
// //     const navigate = useNavigate()


// //     useEffect(() => {
// //         loadUserInfo()
// //     }, [userId])

// //     const loadUserInfo = () => {
// //         userServices
// //             .getOneUsers(userId)
// //             .then(({ data }) => {
// //                 setUserInfo(data.userInfo)
// //                 setArtworkInfo(data.artworksInfo)
// //                 setExhibitionInfo(data.exhibitionsInfo)
// //                 setIsLoading(false)
// //             })
// //             .catch(err => console.log(err))
// //     }

// //     const handleCancel = () => {
// //         navigate(`/artists`)
// //     }

// //     return (
// //         <div className="ArtistDetailPage">
// //             <div className="image-container">
// //                 <img src={userData?.backgrdimage} alt="User Background" className="img-fluid" />
// //                 <div className="artist-backgrd-text">
// //                     <h1>{userData?.username} {userData?.lastname}</h1>
// //                 </div>
// //             </div>
// //             <Container>
// //                 {isLoading ? (
// //                     <Spinner animation="border" size="sm" />
// //                 ) : (
// //                     <>
// //                         <hr />
// //                         <div className='artist-profile'>
// //                             <h3><strong>{userData?.username} {userData?.lastname}</strong></h3>
// //                             <h4>{userData?.country}</h4>
// //                             <h5>{userData?.birthyear}</h5>
// //                         </div>

// //                         <hr />

// //                         <Row className="d-flex align-items-start">
// //                             <Col className="User-info h-100" md={7}>
// //                                 <h5>Bio: {userData?.userbio}</h5>
// //                             </Col>
// //                             <Col className="Img-profile h-100" md={5}>
// //                                 <img src={userData?.userimage} alt="User Image" className="img-fluid" />
// //                             </Col>
// //                         </Row>

// //                         <hr />

// //                         <h2 className="therow-title">ARTWORKS</h2>
// //                         <Carousel className="carrusel">
// //                             {artworkData.map((artwork, index) => (
// //                                 <Carousel.Item key={index} interval={9000}>
// //                                     <ArtworkCard {...artwork} />
// //                                 </Carousel.Item>
// //                             ))
// //                             }
// //                         </Carousel>


// //                         <hr />

// //                         <h2 className="therow-title">EXHIBITIONS</h2>
// //                         <Row>
// //                             {exhibitionData.map((exhibition, index) => (
// //                                 <Col md={4} key={index}>
// //                                     <ExhibitionCard {...exhibition} />
// //                                 </Col>
// //                             ))}
// //                         </Row>
// //                         <Button variant="outline-danger" type="cancel"
// //                             onClick={handleCancel}>
// //                             Back                                    </Button>
// //                     </>
// //                 )}
// //             </Container>
// //         </div>
// //     )
// // }

// // export default ArtistDetailPage



import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import userServices from '../../services/user.services';
import { Container, Row, Col, Carousel, Spinner, Button } from "react-bootstrap";
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard';
import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard';
import './ArtistDetailPage.css';
import { useNavigate } from 'react-router-dom';

function ArtistDetailPage() {
    const { user } = useContext(AuthContext);
    const { userId } = useParams();
    const [userData, setUserInfo] = useState({});
    const [artworkData, setArtworkInfo] = useState([]);
    const [exhibitionData, setExhibitionInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCarousel, setIsCarousel] = useState(true);  // Estado para controlar la vista
    const navigate = useNavigate();

    useEffect(() => {
        loadUserInfo();
    }, [userId]);

    const loadUserInfo = () => {
        userServices
            .getOneUsers(userId)
            .then(({ data }) => {
                setUserInfo(data.userInfo);
                setArtworkInfo(data.artworksInfo);
                setExhibitionInfo(data.exhibitionsInfo);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    };

    const handleCancel = () => {
        navigate(`/artists`);
    };

    const toggleCarouselView = () => {
        setIsCarousel(!isCarousel);
    };

    return (
        <div className="ArtistDetailPage">
            <div className="image-container">
                <img src={userData?.backgrdimage} alt="User Background" className="img-fluid" />
                <div className="artist-backgrd-text">
                    <h1>{userData?.username} {userData?.lastname}</h1>
                </div>
            </div>
            <Container>
                {isLoading ? (
                    <Spinner animation="border" size="sm" />
                ) : (
                    <>
                        <hr />
                        <div className='artist-profile'>
                            <h3><strong>{userData?.username} {userData?.lastname}</strong></h3>
                            <h4>{userData?.country}</h4>
                            <h5>{userData?.birthyear}</h5>
                        </div>

                        <hr />

                        <Row className="d-flex align-items-start">
                            <Col className="User-info h-100" md={7}>
                                <h5>Bio: {userData?.userbio}</h5>
                            </Col>
                            <Col className="Img-profile h-100" md={5}>
                                <img src={userData?.userimage} alt="User Image" className="img-fluid" />
                            </Col>
                        </Row>

                        <hr />

                        <Button
                            className={isCarousel ? "custom-button carousel-button" : "custom-button thumbnail-button"}
                            onClick={toggleCarouselView}
                        >
                            {isCarousel ? 'THUMBNAILS' : 'FEATURED WORKS'}
                        </Button>
                        <h2 className="therow-title">ARTWORKS</h2>
                        {isCarousel ? (
                            <Carousel className="carrusel">
                                {artworkData.map((artwork, index) => (
                                    <Carousel.Item key={index} interval={9000}>
                                        <ArtworkCard {...artwork} className="artwork-carousel" />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        ) : (
                            <Row>
                                {artworkData.map((artwork, index) => (
                                    <Col md={3} key={index}>
                                        <ArtworkCard {...artwork} className="artwork-thumbnail" />
                                    </Col>
                                ))}
                            </Row>
                        )}

                        <hr />

                        <h2 className="therow-title">EXHIBITIONS</h2>
                        <Row>
                            {exhibitionData.map((exhibition, index) => (
                                <Col md={4} key={index}>
                                    <ExhibitionCard {...exhibition} />
                                </Col>
                            ))}
                        </Row>
                        <Button variant="outline-danger mb-3" type="cancel"
                            onClick={handleCancel}>
                            Back                                    </Button>
                    </>
                )}
            </Container>
        </div>
    );
}

export default ArtistDetailPage;
