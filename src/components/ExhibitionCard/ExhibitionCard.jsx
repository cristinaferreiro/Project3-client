// import { Link } from "react-router-dom"
// import './ExhibitionCard.css'

// const ExhibitionCard = ({ _id, title, date, description, place, owner, artworks }) => {

//     return (
//         <div className='ExhibitionCard'>

//             <Link to={`/exhibition-details/${_id}`}>

//                 <div>
//                     <h4>{title}</h4>
//                     <h4>{owner.firstName}</h4>
//                     <h4>{date}</h4>
//                     <h4>{place}</h4>
//                     <h4>{description}</h4>
//                     <h4>{artworks}</h4>

//                     {/* <h4>{artworks.join(', ')}</h4> */}
//                 </div>
//             </Link>
//         </div>
//     )
// }

// export default ExhibitionCard



// ExhibitionCard.jsx
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, ListGroup, Spinner } from 'react-bootstrap';
import './ExhibitionCard.css';
import { AuthContext } from '../../context/auth.context';
import userServices from '../../services/user.services';

const ExhibitionCard = ({ _id, title, date, description, place, owner, image }) => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (owner && owner._id) {
            loadUserInfo(owner._id);
        } else {
            setUserData(owner);
            setIsLoading(false);
        }
    }, [owner]);

    const loadUserInfo = (ownerId) => {
        userServices
            .getOneUsers(ownerId)
            .then(({ data }) => {
                setUserData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    };

    return (
        <div className="ExhibitionCard">
            {isLoading ? (
                <Spinner animation="border" size="sm" />
            ) : (
                <Card className="exhibition-card">
                    <Link to={`/exhibition-details/${_id}`}>
                        <Card.Img variant="top" src={image} alt={title} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{userData?.username} {userData?.lastname}</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item><h5><em>{title}</em></h5></ListGroup.Item>
                                <ListGroup.Item><h5>{date}</h5></ListGroup.Item>
                                <ListGroup.Item><h5>{place}</h5></ListGroup.Item>
                                <ListGroup.Item><h5>{description}</h5></ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default ExhibitionCard;
