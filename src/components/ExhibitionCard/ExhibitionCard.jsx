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



import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, Spinner } from 'react-bootstrap';
import './ExhibitionCard.css';
import { AuthContext } from '../../context/auth.context';
import userServices from '../../services/user.services';

const ExhibitionCard = ({ _id, title, date, place, image }) => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user && user._id) {
            loadUserInfo(user._id);
        } else {
            setIsLoading(false);
        }
    }, [user]);

    const loadUserInfo = (userId) => {
        userServices
            .getOneUsers(userId)
            .then(({ data }) => {
                setUserData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    };

    const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

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
                        <div>
                            <h6><em>{title}</em></h6>
                            <h6>{formattedDate}</h6>
                            <h6>{place}</h6>
                        </div>
                    </Card.Body>

                </Card>
            )}
        </div>
    );
};

export default ExhibitionCard;
