import React from 'react';
import './AddExhibitionPage.css';
import AddExhibitionForm from '../../components/AddExhibitionForm/AddExhibitionForm'
import { Container, Row, Col } from "react-bootstrap"

function AddExhibitionPage() {

    return (
        <div className='AddExhibitionPage mt-5'>
            <Container>
                <h1>
                    NEW-EXHIBITION
                </h1>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>

                        <AddExhibitionForm />

                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default AddExhibitionPage