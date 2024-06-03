import React from 'react'
import './AddArtworkPage.css'
import AddArtworkForm from '../../components/AddArtworkForm/AddArtworkForm'
import { Col, Container, Row } from "react-bootstrap"

function AddArtworkPage() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="text-center">Add your artwork</h1>
                    <hr className="mx-auto d-block w-50" style={{ backgroundColor: 'none' }} />
                    <AddArtworkForm />
                </Col>
            </Row>
        </Container>
    )
}

export default AddArtworkPage