import './Footer.css'
import { Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="footer">
            {/* Puedes descomentar la siguiente sección si necesitas las columnas */}
            {/* <div>
                <Row>
                    <Col md={2}>
                        <ul className="footer-list">
                            <li>JOIN OUR TEAM</li>
                            <li>SHOP MERCH</li>
                            <li>JOBS</li>
                            <li>NEWS</li>
                        </ul>
                    </Col>
                    <Col md={7}>
                        <ul className="footer-list">
                            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YOUTUBE</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</a></li>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a></li>
                            <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TIKTOK</a></li>
                        </ul>
                    </Col>
                </Row>
            </div> */}
            <div>
                <p className="text-center mt-4 mb-5">
                    <h5>All Rights Reserved. © 2024</h5>
                </p>
            </div>
        </footer>
    )
}

export default Footer
