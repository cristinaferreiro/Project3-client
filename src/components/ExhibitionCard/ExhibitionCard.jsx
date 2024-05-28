import { Link } from "react-router-dom"
import './ExhibitionCard.css'

const ExhibitionCard = ({ title, date, description, place, owner, artworks }) => {
    return (
        <div className='ExhibitionCard'>
            <Link to={`/exhibition-details/${id}`}>

                <div>
                    <h4>{title}</h4>
                    <h4>{owner}</h4>
                    <h4>{date}</h4>
                    <h4>{place}</h4>

                    <h4>{description}</h4>
                    <h4>{artworks}</h4>
                </div>
            </Link>
        </div>
    )
}

export default ExhibitionCard


