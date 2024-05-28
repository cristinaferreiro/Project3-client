import React from 'react';
import './AddArtworkPage.css';
import AddArtworkForm from '../../components/AddArtworkForm/AddArtworkForm'
import { Container } from "react-bootstrap"


function AddArtworkPage() {
    return (
        <Container>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="row justify-content-center w-100">
                    <div className="col-md-6">
                        <h1 className="text-center">Add you artwork</h1>
                        <hr className="mx-auto d-block w-50" style={{ backgroundColor: 'none' }} />
                        <AddArtworkForm />
                    </div>
                </div>
            </div>
        </Container>
    );


}

export default AddArtworkPage;