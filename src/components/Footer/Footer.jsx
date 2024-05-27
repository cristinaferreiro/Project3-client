import './Footer.css'
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div>
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
                                <li><a href="https://www.youtube.com" target="_blank">YOUTUBE</a></li>
                                <li><a href="https://twitter.com" target="_blank">TWITTER</a></li>
                                <li><a href="https://www.instagram.com" target="_blank">INSTAGRAM</a></li>
                                <li><a href="https://www.facebook.com" target="_blank">FACEBOOK</a></li>
                                <li><a href="https://www.tiktok.com" target="_blank">TIKTOK</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>



                <div className="footer">
                    <p className="text-center mt-4 mb-4">
                        <h5>All Rights Reserved. © 2024</h5></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer