import './ExhibitionGalleryPage.css'
import { Container } from "react-bootstrap"
import ExhibitionList from '../../components/ExhibitionList/Exhibitionlist'
import { useState, useEffect } from 'react'
import exhibitionServices from '../../services/exhibition.services'

function ExhibitionGalleryPage() {

    const [allExhibitions, setAllExhibitions] = useState([])

    useEffect(() => {
        fetchExhibitions()
    }, [])

    const fetchExhibitions = () => {
        exhibitionServices
            .getAllExhibitions()
            .then(({ data }) => setAllExhibitions(data))
            .catch(err => console.log(err))
    }

    return (
        <Container className='AllExhibitionPage'>
            <div>ALL-EXHIBITION</div>
            <ExhibitionList exhibitions={allExhibitions} />
        </Container>
    )
}

export default ExhibitionGalleryPage