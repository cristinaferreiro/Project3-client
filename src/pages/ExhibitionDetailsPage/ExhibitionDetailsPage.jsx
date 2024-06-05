import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import exhibitionServices from '../../services/exhibition.services'
import './ExhibitionDetailsPage.css'
import ScrollToTop from "react-scroll-to-top";


function ExhibitionDetailsPage() {
    const [exhibitionData, setExhibitionInfo] = useState({})
    const { exhibitionId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        loadExhibitionDetails()
    }, [exhibitionId])

    const loadExhibitionDetails = () => {
        exhibitionServices
            .getOneExhibition(exhibitionId)
            .then(({ data }) => {
                data.date = new Date(data.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) //////
                data.dateend = new Date(data.dateend).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) ///////
                setExhibitionInfo(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleDeleteExhibition = () => {
        exhibitionServices
            .deleteExhibition(exhibitionId)
            .then(() => {
                console.log("Exhibition deleted successfully")
                navigate('/profile')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="exhibition-details">
            <Container>
                <h1 className="text-center my-4">Exhibition Details</h1>
                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" size="sm" />
                    </div>
                ) : (
                    <Row className="justify-content-center">
                        <Col md={{ span: 8 }}>
                            <hr />

                            <div className="exhibition-details">
                                <div className="exhibition-image">
                                    <img src={exhibitionData.image} alt={exhibitionData.title} />
                                </div>

                                <div className="exhibition-info">
                                    <hr />
                                    <h5><strong>{exhibitionData?.username} {exhibitionData?.lastname}</strong></h5>
                                    <h5 className="exhibition-title"><strong>{exhibitionData.title}</strong></h5>
                                    <h5><strong>{exhibitionData.date} - {exhibitionData.dateend}</strong></h5>
                                    <h5><strong>{exhibitionData.place}</strong></h5>

                                    <hr />

                                    <h6>{exhibitionData.description}</h6>

                                    <hr />
                                </div>
                            </div>

                        </Col>
                    </Row>
                )
                }
                <Row>
                    <Col>
                        <Button variant="outline-danger mb-5" onClick={handleDeleteExhibition}>Delete Exhibition</Button>
                    </Col>
                    <Col>
                        <Button variant="outline-danger mb-5">
                            <Link to="/profile" className="btn" variant="outline-danger">
                                Back
                            </Link>
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-danger mb-5">
                            <Link to={`/edit-exhibition/${exhibitionId}`} className="btn" style={{ marginLeft: '10px' }} variant="outline-danger">
                                Edit Exhibition
                            </Link>
                        </Button>
                    </Col>
                </Row>
                <ScrollToTop smooth />

            </Container >
        </div >
    )
}

export default ExhibitionDetailsPage


