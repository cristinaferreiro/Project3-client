import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './HomePage.css';
import artworkServices from '../../services/artwork.services';

function HomePage() {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        fetchArtworks();
    }, []);

    const fetchArtworks = async () => {
        try {
            const response = await artworkServices.getAllArtwork();
            const randomizedArtworks = shuffleArray(response.data);
            setArtworks(randomizedArtworks);
        } catch (error) {
            console.error('Error fetching artworks:', error);
        }
    };

    const shuffleArray = (array) => {
        // Método de mezcla de Fisher-Yates
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <div className='HomePage'>
            <h1>THE ROW</h1>
            <Carousel>
                {artworks.map((artwork) => (
                    <Carousel.Item key={artwork._id}>
                        <img
                            className="d-block w-100"
                            src={artwork.image}
                            alt={artwork.title}
                        />
                        <Carousel.Caption>
                            <h3>{artwork.title}</h3>
                            {/* Agrega más detalles si es necesario */}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default HomePage;
