
import './../SideBar/SideBar.css'

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react'

const Sidebar = () => {
    const [show, setShow] = useState(false)



    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Button variant="translucent" onClick={handleShow}>
                <p> HOLA</p>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Link to="/">
                        <Offcanvas.Title>THE ROW</Offcanvas.Title>
                    </Link>

                </Offcanvas.Header>

                <Offcanvas.Body>
                    <ul>
                        <li>
                            <Link to={'/login'}>LOG IN</Link>

                        </li>

                        <li>
                            <Link to={'/signup'}>SIGN UP</Link>
                        </li>

                        <li>
                            <Link to={'/about'}>ABOUT</Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Sidebar