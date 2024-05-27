import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'
import React from 'react';
import './SignupPage.css';

function SignupPage() {
    return (
        <Container>

            <Row>

                <Col md={{ span: 6, offset: 3 }}>

                    <h1>REGISTRO TEST</h1>

                    <hr />

                    <SignupForm />

                </Col>
            </Row>

        </Container>
    )
}

export default SignupPage
