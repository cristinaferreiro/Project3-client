
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' // Importa el hook useParams
import { AuthContext } from '../../context/auth.context'
import userServices from '../../services/user.services'
import { Container, Row, Col, Carousel, Spinner } from "react-bootstrap"
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard'
import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard'
import './ArtistDetailPage.css'

function ArtistDetailPage() {
    const { user } = useContext(AuthContext)
    const { userId } = useParams()
    const [userData, setUserInfo] = useState({})
    const [artworkData, setArtworkInfo] = useState([])
    const [exhibitionData, setExhibitionInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadUserInfo()
    }, [userId])

    const loadUserInfo = () => {
        userServices
            .getOneUsers(userId)
            .then(({ data }) => {
                setUserInfo(data.userInfo)
                setArtworkInfo(data.artworksInfo)
                setExhibitionInfo(data.exhibitionsInfo)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

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

                        <h2 className="therow-title">ARTWORKS</h2>
                        <Carousel className="carrusel">
                            {artworkData.map((artwork, index) => (
                                <Carousel.Item key={index} interval={9000}>
                                    <ArtworkCard {...artwork} />
                                </Carousel.Item>
                            ))
                            }
                        </Carousel>

                        <hr />

                        <h2 className="therow-title">ARTWORKS</h2>
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
    )
}

export default ArtistDetailPage
