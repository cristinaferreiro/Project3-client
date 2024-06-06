
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import './ExhibitionCard.css';


const ExhibitionCard = ({ _id, title, date, place, image, owner }) => {


    const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className="ExhibitionCard">

            <Card className="exhibition-card">
                <Link to={`/exhibition-details/${_id}`}>
                    <Card.Img variant="top" src={image} alt={title} />
                </Link>
                <Card.Body className="exhibition-details">
                    <Card.Title>{owner.username} {owner.lastname}</Card.Title>

                    <div className='exhibition-profile-card'>
                        <h4><strong>{title}</strong></h4>
                        <h5>{formattedDate}</h5>
                        <h5>{place}</h5>
                    </div>
                </Card.Body>

            </Card>

        </div>
    );
};

export default ExhibitionCard;
