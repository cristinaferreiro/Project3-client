// import React, { useContext, useEffect, useState } from 'react'
// import './ProfilePage.css'
// import { AuthContext } from './../../context/auth.context'
// import userServices from '../../services/user.services'
// import { Container, Row, Col, Carousel, Spinner } from "react-bootstrap"
// import ArtworksList from '../../components/ArtworkList/ArtworkList'

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
//                 <img src={userData?.backgrdimage} alt="User Background" className="img-fluid" />
//                 <div className="overlay">
//                     <h1>{userData?.username} {userData?.lastname}</h1>
//                 </div>
//             </div>

//             <hr />
//             <Container>
//                 {
//                     isLoading
//                         ?
//                         <Spinner animation="border" size="sm" />
//                         :
//                         <>
//                             <Row className="d-flex align-items-center">
//                                 <Col md={{ span: 3, offset: 3 }}>
//                                     <img src={userData?.userimage} alt="User Image" className="img-fluid" />
//                                 </Col>
//                                 <Col md={6}>
//                                     <h2>{userData?.username} {userData?.lastname}</h2>
//                                     <h2>{userData?.country}</h2>
//                                     <h2>{userData?.birthyear}</h2>
//                                     <h5>Bio: {userData?.userbio}</h5>
//                                 </Col>
//                             </Row>

//                             <hr />

//                             <h2>ARTWORKS</h2>

//                             <Row>
//                                 <Col>
//                                     <div className="App">
//                                         <ArtworksList artworkData={artworkData} />
//                                     </div>
//                                 </Col>
//                             </Row>

//                             <hr />

//                             <h2>Expos</h2>
//                             <Row>
//                                 {
//                                     exhibitionData?.map(elm => (
//                                         <Col md={4} key={elm._id}>
//                                             <div className="exhibition-card">
//                                                 <h3>{userData?.username} {elm.lastname}</h3>
//                                                 <p>{elm.title}</p>
//                                                 <p>{elm.date}</p>
//                                                 <p>{elm.place}</p>

//                                             </div>
//                                         </Col>
//                                     ))
//                                 }
//                             </Row>
//                         </>
//                 }
//             </Container>
//         </div>
//     )
// }

// export default ProfilePage




import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../context/auth.context';
import userServices from '../../services/user.services';
import { Container, Row, Col, Carousel, Spinner } from "react-bootstrap";
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard';
import './ProfilePage.css';
import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard';
import UserCard from '../../components/UserCard/UserCard';

function ProfilePage() {
    const { user } = useContext(AuthContext);
    const [userData, setUserInfo] = useState({});
    const [artworkData, setArtworkInfo] = useState([]);
    const [exhibitionData, setExhibitionInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            .catch(err => console.log(err));
    };

    return (
        <div className="userProfile">
            <div className="image-container">
                <img src={userData?.backgrdimage} alt="User Background" className="img-fluid" />
                <div className="overlay">
                    <h1>{userData?.username} {userData?.lastname}</h1>
                </div>
            </div>
            <hr />
            <Container>
                {isLoading ? (
                    <Spinner animation="border" size="sm" />
                ) : (
                    <>
                        {/* <Row className="d-flex align-items-center">
                            <Col md={{ span: 3, offset: 3 }}>
                                <img src={userData?.userimage} alt="User Image" className="img-fluid" />
                            </Col>
                            <Col md={6}>
                                <h2>{userData?.username} {userData?.lastname}</h2>
                                <h2>{userData?.country}</h2>
                                <h2>{userData?.birthyear}</h2>
                                <h5>Bio: {userData?.userbio}</h5>
                            </Col>
                        </Row> */}

                        <Row className="d-flex align-items-center">
                            <Col md={{ span: 3, offset: 3 }}>
                                <UserCard userData={userData} />
                            </Col>
                        </Row>

                        <hr />
                        <h2>ARTWORKS</h2>
                        <Carousel>
                            {artworkData.map((artwork, index) => (
                                <Carousel.Item key={index} interval={9000}>
                                    <ArtworkCard {...artwork} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <hr />

                        <h2>Expos</h2>
                        <Row>
                            {exhibitionData.map((exhibition, index) => (
                                <Col md={4} key={index}>
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
