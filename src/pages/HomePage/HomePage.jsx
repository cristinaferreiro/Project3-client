import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="video-background">
            <video autoPlay loop playsInline muted>
                <source src="https://www.julian-charriere.net/media/pages/projects/controlled-burn/c68b610a44-1686223648/05_juliancharriere_controlledburn_websiteclips_lessthan100mb.mp4" type="video/mp4" />
            </video>
            <div className="content">
                <Link to="/all-tracks" className="link">
                    <Spinner
                        animation="border"
                        role="status"
                        className="spinner"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <h4 className="spinner-text"><strong>THE</strong> ROW</h4>
                </Link>
                <div className="red-background">
                    <Spinner
                        animation="border"
                        role="status"
                        style={{ width: '250px', height: '250px' }}
                        className="spinner"
                    >
                        <span className="visually-hidden">DROP HIT</span>
                        <h4 className="spinner-text"><strong>ALL</strong> TRACKS</h4>
                    </Spinner>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
