import React from 'react'
import { useParams } from 'react-router-dom'
import EditExhibitionForm from './../../components/EditExhibitionForm/EditExhibitionForm'
import { Container, Row, Col } from 'react-bootstrap'

const EditExhibitionPage = () => {
    const { exhibitionId } = useParams()

    return (
        <Container>
            <Row className="justify-content-center mt-5 mb-4" >
                <Col md={8}>
                    <h2 className="therow-title">EDIT EXHIBITION</h2>
                    <hr className="hr-full-width" />
                    <EditExhibitionForm exhibitionId={exhibitionId} />
                </Col>
            </Row>
        </Container>
    )
}

export default EditExhibitionPage
