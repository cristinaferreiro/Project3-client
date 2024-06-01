import React from 'react'
import { useParams } from 'react-router-dom'
import EditArtworkForm from './../../components/EditArtworkForm/EditArtworkForm'
import { Container, Row, Col } from 'react-bootstrap'


const EditArtworkPage = () => {
    const { artworkId } = useParams()

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={8}>
                    <h1>Edit Artwork</h1>
                    <EditArtworkForm artworkId={artworkId} />
                </Col>
            </Row>
        </Container>
    )
}

export default EditArtworkPage
