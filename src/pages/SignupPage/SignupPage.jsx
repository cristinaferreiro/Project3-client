import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'
import React from 'react';
import './SignupPage.css';

function SignupPage() {
    return (
        <Container>

            <Row>

                <Col md={{ span: 6, offset: 3 }}>

                    <h2 className="therow-title">SIGN UP</h2>

                    <hr />

                    <SignupForm />

                </Col>
            </Row>

        </Container>
    )
}

export default SignupPage
