import React from 'react'
import './Navigation.css'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Sidebar from '../SideBar/SideBar'

function Navigation() {
    return (
        <Navbar className="bg-body-tertiary rounded-navbar">
            <Container fluid>
                <Sidebar />
                <Navbar.Brand href="/">
                    <Link to="/" className="navbar-logo">ROW</Link>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <ul className="navbar-nav">

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
    )
}

export default Navigation
