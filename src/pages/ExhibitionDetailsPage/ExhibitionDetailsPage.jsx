import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Button, ButtonGroup } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import exhibitionServices from '../../services/exhibition.services';
import './ExhibitionDetailsPage.css';
import ScrollToTop from "react-scroll-to-top";

function ExhibitionDetailsPage() {
    const [exhibitionData, setExhibitionInfo] = useState({});
    const { exhibitionId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        loadExhibitionDetails();
    }, [exhibitionId]);

    const loadExhibitionDetails = () => {
        exhibitionServices
            .getOneExhibition(exhibitionId)
            .then(({ data }) => {
                data.date = new Date(data.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
                data.dateend = new Date(data.dateend).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                setExhibitionInfo(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    };

    const handleDeleteExhibition = () => {
        exhibitionServices
            .deleteExhibition(exhibitionId)
            .then(() => {
                console.log("Exhibition deleted successfully");
                navigate('/profile');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="exhibition-details">
            <Container>
                <h2 className="therow-title">EXHIBITION DETAILS</h2>
                <hr className="hr-full-width" />

                <div className="First-margin">
                    {isLoading ? (
                        <div className="d-flex justify-content-center">
                            <Spinner animation="border" size="sm" />
                        </div>
                    ) : (
                        <Row className="justify-content-center">
                            <Col md={{ span: 8 }}>
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
                    )}

                    <ButtonGroup className="mb-2">
                        <Button variant="outline-danger" onClick={handleDeleteExhibition}>Delete Exhibition</Button>
                        <Button as={Link} to="/profile" variant="outline-danger">Back</Button>
                        <Button as={Link} to={`/edit-exhibition/${exhibitionId}`} style={{ marginLeft: '10px' }} variant="outline-danger">Edit Exhibition</Button>
                    </ButtonGroup>


                    <ScrollToTop smooth />
                </div>
            </Container>
        </div>
    );
}

export default ExhibitionDetailsPage;
