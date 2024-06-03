
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, Spinner } from 'react-bootstrap';
import './ExhibitionCard.css';
import { AuthContext } from '../../context/auth.context';
import userServices from '../../services/user.services';

const ExhibitionCard = ({ _id, title, date, place, image, owner }) => {


    const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className="ExhibitionCard">

            <Card className="exhibition-card">
                <Link to={`/exhibition-details/${_id}`}>
                    <Card.Img variant="top" src={image} alt={title} />
                </Link>
                <Card.Body>
                    {/* <Card.Title>{userData?.username} {userData?.lastname}</Card.Title> */}
                    <Card.Title>{owner.username} {owner.lastname}</Card.Title>

                    <div>
                        <h6><em>{title}</em></h6>
                        <h6>{formattedDate}</h6>
                        <h6>{place}</h6>
                    </div>
                </Card.Body>

            </Card>

        </div>
    );
};

export default ExhibitionCard;
