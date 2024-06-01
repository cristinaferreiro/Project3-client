
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import ArtistsList from '../../components/ArtistsList/ArtistsList.jsx'

const ArtistsPage = () => {

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <ArtistsList />

                </Col>
            </Row>

        </Container>
    )
}

export default ArtistsPage
