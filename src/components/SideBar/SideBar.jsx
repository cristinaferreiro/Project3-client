import React, { useState } from 'react';
import navIcon from '../../assets/navIcon.png';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './SideBar.css';

function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="translucent" onClick={handleShow}>
                <img src={navIcon} alt='Navicon' className='navIcon' />
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>THE ROW</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li>
                            <Link to={'/add-artwork'}>Add Artwork</Link>
                        </li>
                        <li>
                            <Link to={'/add-exhibition'}>Add Exhibition</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About Us</Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;
