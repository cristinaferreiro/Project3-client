import { Button, Form, Spinner } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import exhibitionServices from "../../services/exhibition.services"
import artworkServices from "../../services/artwork.services"
import { AuthContext } from './../../context/auth.context'



const AddExhibitionForm = () => {

    const navigate = useNavigate()

    const { user } = useContext(AuthContext)

    const [exhibitionData, setExhibitionData] = useState({
        title: "",
        date: "",
        description: "",
        place: "",
        image: "",
        artworks: [],
    })

    const [artworksData, setArtworksData] = useState([])


    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadArtworks(user._id)
    }, [])

    const loadArtworks = () => {
        artworkServices
            .getAllArtwork()
            .then(({ data }) => {
                setArtworksData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setExhibitionData({ ...exhibitionData, [name]: value })
    }

    const handleExhibitionFormSubmit = e => {

        e.preventDefault()

        exhibitionServices
            .saveExhibition(exhibitionData)
            .then(response => {
                const exhibitionId = response.data._id;
                navigate(`/exhibition-details/${exhibitionId}`)
            })
            .catch(err => console.log(err))
    }

    const handleArtworksChange = e => {
        const { value } = e.target
        let artworkArray = value.split(',')
        setExhibitionData({ ...exhibitionData, artworks: artworkArray })
    }

    return (

        <div className="AddExhibitionForm">
            {
                isLoading
                    ?
                    <Spinner animation="border" size="sm" />
                    :
                    <>
                        <Form onSubmit={handleExhibitionFormSubmit}>

                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    controlId="title"
                                    type="text"
                                    name="title"
                                    value={exhibitionData.title}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    controlId="date"
                                    type="number"
                                    name="date"
                                    value={exhibitionData.date}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    controlId="description"
                                    type="text"
                                    name="description"
                                    value={exhibitionData.description}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Place</Form.Label>
                                <Form.Control
                                    controlId="place"
                                    type="text"
                                    name="place"
                                    value={exhibitionData.place}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    controlId="image"
                                    type="text"
                                    name="image"
                                    value={exhibitionData.image}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Artworks</Form.Label>
                                {isLoading ? <p>Loading artworks...</p> :
                                    <Form.Control
                                        as="select"
                                        multiple
                                        value={exhibitionData.artworks}
                                        onChange={handleArtworksChange}>
                                        {artworksData.map(artwork => (
                                            <option key={artwork._id} value={artwork._id}>
                                                {artwork.title}
                                            </option>
                                        ))}
                                    </Form.Control>
                                }
                            </Form.Group>




                            <Button variant="primary" type="submit">
                                Add Exhibition
                            </Button>
                        </Form>
                    </>
            }
        </div>

    )
}

export default AddExhibitionForm