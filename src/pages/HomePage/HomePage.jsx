import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <>
            <video autoPlay loop playsInline muted className="video-background">
                <source src="https://www.julian-charriere.net/media/pages/projects/controlled-burn/c68b610a44-1686223648/05_juliancharriere_controlledburn_websiteclips_lessthan100mb.mp4" type="video/mp4" />
            </video>

            <div className="container-background">
                <div className="spinner-container">
                    {/* <Link to="/all-tracks" style={{ textDecoration: 'none' }}> */}
                    <div className="spinner-box">
                        <Spinner animation="border" role="status" className="spinner">
                            <span className="visually-hidden">THE ROW</span>
                        </Spinner>
                        <div className="spinner-text">
                            <strong>THE</strong> ROW
                        </div>
                    </div>
                    {/* </Link>
                    <div className="red-background">
                        <h1>ROWROWROROW</h1>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default HomePage;