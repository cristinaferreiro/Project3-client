import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <>
            <video autoPlay loop playsInline muted className="video-background">
                <source src="https://res.cloudinary.com/dydvmhge1/video/upload/v1717599662/Mi_peli%CC%81cula_bulq29.mp4" type="video/mp4" />
            </video>

            <div className="container-background">
                {/* <div className="spinner-container">
                    <Link to="/all-tracks" style={{ textDecoration: 'none' }}>
                    <div className="spinner-box">
                        <Spinner animation="border" role="status" className="spinner">
                            <span className="visually-hidden">THE ROW</span>
                        </Spinner>
                        <div className="spinner-text">
                            <strong>THE</strong> ROW
                        </div>
                    </div> */}
                <div style={{ width: '250px', height: '250px', margin: 'auto' }}>
                    <Spinner
                        animation="border"
                        role="status"
                        style={{ width: '250px', height: '250px' }}
                        className="spinner"
                    >
                        <span className="visually-hidden">THE ROW</span>
                        <h4 className="spinner-text"><strong>THE </strong>ROW</h4>
                    </Spinner>
                </div>
            </div>

        </>
    );
}

export default HomePage;
