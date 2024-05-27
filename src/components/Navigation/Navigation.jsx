import React from 'react';
import './Navigation.css';

import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Navigation() {
    return (
        <Navbar className="bg-body-tertiary rounded-navbar">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/" className="navbar-logo">ROW</Link>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log In</Link>
                        </li>
                    </ul>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
