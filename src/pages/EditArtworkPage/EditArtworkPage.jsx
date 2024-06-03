import React from 'react'
import { useParams } from 'react-router-dom'
import EditArtworkForm from './../../components/EditArtworkForm/EditArtworkForm'
import { Container, Row, Col } from 'react-bootstrap'


const EditArtworkPage = () => {
    const { artworkId } = useParams()

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h1>Edit your Artwork</h1>
                    <EditArtworkForm artworkId={artworkId} />
                </Col>
            </Row>
        </Container>
    )
}

export default EditArtworkPage
