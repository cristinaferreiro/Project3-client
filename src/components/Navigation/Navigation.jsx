// import React from 'react'
// import './Navigation.css'
// import { Link } from "react-router-dom"
// import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar'
// import Sidebar from '../SideBar/SideBar'


// const { loggedUser, logout } = useContext(AuthContext)



// function Navigation() {
//     return (
//         <Navbar className="bg-body-tertiary rounded-navbar">
//             <Container fluid>
//                 <Sidebar />
//                 <Navbar.Brand href="/">
//                     <Link to="/" className="navbar-logo">ROW</Link>
//                 </Navbar.Brand>
//                 <Navbar.Collapse id="responsive-navbar-nav">

//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/about">About</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/signup">Sign Up</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/login">Log In</Link>
//                         </li>

//                     </ul>
//                     {
//                         loggedUser ?
//                             <>
//                                 <span onClick={logout} className='nav-link'>Cerrar sesión</span>
//                             </>
//                             :
//                             <>
//                                 <Link to={'/signup'} className='nav-link'>Sign Up</Link>
//                                 <Link to={'/login'} className='nav-link'>Log In</Link>
//                             </>
//                     }

//                     <Navbar.Text className="justify-content-end">
//                         {loggedUser && <Navbar.Text>¡Hola, {loggedUser.username}!</Navbar.Text>}
//                     </Navbar.Text>

//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// }

// export default Navigation


import React, { useContext } from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from '../SideBar/SideBar';
import { AuthContext } from '../../context/auth.context'

function Navigation() {
    const { loggedUser, logout } = useContext(AuthContext);

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
                        {
                            loggedUser ?
                                <>
                                    <Link to={'add-artwork'} className='nav-link'>Add Artwork</Link>
                                    <span onClick={logout} className='nav-link'>Log Out</span>
                                </>
                                :
                                <>
                                    <Link to={'/signup'} className='nav-link'>Sign Up</Link>
                                    <Link to={'/login'} className='nav-link'>Log In</Link>
                                </>
                        }
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
