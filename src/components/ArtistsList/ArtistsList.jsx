// import React, { useContext, useEffect, useState } from 'react'
// import { AuthContext } from './../../context/auth.context'
// import userServices from '../../services/user.services'
// import { Container, Row, Col, Spinner } from "react-bootstrap"
// import './ArtistsList.css'
// import { Link } from 'react-router-dom'

// function ArtistsList() {
//     const { user } = useContext(AuthContext)
//     const [usersData, setUsersData] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     const [hoveredUserId, setHoveredUserId] = useState('')

//     useEffect(() => {
//         const loadAllUsers = async () => {
//             try {
//                 const response = await userServices.getAllUsers()
//                 setUsersData(response.data)
//             } catch (err) {
//                 console.error(err)
//             } finally {
//                 setIsLoading(false)
//             }
//         }

//         loadAllUsers()
//     }, [user])

//     return (

//         <Container className="artistsListContainer">
//             <div className="artistsList">
//                 {isLoading ? (
//                     <Spinner animation="border" size="sm" />
//                 ) : (
//                     <Row className="justify-content-center">
//                         <Col md={8}>
//                             {usersData.length > 0 ? (
//                                 <Row className="artistsRow">
//                                     {usersData.map((user) => (
//                                         <Col key={user._id} md={4} className="artist-col">


//                                             <Link
//                                                 to={`/artists/${user._id}`}
//                                                 className="artist-link"
//                                                 onMouseEnter={() => setHoveredUserId(user._id)}
//                                                 onMouseLeave={() => setHoveredUserId(user._id)}
//                                             >
//                                                 <div className="artist-container">
//                                                     <h2>{user.username} {user.lastname}</h2>
//                                                     {hoveredUserId === user._id && (
//                                                         <img
//                                                             src={user.backgrdimage}
//                                                             alt="User background"
//                                                             className="artist-background"
//                                                         />
//                                                     )}
//                                                 </div>
//                                             </Link>


//                                         </Col>
//                                     ))}
//                                 </Row>
//                             ) : (
//                                 <p>No artists available</p>
//                             )}
//                         </Col>
//                     </Row>
//                 )}
//             </div>
//         </Container>
//     )
// }

// export default ArtistsList




import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './../../context/auth.context'
import userServices from '../../services/user.services'
import { Container, Row, Col, Spinner } from "react-bootstrap"
import './ArtistsList.css'
import { Link } from 'react-router-dom'

