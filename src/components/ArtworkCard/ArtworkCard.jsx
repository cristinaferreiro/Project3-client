import { Link } from "react-router-dom"
import { Card, ListGroup } from 'react-bootstrap'
import './ArtworkCard.css'

const ArtworkCard = ({ _id, title, dimension, year, price, technique, image, owner }) => {

    return (
        <div className="ArtworkCard ">
            <Card className="artwork-card">
                <Link to={`/artwork-details/${_id}`}>
                    <Card.Img variant="top" src={image} alt={title} />
                </Link>
                <Card.Body className="artwork-details">
                    <Card.Title><strong>{owner.username} {owner.lastname}</strong></Card.Title>
                    <Card.Text>
                        <div className='artist-profile-card'>
                            <h4><strong>{title}</strong></h4>
                            <h5>{technique}</h5>
                            <h5>{dimension}</h5>
                            <h5>{year}</h5>
                            <h5>{price} €</h5>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    )
}

export default ArtworkCard

