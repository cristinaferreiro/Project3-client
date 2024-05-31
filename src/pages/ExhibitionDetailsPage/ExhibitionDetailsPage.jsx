
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, ListGroup, Spinner, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import exhibitionServices from '../../services/exhibition.services';
import './ExhibitionDetailsPage.css';

function ExhibitionDetailsPage() {
    const [exhibitionData, setExhibitionInfo] = useState({});
    const { exhibitionId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadExhibitionDetails();
    }, [exhibitionId]);

    const loadExhibitionDetails = () => {
        exhibitionServices
            .getOneExhibition(exhibitionId)
            .then(({ data }) => {
                data.date = new Date(data.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) //////
                data.dateend = new Date(data.dateend).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) ///////
                setExhibitionInfo(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    };



    return (
        <div className="ExhibitionDetailsPage">
            <Container>
                <h1 className="text-center my-4">Exhibition Details</h1>
                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" size="sm" />
                    </div>
                ) : (
                    <Row className="justify-content-center">
                        <Col md={{ span: 6 }}>
                            <Card className="text-center">
                                <Card.Img
                                    variant="top"
                                    src={exhibitionData.cover}
                                    alt={exhibitionData.title}
                                    className="card-img-top-custom"
                                />
                                <Card.Body>
                                    <Card.Title>{exhibitionData.owner?.username} {exhibitionData.owner?.lastname}</Card.Title>
                                    <Card.Text>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item><h6>{exhibitionData.title}</h6></ListGroup.Item>
                                            <ListGroup.Item><h6>{exhibitionData.date} - {exhibitionData.dateend}</h6></ListGroup.Item>
                                            <ListGroup.Item><h6>{exhibitionData.place}</h6></ListGroup.Item>
                                            <ListGroup.Item><h6>{exhibitionData.description}</h6></ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default ExhibitionDetailsPage;
