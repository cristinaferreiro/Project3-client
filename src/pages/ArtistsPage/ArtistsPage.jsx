

import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ArtistsList from '../../components/ArtistsList/ArtistsList.jsx'
import './ArtistsPage.css'

function AboutUsPage() {

    return (
        <div className="about-us-page">
            <h2 className="therow-title">ARTISTS</h2>
            <hr className="hr-full-width" />
            <Container>
                <ArtistsList />
            </Container>
        </div>
    )
}

export default AboutUsPage