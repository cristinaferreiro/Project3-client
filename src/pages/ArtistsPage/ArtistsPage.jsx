import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import ArtistsList from '../../components/ArtistsList/ArtistsList.jsx'
import './ArtistsPage.css'

const ArtistsPage = () => {
    return (

        <Container>

            <Row className="justify-content-center mt-10 w-100">
                {/* <div className="image-container">
                    <img src="path/to/initial-image.jpg" alt="Initial" />
                    <img src="path/to/hover-image.jpg" alt="Hover" className="hover-image" />
                </div> */}

                <Col md={12}>

                    <ArtistsList />
                </Col>
            </Row>
        </Container>
    )
}

export default ArtistsPage
