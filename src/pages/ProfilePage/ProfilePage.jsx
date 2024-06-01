import React, { useContext, useEffect, useState } from 'react'
import './ProfilePage.css'
import { AuthContext } from './../../context/auth.context'
import userServices from '../../services/user.services'
import { Container, Row, Col, Spinner, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

function ProfilePage() {

    const { user } = useContext(AuthContext)

    const [userData, setUserInfo] = useState({})
    const [artworkData, setArtworkInfo] = useState([])
    const [exhibitionData, setExhibitionInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
            .catch(err => console.log(err))
    }

    // const goToEdit = () => {
    //     const navigate = useNavigate();
    //     const userId = ":userId"

    //     const handleEditProfile = () => {
    //         navigate(`/profile/edit-profile/:userId`);
    //     }

    return (
        <div>
            <h1>**BACKGROUND IMGAE**</h1>
            <h1>{userData?.username} {userData?.lastname}</h1>
            <hr />
            <Container>
                {
                    isLoading
                        ?
                        <Spinner animation="border" size="sm" />
                        :
                        <>
                            <Row className="d-flex align-items-center">
                                <Col md={{ span: 3, offset: 3 }}>
                                    <img src={userData?.imageuser} alt="User Image" className="img-fluid" />
                                </Col>
                                <Col md={6}>
                                    <h2>{userData?.username}</h2>
                                    <h2>{userData?.lastname}</h2>
                                    <h2>{userData?.country}</h2>
                                    <h2>{userData?.birthyear}</h2>
                                    <h5>Bio: {userData?.userbio}</h5>
                                </Col>
                            </Row>

                            <hr />
                            <h2>ARTWORKS</h2>
                            {/* <Row>
                                {
                                    artworkData?.map(artwork => (
                                        <Col md={4} key={artwork._id}>
                                            <div className="artwork-card">
                                                <img src={artwork.image} alt={artwork.title} className="img-fluid" />
                                                <h5>{artwork.title}</h5>
                                                <p>{artwork.technique}</p>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                            <div className="carousel-container">
                                <Carousel>
                                    {artworkData.map((artwork, index) => (
                                        <Carousel.Item key={index} interval={9000}>
                                            <div className='HomePage'>
                                                <img src={artwork.image} alt={artwork.title} className="coverImage" />
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <hr /> */}


                            {/* <hr />
                            <h2>ARTWOKS{
                                artworkData?.map(elm => <p>{elm.title}</p>)
                            }</h2>
                            <div className="carousel-container">
                                <Carousel>
                                    <Carousel.Item interval={9000}>
                                        <div className='HomePage'>
                                            <img src={"https://6d49d47bd32a151032ae-907965fc79c9900a93c12efeb23103bd.ssl.cf1.rackcdn.com/artworks/20140331100625_ferderico_herrero_untitled2008.jpg"} alt="Cover" className="coverImage" />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item interval={9000}>
                                        <div className='HomePage'>
                                            <img src={"https://6d49d47bd32a151032ae-907965fc79c9900a93c12efeb23103bd.ssl.cf1.rackcdn.com/artworks/20140331103410_Federico_herrero_barco.jpg"} alt="Cover" className="coverImage" />
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div> */}



                            <Row>
                                {
                                    artworkData?.map(elm => (
                                        <Col md={4} key={elm._id}>
                                            <div className="exhibition-card">
                                                <h3>{userData?.username} {elm.lastname}</h3>
                                                <p>{elm.title}</p>
                                                <p>{elm.date}</p>
                                                <p>{elm.place}</p>

                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>

                            <hr />
                            <h2>Expos</h2>
                            <Row>
                                {
                                    exhibitionData?.map(elm => (
                                        <Col md={4} key={elm._id}>
                                            <div className="exhibition-card">
                                                <h3>{userData?.username} {elm.lastname}</h3>
                                                <p>{elm.title}</p>
                                                <p>{elm.date}</p>
                                                <p>{elm.place}</p>

                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>

                        </>
                }
                {/* <Button className="w-100" variant="secondary" onClick={handleEditProfile}>Edit profile

                </Button> */}

            </Container>
        </div>
    )
}

export default ProfilePage