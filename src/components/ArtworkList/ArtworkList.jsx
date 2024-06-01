import React from 'react'
import './ArtworksList.css'
import { Col, Row } from "react-bootstrap"
import ArtworkCard from '../ArtworkCard/ArtworkCard'


function ArtworksList({ artworkData }) {
    if (!artworkData) {
        return <div>No hay datos disponibles.</div>;
    }

    return (
        <Row>
            {artworkData.map((artwork) => (
                <Col md={3} key={artwork._id} className='mb-4'>
                    <ArtworkCard {...artwork} />
                </Col>
            ))}
        </Row>
    )
}


export default ArtworksList