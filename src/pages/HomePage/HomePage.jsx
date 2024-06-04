// import React, { useEffect, useState } from 'react';
// import { Carousel } from 'react-bootstrap';
// import './HomePage.css';
// import artworkServices from '../../services/artwork.services';

// function HomePage() {
//     const [artworks, setArtworks] = useState([]);

//     useEffect(() => {
//         fetchArtworks();
//     }, []);

//     const fetchArtworks = async () => {
//         try {
//             const response = await artworkServices.getAllArtwork();
//             const randomizedArtworks = shuffleArray(response.data);
//             setArtworks(randomizedArtworks);
//         } catch (error) {
//             console.error('Error fetching artworks:', error);
//         }
//     };

//     const shuffleArray = (array) => {
//         // Método de mezcla de Fisher-Yates
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//         return array;
//     };

//     return (
//         <div className='HomePage'>
//             {/* <h1>THE ROW</h1> */}
//             <Carousel>
//                 {artworks.map((artwork) => (
//                     <Carousel.Item key={artwork._id}>
//                         <img
//                             className="d-block w-100"
//                             src={artwork.image}
//                             alt={artwork.title}
//                         />
//                         <Carousel.Caption>
//                             <h3>{artwork.title}</h3>
//                             {/* Agrega más detalles si es necesario */}
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                 ))}
//             </Carousel>
//         </div>



//     );
// }

// export default HomePage;


import { Container, Row, Col, Spinner, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa el componente Link una sola vez
import React from 'react';
import './HomePage.css'; // Importa tu archivo CSS con los estilos

function HomePage() {
    // return (
    //     <div>
    //         {/* <div className="home-page">
    //             {/* Contenido de la página de inicio */}

    //         <div style={{ display: 'flex' }}>
    //             <Link to="/all-tracks" style={{ flex: '1', textAlign: 'center', textDecoration: 'none' }}>
    //                 <div style={{ width: '250px', height: '250px', margin: 'auto' }}>
    //                     <Spinner
    //                         animation="border"
    //                         role="status"
    //                         style={{ width: '250px', height: '250px' }}
    //                         className="spinner" >
    //                         <span className="visually-hidden">THE ROW</span>
    //                         <h4 className="spinner-text"><strong>THE</strong> ROW</h4>
    //                     </Spinner>
    //                 </div>
    //             </Link>
    //         </div>
    //     </div>
    // );


    return (

        <div className="container" style={{ backgroundImage: 'url("ruta/a/tu/imagen.jpg")' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Link to="/all-tracks" style={{ textDecoration: 'none' }}>
                    <div style={{ width: '250px', height: '250px', position: 'relative' }}>
                        <Spinner
                            animation="border"
                            role="status"
                            style={{ width: '150px', height: '150px', position: 'absolute', top: '0', left: '0' }}
                            className="spinner"
                        >
                            <span className="visually-hidden">THE ROW</span>
                            <h4 className="spinner-text"><strong>THE</strong> ROW</h4>
                        </Spinner>
                    </div>
                </Link>
                <div className="red-background">
                    <h1>ROWROWROROW</h1>
                </div>
            </div>
        </div>
    )
}

export default HomePage;

