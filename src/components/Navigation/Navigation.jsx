
import React, { useContext } from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Sidebar from '../SideBar/SideBar';
import { AuthContext } from '../../context/auth.context';

function Navigation() {
    const { user, logout } = useContext(AuthContext);

    return (
        <Navbar className="bg-body-tertiary rounded-navbar" fixed="top" expand="lg">
            <Container fluid>
                <div className="d-flex align-items-center">
                    {user && <Sidebar />}
                    <Navbar.Brand>
                        <Link to="/" className="navbar-logo">THE ROW</Link>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/artists">Artists</Nav.Link>
                        {user ? (
                            <>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                                <Nav.Link onClick={logout}>Log Out</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                                <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
