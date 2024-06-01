import React from 'react'
import { useParams } from 'react-router-dom'
import EditExhibitionForm from './../../components/EditExhibitionForm/EditExhibitionForm'
import { Container, Row, Col } from 'react-bootstrap'

const EditExhibitionPage = () => {
    const { exhibitionId } = useParams()

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={8}>
                    <h1>Edit Exhibition</h1>
                    <EditExhibitionForm exhibitionId={exhibitionId} />
                </Col>
            </Row>
        </Container>
    )
}

export default EditExhibitionPage
