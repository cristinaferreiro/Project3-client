import React from "react"
import { Link } from "react-router-dom"
import './ArtworkCard.css'


const ArtworkCard = ({ _id, title, technique, dimension, year, price }) => {

    return (

        <div className="ArtworkCard">

            <Link to={`/artwork-details/${_Id}`}>
                <CarrSlider _id={ObjectId} title={title} technique={technique} dimension={dimension} year={year} price={price} />
            </Link>

        </div>

    )

}

export default ArtworkCard