import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Spinner, Button } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import exhibitionServices from '../../services/exhibition.services';
import './ExhibitionDetailsPage.css';

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
                data.date = new Date(data.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) //////
                data.dateend = new Date(data.dateend).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) ///////
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
                // Redirige al usuario a la página de perfil después de eliminar la exposición
                navigate('/profile');
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

                            <ListGroup variant="flush">
                                <ListGroup.Item className="exhibition-image">
                                    <img src={exhibitionData.image} alt={exhibitionData.title} />
                                </ListGroup.Item>
                                <ListGroup.Item className="exhibition-info">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>{exhibitionData.title}</strong></ListGroup.Item>
                                        <ListGroup.Item>{exhibitionData.date} - {exhibitionData.dateend}</ListGroup.Item>
                                        <ListGroup.Item><h5>{exhibitionData.place}</h5></ListGroup.Item>
                                        <ListGroup.Item>{exhibitionData.description}</ListGroup.Item>
                                    </ListGroup>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                )}
                <div>
                    <Button variant="danger" onClick={handleDeleteExhibition}>Delete Exhibition</Button>
                </div>
                <div>
                    <Link to="/profile" className="btn btn-secondary">
                        Back
                    </Link>
                    <Link to={`/edit-exhibition/${exhibitionId}`} className="btn btn-primary" style={{ marginLeft: '10px' }}>
                        Edit Exhibition
                    </Link>
                </div>
            </Container>
        </div>
    );
}

export default ExhibitionDetailsPage;



// // // ExhibitionDetailsPage.jsx
// // import React from 'react';
// // import './ExhibitionDetailsPage.css';
// // import { Container, Row, Col, Spinner } from 'react-bootstrap';
// // import { useParams } from 'react-router-dom';
// // import { useEffect, useState } from 'react';
// // import exhibitionServices from '../../services/exhibition.services';
// // import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard';


// // function ExhibitionDetailsPage() {
// //     const [exhibition, setExhibition] = useState({});
// //     const { exhibitionId } = useParams();
// //     const [isLoading, setIsLoading] = useState(true);

// //     useEffect(() => {
// //         loadExhibitionDetails();
// //     }, [exhibitionId]);

// //     const loadExhibitionDetails = () => {
// //         exhibitionServices
// //             .getOneExhibition(exhibitionId)
// //             .then(({ data }) => {
// //                 // Format the dates
// //                 data.date = new Date(data.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
// //                 data.dateend = new Date(data.dateend).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
// //                 setExhibition(data);
// //                 setIsLoading(false);
// //             })
// //             .catch(err => console.log(err));
// //     };

// //     return (
// //         <div className="ExhibitionDetailsPage">
// //             <Container>
// //                 <h1 className="text-center my-4">Exhibition Details</h1>
// //                 {isLoading ? (
// //                     <div className="d-flex justify-content-center">
// //                         <Spinner animation="border" size="sm" />
// //                     </div>
// //                 ) : (
// //                     <Row className="justify-content-center">
// //                         <Col md={{ span: 6 }}>
// //                             <ExhibitionCard {...exhibition} />
// //                         </Col>
// //                     </Row>
// //                 )}
// //             </Container>
// //         </div>
// //     );
// // }

// // export default ExhibitionDetailsPage;

