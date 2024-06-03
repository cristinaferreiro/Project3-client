// ArtistsList.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../context/auth.context';
import userServices from '../../services/user.services';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './ArtistsList.css';

function ArtistsList() {
    const { user } = useContext(AuthContext);
    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadAllUsers();
    }, [user]);

    const loadAllUsers = () => {
        userServices
            .getAllUsers()
            .then(({ data }) => {
                setUsersData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            });
    };

    return (
        <div className="artistsList">
            <h1>Artists</h1>
            <hr />
            <Container>
                {isLoading ? (
                    <Spinner animation="border" size="sm" />
                ) : (
                    <>
                        {usersData.length > 0 ? (
                            usersData.map(user => (
                                <Row key={user._id} className="artist">
                                    <Col md={12}>
                                        <Link to={`/artists-details/${user._id}`} className="artist">
                                            <h2>{user.username} {user.lastname}</h2>
                                        </Link>
                                    </Col>
                                </Row>
                            ))
                        ) : (
                            <p>No artists available</p>
                        )}
                    </>
                )}
            </Container>
        </div>
    );
}

export default ArtistsList;
