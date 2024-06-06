import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import './ErrorPage.css';

function ErrorPage() {
    return (
        <div className="ErrorPage">
            <h2 className="therow-title">ERROR 404</h2>
            <hr className="hr-full-width" />

            <div style={{ width: '250px', height: '250px', margin: 'auto', marginTop: '120px' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Spinner
                        animation="border"
                        role="status"
                        style={{ width: '250px', height: '250px' }}
                        className="spinner"
                    >
                        <span className="visually-hidden">HOME PAGE</span>
                        <h4 className="spinner-text"><strong>HOME</strong> PAGE</h4>
                    </Spinner>
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;
