import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import ArtistsList from '../../components/ArtistsList/ArtistsList.jsx'
import './ArtistsPage.css'

const ArtistsPage = () => {
    return (
        <Container fluid className="artists-page-container">
            <Row className="justify-content-center">
                <Col md={{ offset: 3, span: 6 }}>
                    <ArtistsList />
                </Col>
            </Row>
        </Container>
    )
}

export default ArtistsPage
