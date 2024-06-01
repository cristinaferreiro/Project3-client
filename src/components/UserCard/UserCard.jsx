import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userServices from '../../services/user.services';
import './UserCard.css';

const UserCard = ({ userData }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (userData?._id) {
            loadUserInfo(userData._id);
        } else {
            setIsLoading(false);
        }
    }, [userData]);

    const loadUserInfo = (userId) => {
        userServices
            .getOneUsers(userId)
            .then(({ data }) => {
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    };

    return (
        <div className="UserCard">
            {isLoading ? (
                <Spinner animation="border" size="sm" />
            ) : (
                <Card className="user-card">
                    <Card.Body>
                        <Card.Title>{userData?.username} {userData?.lastname}</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item><img src={userData?.userimage} alt="User Image" /></ListGroup.Item>

                                <ListGroup.Item>{userData?.country}</ListGroup.Item>
                                <ListGroup.Item>{userData?.birthyear}</ListGroup.Item>
                                <ListGroup.Item>Bio: {userData?.userbio}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default UserCard;
