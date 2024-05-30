import './ExhibitionGalleryPage.css'
import { Container, Spinner } from "react-bootstrap"
import ExhibitionList from '../../components/ExhibitionList/Exhibitionlist'
import { useState, useEffect } from 'react'
import exhibitionServices from '../../services/exhibition.services'

function ExhibitionGalleryPage() {

    const [allExhibitions, setAllExhibitions] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetchExhibitions()
    }, [])

    const fetchExhibitions = () => {
        exhibitionServices
            .getAllExhibitions()
            .then(({ data }) =>
                setAllExhibitions(data))
        setIsLoading(false)
            .catch(err => console.log(err))
    }

    return (
        <Container className='AllExhibitionPage'>

            <div>ALL-EXHIBITION</div>
            {
                isLoading
                    ?
                    <Spinner animation="border" size="sm" />
                    :
                    <>
                        <ExhibitionList exhibitions={allExhibitions} />
                    </>
            }
        </Container>
    )
}

export default ExhibitionGalleryPage