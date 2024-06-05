

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../context/auth.context';
import userServices from '../../services/user.services';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import './ArtistsList.css';
import { Link } from 'react-router-dom';

function ArtistsList() {
    const { user } = useContext(AuthContext);
    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hoveredUserImage, setHoveredUserImage] = useState('')

    useEffect(() => {
        const loadAllUsers = async () => {
            try {
                const response = await userServices.getAllUsers();
                setUsersData(response.data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        loadAllUsers();
    }, [user])



    return (
        <Container className="artistsListContainer">
            <div className="artistsList">

                {isLoading ? (
                    <Spinner animation="border" size="sm" />
                ) : (
                    <>
                        <div
                            className="artist-background"
                            style={{ backgroundImage: `url(${hoveredUserImage})` }}
                        />
                        {usersData.length > 0 ? (
                            <Row className="artistsRow">
                                {
                                    usersData.map((user) => (
                                        <Col key={user._id} md={4} className="artist-col">
                                            <Link
                                                to={`/artists/${user._id}`}
                                                className="artist-link"
                                                onMouseEnter={() => setHoveredUserImage(user.backgrdimage)}
                                                onMouseLeave={() => setHoveredUserImage('')}
                                            >
                                                <div className="artist-container">
                                                    <h2>{user.username} {user.lastname}</h2>
                                                </div>
                                            </Link>
                                        </Col>
                                    ))
                                }
                            </Row>
                        ) : (
                            <p>No artists available</p>
                        )}
                    </>
                )}
            </div>
        </Container>
    );
}

export default ArtistsList;
