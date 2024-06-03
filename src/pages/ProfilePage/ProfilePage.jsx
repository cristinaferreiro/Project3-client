import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './../../context/auth.context'
import userServices from '../../services/user.services'
import { Container, Row, Col, Spinner, Carousel } from 'react-bootstrap'
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard'
import './ProfilePage.css'
import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard'
import UserCard from '../../components/UserCard/UserCard'
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

    return (
        <Container>
            <div className="userProfile">
                <div className="image-container">
                    <img src={userData?.backgrdimage} alt="User Background" className="img-fluid w-100" />
                    <div className="overlay">
                        <h1>{userData?.username} {userData?.lastname}</h1>
                    </div>
                </div>

                <hr />
                {isLoading ? (
                    <Spinner animation="border" size="sm" />
                ) : (
                    <>
                        <div>
                            <h2>{userData?.username} {userData?.lastname}</h2>
                            <h2>{userData?.country}</h2>
                            <h2>{userData?.birthyear}</h2>
                        </div>

                        <hr />
                        <Row>
                            <Col className="User-info" md={8}>
                                <h5>{userData?.userbio}</h5>
                            </Col>
                            <Col className="Img-profile" md={4}>
                                <img src={userData?.userimage} alt="User Image" className="img-fluid-profile" />
                            </Col>
                        </Row>
                        <hr />
                        <h2>ARTWORKS</h2>
                        <Carousel className="carrusel">
                            {artworkData.map((artwork, index) => (
                                <Carousel.Item key={index} interval={9000}>
                                    <ArtworkCard {...artwork} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <hr />
                        <h2>Expos</h2>
                        <Row className='Exhibition-list'>
                            {exhibitionData.map((exhibition, index) => (
                                <Col md={{ span: 3 }} key={index}>
                                    <ExhibitionCard {...exhibition} />
                                </Col>
                            ))}
                        </Row>
                    </>
                )}
            </div>
        </Container >
    );
}
export default ProfilePage












