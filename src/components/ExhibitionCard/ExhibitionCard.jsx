import { Link } from "react-router-dom"
import './ExhibitionCard.css'

const ExhibitionCard = ({ _id, title, date, description, place, owner, artworks }) => {

    return (
        <div className='ExhibitionCard'>

            <Link to={`/exhibition-details/${_id}`}>

                <div>
                    <h4>{title}</h4>
                    <h4>{owner.firstName}</h4>
                    <h4>{date}</h4>
                    <h4>{place}</h4>
                    <h4>{description}</h4>
                    {/* <h4>{artworks.join(', ')}</h4> */}
                </div>
            </Link>
        </div>
    )
}

export default ExhibitionCard