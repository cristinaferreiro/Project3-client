// import React from 'react';
// import './ArtworkDetailsPage.css';
// import { Container, Row, Col, Image, ListGroup, Spinner, Card, Button } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import artworkServices from '../../services/artwork.services'


// function ArtworkDetailsPage() {

//     const [artwork, setArtwork] = useState({})
//     const { artworkId } = useParams()
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         loadArtworkDetails()
//     }, [artworkId])

//     const loadArtworkDetails = () => {
//         artworkServices
//             .getOneArtwork(artworkId)
//             .then(({ data }) => {
//                 setArtwork(data)
//                 setIsLoading(false)
//             })
//             .catch(err => console.log(err))
//     }

//     return (
//         <div className="ArtworkDetailsPage">
//             <Container>
//                 <h1 className="text-center my-4">Artwork Details</h1>
//                 {isLoading ? (
//                     <div className="d-flex justify-content-center">
//                         <Spinner animation="border" size="sm" />
//                     </div>
//                 ) : (
//                     <Row className="justify-content-center">
//                         <Col md={{ span: 6 }}>
//                             <Card className="text-center">
//                                 <Card.Img
//                                     variant="top"
//                                     src={artwork.image}
//                                     alt={artwork.title}
//                                     className="card-img-top-custom"
//                                 />
//                                 <Card.Body>
//                                     <Card.Title>{artwork.owner?.username} {artwork.owner?.lastname}</Card.Title>
//                                     <Card.Text>
//                                         <ListGroup variant="flush">
//                                             <ListGroup.Item><h6>{artwork.price} €</h6></ListGroup.Item>
//                                             <ListGroup.Item><h6>{artwork.title}</h6></ListGroup.Item>
//                                             <ListGroup.Item><h6>{artwork.technique}</h6></ListGroup.Item>
//                                             <ListGroup.Item><h6>{artwork.dimension}</h6></ListGroup.Item>
//                                             <ListGroup.Item><h6>{artwork.year}</h6></ListGroup.Item>
//                                         </ListGroup>
//                                     </Card.Text>
//                                     <Button variant="primary">Go somewhere</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 )}
//             </Container>
//         </div>
//     )
// }

// export default ArtworkDetailsPage


import React from 'react';
import './ArtworkDetailsPage.css';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import artworkServices from '../../services/artwork.services';
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard';

function ArtworkDetailsPage() {
    const [artwork, setArtwork] = useState({});
    const { artworkId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadArtworkDetails();
    }, [artworkId]);

    const loadArtworkDetails = () => {
        artworkServices
            .getOneArtwork(artworkId)
            .then(({ data }) => {
                setArtwork(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="ArtworkDetailsPage">
            <Container>
                <h1 className="text-center my-4">Artwork Details</h1>
                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" size="sm" />
                    </div>
                ) : (
                    <Row className="justify-content-center">
                        <Col md={{ span: 6 }}>
                            <ArtworkCard {...artwork} />
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default ArtworkDetailsPage;