function ArtistsList() {
    const { user } = useContext(AuthContext)
    const [usersData, setUsersData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hoveredUserId, setHoveredUserId] = useState('')
    const [backgroundImages, setBackgroundImages] = useState([])

    useEffect(() => {
        const loadAllUsers = async () => {
            try {
                const response = await userServices.getAllUsers()
                setUsersData(response.data)
            } catch (err) {
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }

        loadAllUsers()
    }, [user])

    useEffect(() => {

        const handleMouseEnter = (userId, backgroundImage) => {
            setBackgroundImages(prevImages => [...prevImages, backgroundImage])
        }


        const handleMouseLeave = () => {
            setBackgroundImages([])
        }

        const links = document.querySelectorAll('.artist-link')
        links.forEach(link => {
            link.addEventListener('mouseenter', () => handleMouseEnter(link.dataset.userId, link.dataset.backgroundImage))
            link.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            links.forEach(link => {
                link.removeEventListener('mouseenter', () => handleMouseEnter(link.dataset.userId, link.dataset.backgroundImage))
                link.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <Container className="artistsListContainer">
            <div className="artistsList">
                {isLoading ? (
                    <Spinner animation="border" size="sm" />
                ) : (
                    <Row className="justify-content-center">
                        <Col md={12}>
                            {usersData.length > 0 ? (
                                <Row className="artistsRow">
                                    {usersData.map(user => (
                                        <Col key={user._id} md={4} className="artist-col">
                                            <Link
                                                to={`/artists/${user._id}`}
                                                className="artist-link"
                                                data-user-id={user._id}
                                                data-background-image={user.backgrdimage}
                                                onMouseEnter={() => setHoveredUserId(user._id)}
                                                onMouseLeave={() => setHoveredUserId('')}
                                            >
                                                <div className="artist-container">
                                                    <h2>{user.username} {user.lastname}</h2>
                                                    {hoveredUserId === user._id && (
                                                        <img
                                                            src={user.backgrdimage}
                                                            alt="User background"
                                                            className="artist-background"
                                                        />
                                                    )}
                                                </div>
                                            </Link>
                                        </Col>
                                    ))}
                                </Row>
                            ) : (
                                <p>No artists available</p>
                            )}
                        </Col>
                    </Row>
                )}
            </div>
        </Container>
    )
}

export default ArtistsList



// <div className="artist-container">
//     <h2>{user.username} {user.lastname}</h2>
//     {/* Mostrar la imagen de fondo si el usuario está seleccionado */}
//     {hoveredUserId === user._id && (
//         <img
//             src={user.backgrdimage}
//             alt="User background"
//             className="artist-background"
//         />
//     )}
// </div>





// // import React, { useContext, useEffect, useState } from 'react';
// // import { AuthContext } from './../../context/auth.context';
// // import userServices from '../../services/user.services';
// // import { Container, Row, Col, Spinner } from "react-bootstrap";
// // import './ArtistsList.css';
// // import { Link } from 'react-router-dom';

// // function ArtistsList() {
// //     const { user } = useContext(AuthContext);
// //     const [usersData, setUsersData] = useState([]);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [hoveredUserId, setHoveredUserId] = useState('');
// //     const [backgroundImages, setBackgroundImages] = useState([]);
// //     const [imagePositions, setImagePositions] = useState({});

// //     useEffect(() => {
// //         const loadAllUsers = async () => {
// //             try {
// //                 const response = await userServices.getAllUsers();
// //                 setUsersData(response.data);
// //             } catch (err) {
// //                 console.error(err);
// //             } finally {
// //                 setIsLoading(false);
// //             }
// //         };

// //         loadAllUsers();
// //     }, [user]);

// //     const handleMouseEnter = (userId, backgroundUrl, xPos, yPos) => {
// //         setHoveredUserId(userId);
// //         setBackgroundImages(prevImages => [...prevImages, { url: backgroundUrl }]);
// //         setImagePositions(prevPositions => ({ ...prevPositions, [userId]: { x: xPos, y: yPos } }));
// //     };

// //     return (
// //         <Container className="artistsListContainer">
// //             <div className="artistsList">
// //                 {isLoading ? (
// //                     <Spinner animation="border" size="sm" />
// //                 ) : (
// //                     <Row className="justify-content-center">
// //                         <Col md={8}>
// //                             {usersData.length > 0 ? (
// //                                 <Row className="artistsRow">
// //                                     {usersData.map((user) => (
// //                                         <Col key={user._id} md={4} className="artist-col">
// //                                             <Link
// //                                                 to={`/artists/${user._id}`}
// //                                                 className="artist-link"
// //                                                 onMouseEnter={(event) => {
// //                                                     const rect = event.target.getBoundingClientRect();
// //                                                     const xPos = rect.left;
// //                                                     const yPos = rect.top;
// //                                                     handleMouseEnter(user._id, user.backgrdimage, xPos, yPos);
// //                                                 }}
// //                                             >
// //                                                 <div className="artist-container">
// //                                                     <h2>{user.username} {user.lastname}</h2>
// //                                                     {hoveredUserId === user._id && backgroundImages.map((image, index) => (
// //                                                         <img
// //                                                             key={index}
// //                                                             src={image.url}
// //                                                             alt={`User background ${index}`}
// //                                                             className="artist-background"
// //                                                             style={{ left: `${imagePositions[user._id]?.x}px`, top: `${imagePositions[user._id]?.y}px` }}
// //                                                         />
// //                                                     ))}
// //                                                 </div>
// //                                             </Link>
// //                                         </Col>
// //                                     ))}
// //                                 </Row>
// //                             ) : (
// //                                 <p>No artists available</p>
// //                             )}
// //                         </Col>
// //                     </Row>
// //                 )}
// //             </div>
// //         </Container>
// //     );
// // }

// // export default ArtistsList;
