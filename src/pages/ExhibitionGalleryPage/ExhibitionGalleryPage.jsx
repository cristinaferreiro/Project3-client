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

    const fetchExhibitions = async () => {
        try {
            const { data: exhibitionsData } = await exhibitionServices.getAllExhibitions()
            setAllExhibitions(exhibitionsData)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Container className='AllExhibitionPage'>
            <div>
                ALL-EXHIBITION
            </div>
            <ExhibitionList exhibitions={allExhibitions} />
        </Container>
    )
}

export default ExhibitionGalleryPage
