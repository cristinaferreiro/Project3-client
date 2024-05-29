







const ArtworkCard = ({ _id, title, technique, dimension, year, price }) => {

    return (

        <div className="ArtworkCard">

            <Link to={`/${artworkId}`}>
                <CarrSlider _id={ObjectId} title={title} technique={technique} dimension={dimension} year={year} price={price} />
            </Link>

        </div>

    )

}

export default ArtworkCard