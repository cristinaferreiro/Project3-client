
import React, { useState } from 'react';
import navIcon from '../../assets/navIcon.png';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './SideBar.css';
import hamb from '../../assets/hamb.png';

function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLinkClick = () => {
        handleClose();
    };

    return (
        <>
            <Button variant="translucent" onClick={handleShow}>
                <img src={hamb} alt='Hamb' className='hamb' />
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>THE ROW</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li>
                            <Link to={'/add-artwork'} onClick={handleLinkClick}>Add Artwork</Link>
                        </li>
                        <li>
                            <Link to={'/add-exhibition'} onClick={handleLinkClick}>Add Exhibition</Link>
                        </li>
                        <li>
                            <Link to={'/about'} onClick={handleLinkClick}>About Us</Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;
