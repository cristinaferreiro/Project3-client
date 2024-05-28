import { Button, Form } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import exhibitionServices from "../../services/exhibition.services"


const AddExhibitionForm = () => {

    const navigate = useNavigate()

    const [exhibitionData, setExhibitionData] = useState({
        title: " ",
        date: " ",
        description: " ",
        place: " ",
        // owner: " ",
        // artworks: [" "],
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setExhibitionData({ ...exhibitionData, [name]: value })
    }

    const handleExhibitionFormSubmit = e => {

        e.preventDefault()

        exhibitionServices
            .saveExhibition(exhibitionData)
            .then(() => navigate('exhibition-details'))
            .catch(err => console.log(err))
    }

    const handleArtworksChange = e => {
        const { value } = e.target

        // console.log('CONVIERTE ESTO', value, 'EN UN ARRAY SEPARADO POR LAS COMAS')

        let artworkArray = value.split(',')

        setExhibitionData({ ...exhibitionData, artworks: artworkArray })
    }


    return (

        <div className="AddExhibitionForm">

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

                {/* <Form.Group className="mb-3">
                    <Form.Label>Owner</Form.Label>
                    <Form.Control
                        controlId="owner"
                        type="text"
                        name="owner"
                        value={exhibitionData.owner}
                        onChange={handleInputChange} />
                </Form.Group> */}

                {/* <Form.Group className="mb-3">
                    <Form.Label>Cover Image Exhibition</Form.Label>
                    <Form.Control
                        controlId="cover"
                        type="text"
                        name="cover"
                        value={exhibitionData.cover}
                        onChange={handleInputChange} />
                </Form.Group> */}

                {/* <Form.Group className="mb-3">
                    <Form.Label>Artworks</Form.Label>
                    <Form.Control
                        controlId="artwork"
                        type="text"
                        name="artwork"
                        value={exhibitionData.artwork}
                        onChange={handleArtworksChange} />
                </Form.Group> */}



                <Button variant="primary" type="submit">
                    Add Exhibition
                </Button>
            </Form>

        </div>

    )
}

export default AddExhibitionForm