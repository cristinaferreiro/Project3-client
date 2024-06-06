
import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm.jsx'
import React from 'react'

const LoginPage = () => {

    return (

        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <h2 className="therow-title">LOG IN</h2>
                    <hr />
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage
