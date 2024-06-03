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
                    <Card.Title>{owner.username} {owner.lastname}</Card.Title>
                    <Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item><h5><em>{title}</em></h5></ListGroup.Item>
                            <ListGroup.Item><h5>{technique}</h5></ListGroup.Item>
                            <ListGroup.Item><h5>{dimension}</h5></ListGroup.Item>
                            <ListGroup.Item><h5>{year}</h5></ListGroup.Item>
                            {/* <ListGroup.Item><h5>{price} €</h5></ListGroup.Item> */}
                        </ListGroup>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div >
    )
}

export default ArtworkCard

