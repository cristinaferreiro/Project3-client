import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Image, ListGroup, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import exhibitionServices from '../../services/exhibition.services'
import './ExhibitionDetailsPage.css'

function ExhibitionDetailsPage() {
    const { exhibitionId } = useParams()

    const [exhibitionData, setExhibitionInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadExhibitionDetails()
    }, [exhibitionId])

    const loadExhibitionDetails = () => {
        exhibitionServices
            .getOneExhibition(exhibitionId)
            .then(({ data }) => {
                setExhibitionInfo(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="ExhibitionDetailsPage">
            <Container>

                {
                    isLoading
                        ?
                        <Spinner animation="border" size="sm" />
                        :
                        <>
                            <h1>{exhibitionData?.title}</h1>
                            <hr />
                            <Row className="align-items-center">
                                <Col md={4} className="img-col">
                                    <Image src={exhibitionData?.cover} alt={exhibitionData?.title} />
                                </Col>
                                <Col md={6} className="details-col">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><h4>Title: {exhibitionData?.title}</h4></ListGroup.Item>
                                        <ListGroup.Item><h5>Date: {exhibitionData?.date}</h5></ListGroup.Item>
                                        <ListGroup.Item><h5>Description: {exhibitionData?.description}</h5></ListGroup.Item>
                                        <ListGroup.Item><h6>Place: {exhibitionData?.place}</h6></ListGroup.Item>
                                        <ListGroup.Item><h6>Owner: {exhibitionData?.owner}</h6></ListGroup.Item>

                                    </ListGroup>
                                </Col>
                            </Row>
                        </>
                }
            </Container>
        </div>
    )
}

export default ExhibitionDetailsPage

