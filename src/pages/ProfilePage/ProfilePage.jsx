import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../context/auth.context';
import userServices from '../../services/user.services';
import { Container, Row, Col, Spinner, Carousel, Button } from 'react-bootstrap';
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard';
import './ProfilePage.css';
import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard';
import ScrollToTop from "react-scroll-to-top";
import { useNavigate } from 'react-router-dom'


function ProfilePage() {
    const { user } = useContext(AuthContext);
    const [userData, setUserInfo] = useState({});
    const [artworkData, setArtworkInfo] = useState([]);
    const [exhibitionData, setExhibitionInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCarousel, setIsCarousel] = useState(true);

    const navigate = useNavigate()


    useEffect(() => {
        loadUserInfo()
    }, [user])

    const loadUserInfo = () => {
        userServices
            .getOneUsers(user._id)
            .then(({ data }) => {
                setUserInfo(data.userInfo)
                setArtworkInfo(data.artworksInfo)
                setExhibitionInfo(data.exhibitionsInfo)
                setIsLoading(false)
            })
            .catch((err) => console.log(err))
    }

    const toggleCarouselView = () => {
        setIsCarousel(!isCarousel)
    }

    const [isHoveredBlockOne, setIsHoveredBlockOne] = useState(false)

    const handleEditProfile = () => {
        navigate(`/profile/edit-profile/${user._id}`)
    }

    return (

        <div className="userProfile mb-5">
            <div className="image-container">
                <div className='backgrdBlockone'
                    onMouseEnter={() => setIsHoveredBlockOne(true)}
                    onMouseLeave={() => setIsHoveredBlockOne(false)}>
                    <img src={userData?.backgrdimage} alt="User Background" className="backgrdCoverOne" />
                    <div className="textOverlayBlockone artist-backgrd-text">
                        <h1 className="marquee-container">{userData?.username} {userData?.lastname}</h1>
                    </div>
                    <div>
                        <div className={`blueOverlay ${isHoveredBlockOne ? 'hovered' : ''}`}></div>
                    </div>
                </div>
            </div>

            <hr className="hr-full-width" />


            <Container className="conteiner mt-5">
                <hr className="hr-principal" />
                {isLoading ? (
                    <Spinner animation="border" size="sm" />
                ) : (
                    <>
                        <div className='artist-profile'>
                            <h3>{userData?.username} {userData?.lastname}</h3>
                            <h4>{userData?.country}</h4>
                            <h5>{userData?.birthyear}</h5>
                        </div>
                        <hr />
                        <Row>
                            <Col className="User-info" md={7}>
                                <h5>{userData?.userbio}</h5>
                            </Col>
                            <Col className="Img-profile" md={5}>
                                <img src={userData?.userimage} alt="User Image" className="img-fluid-profile" />
                            </Col>
                        </Row>
                        <hr />
                        <Button className={isCarousel ? "custom-button carousel-button" : "custom-button thumbnail-button"} onClick={toggleCarouselView}>
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
                        <Row className='Exhibition-list'>
                            {exhibitionData.map((exhibition, index) => (
                                <Col md={{ span: 3 }} key={index}>
                                    <ExhibitionCard {...exhibition} />
                                </Col>
                            ))}
                            <ScrollToTop smooth />

                        </Row>

                        <Button variant="outline-danger mb-3" onClick={handleEditProfile} type="submit">Edit profile</Button>

                    </>
                )}
            </Container>
        </div >
    )
}

export default ProfilePage
