// import React, { useContext, useEffect, useState } from 'react'
// import { AuthContext } from './../../context/auth.context'
// import userServices from '../../services/user.services'
// import { Container, Row, Col, Spinner, Carousel } from 'react-bootstrap'
// import ArtworkCard from '../../components/ArtworkCard/ArtworkCard'
// import './ProfilePage.css'
// import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard'
// import UserCard from '../../components/UserCard/UserCard'
// function ProfilePage() {
//     const { user } = useContext(AuthContext)
//     const [userData, setUserInfo] = useState({})
//     const [artworkData, setArtworkInfo] = useState([])
//     const [exhibitionData, setExhibitionInfo] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     useEffect(() => {
//         loadUserInfo()
//     }, [user])
//     const loadUserInfo = () => {
//         userServices
//             .getOneUsers(user._id)
//             .then(({ data }) => {
//                 setUserInfo(data.userInfo)
//                 setArtworkInfo(data.artworksInfo)
//                 setExhibitionInfo(data.exhibitionsInfo)
//                 setIsLoading(false)
//             })
//             .catch(err => console.log(err))
//     }

//     return (
//         <div className="userProfile">
//             <div className="image-container">
//                 <img src={userData?.backgrdimage} alt="User Background" className="img-fluid w-100" />
//                 <div className="artist-backgrd-text">
//                     <h1>{userData?.username} {userData?.lastname}</h1>
//                 </div>
//             </div>



//             <Container>
//                 <hr className="hr-principal" />

//                 {isLoading ? (
//                     <Spinner animation="border" size="sm" />
//                 ) : (
//                     <>
//                         <div className='artist-profile'>
//                             <h3>{userData?.username} {userData?.lastname}</h3>
//                             <h4>{userData?.country}</h4>
//                             <h5>{userData?.birthyear}</h5>
//                         </div>

//                         <hr />
//                         <Row>
//                             <Col className="User-info" md={7}>
//                                 <h5>{userData?.userbio}</h5>
//                             </Col>
//                             <Col className="Img-profile" md={5}>
//                                 <img src={userData?.userimage} alt="User Image" className="img-fluid-profile" />
//                             </Col>
//                         </Row>
//                         <hr />
//                         <h2 className="therow-title">ARTWORKS</h2>

//                         <Carousel className="carrusel">
//                             {artworkData.map((artwork, index) => (
//                                 <Carousel.Item key={index} interval={9000}>
//                                     <ArtworkCard {...artwork} />
//                                 </Carousel.Item>
//                             ))}
//                         </Carousel>

//                         <hr />

//                         <h2 className="therow-title">EXHIBITIONS</h2>
//                         <Row className='Exhibition-list'>
//                             {exhibitionData.map((exhibition, index) => (
//                                 <Col md={{ span: 3 }} key={index}>
//                                     <ExhibitionCard {...exhibition} />
//                                 </Col>
//                             ))}
//                         </Row>
//                     </>
//                 )}
//             </Container >
//         </div>
//     );
// }
// export default ProfilePage



import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../context/auth.context';
import userServices from '../../services/user.services';
import { Container, Row, Col, Spinner, Carousel, Button } from 'react-bootstrap';
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard';
import './ProfilePage.css';
import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard';


function ProfilePage() {
    const { user } = useContext(AuthContext);
    const [userData, setUserInfo] = useState({});
    const [artworkData, setArtworkInfo] = useState([]);
    const [exhibitionData, setExhibitionInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCarousel, setIsCarousel] = useState(true); // Estado para controlar si se muestra el carrusel

    useEffect(() => {
        loadUserInfo();
    }, [user]);

    const loadUserInfo = () => {
        userServices
            .getOneUsers(user._id)
            .then(({ data }) => {
                setUserInfo(data.userInfo);
                setArtworkInfo(data.artworksInfo);
                setExhibitionInfo(data.exhibitionsInfo);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    const toggleCarouselView = () => {
        setIsCarousel(!isCarousel);
    };

    return (
        <div className="userProfile">
            <div className="image-container">
                <img src={userData?.backgrdimage} alt="User Background" className="img-fluid w-100" />
                <div className="artist-backgrd-text">
                    <h1>{userData?.username} {userData?.lastname}</h1>
                </div>
            </div>

            <Container>
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
                        <Button className="custom-button" onClick={toggleCarouselView}>
                            {isCarousel ? 'THUMBNAILS' : 'FEATURED WORKS'}
                        </Button>
                        <h2 className="therow-title">ARTWORKS</h2>
                        {isCarousel ? (
                            <Carousel className="carrusel">
                                {artworkData.map((artwork, index) => (
                                    <Carousel.Item key={index} interval={9000}>
                                        <ArtworkCard {...artwork} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        ) : (
                            <Row>
                                {artworkData.map((artwork, index) => (
                                    <Col md={3} key={index}>
                                        <ArtworkCard {...artwork} />
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
                        </Row>
                    </>
                )}
            </Container>
        </div>
    );
}

export default ProfilePage;
