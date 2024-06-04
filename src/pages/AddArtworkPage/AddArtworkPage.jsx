import React from 'react'
import './AddArtworkPage.css'
import AddArtworkForm from '../../components/AddArtworkForm/AddArtworkForm'
import { Col, Container, Row } from "react-bootstrap"

function AddArtworkPage() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="therow-title">ADD NEW ARTWORK</h2>
                    <hr className="hr-full-width" />

                    <AddArtworkForm />
                </Col>
            </Row>
        </Container>
    )
}

export default AddArtworkPage