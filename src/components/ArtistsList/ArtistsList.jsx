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
                                        {/* <ul class="featureds">
                                            <li>
                                                <a href="https://curatedbyshop.com/product/pocket-t-shirt/" data-id="1">
                                                    <span>Julia Zamora</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://curatedbyshop.com/product/striped-tote-bag/" data-id="2">
                                                    <span>Federico Herrero</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://curatedbyshop.com/product/e42-intro-by-aitor-bigas/" data-id="3">
                                                    <span>Teresa Margolles</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://curatedbyshop.com/product/lisbon-cotton-shirt/" data-id="4">
                                                    <span>Xu Zhen</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://curatedbyshop.com/product/tap-jars/" data-id="5">
                                                    <span>Christopher Myers</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://curatedbyshop.com/product/half-zip-sweatshirt-2/" data-id="6">
                                                    <span>Alexis Jang</span>
                                                </a>
                                            </li>
                                           
                                        </ul> */}
                                        <Link to={`/artists/${user._id}`} className="username">
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
