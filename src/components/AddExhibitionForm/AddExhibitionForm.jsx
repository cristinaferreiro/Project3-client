import { Button, Col, Form, Spinner } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import exhibitionServices from "../../services/exhibition.services"
import artworkServices from "../../services/artwork.services"
import { AuthContext } from './../../context/auth.context'
import uploadServices from "../../services/upload.services"



const AddExhibitionForm = () => {

    const navigate = useNavigate()

    const { user } = useContext(AuthContext)

    const [exhibitionData, setExhibitionData] = useState({
        title: "",
        date: "",
        dateend: "",
        description: "",
        place: "",
        image: "",
        artworks: [],
    })

    const [loadingImage, setLoadingImage] = useState(false)
    const [artworksData, setArtworksData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        if (user) {
            loadArtworks(user._id)
        }
    }, [user])

    const loadArtworks = (userId) => {
        artworkServices
            .getAllArtworkByArtist(userId)
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

        const formattedStartDate = new Date(exhibitionData.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) //////
        const formattedEndDate = new Date(exhibitionData.dateend).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) //////

        exhibitionServices
            .saveExhibition({ ...exhibitionData, date: formattedStartDate, dateend: formattedEndDate }) /////SOLOexhibitionData
            .then(response => {
                const exhibitionId = response.data._id
                navigate(`/exhibition-details/${exhibitionId}`)
            })
            .catch(err => console.log(err))
    }

    const handleArtworksChange = (e, artworkId) => {
        const { checked } = e.target
        const updatedArtworks = checked
            ? [...exhibitionData.artworks, artworkId]
            : exhibitionData.artworks.filter(id => id !== artworkId)
        setExhibitionData({ ...exhibitionData, artworks: updatedArtworks })
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setArtworksData({ ...exhibitionData, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
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
                                <Form.Label>Date Start</Form.Label>
                                <Form.Control
                                    controlId="date"
                                    type="date"
                                    name="date"
                                    value={exhibitionData.date}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Date End</Form.Label>
                                <Form.Control
                                    controlId="dateend"
                                    type="date"
                                    name="dateend"
                                    value={exhibitionData.dateend}
                                    onChange={handleInputChange} />
                            </Form.Group>


                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    controlId="description"
                                    name="description"
                                    value={exhibitionData.description}
                                    onChange={handleInputChange}
                                />
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
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    controlId="image"
                                    type="text"
                                    name="image"
                                    value={exhibitionData.image}
                                    onChange={handleInputChange} />
                            </Form.Group> */}



                            <Form.Group as={Col} controlId="image">
                                <Form.Label>Imagen (URL)</Form.Label>
                                <Form.Control type="file" onChange={handleFileUpload} />
                            </Form.Group>

                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Select Works Available</Form.Label>
                                    {isLoading ? <p>Loading artworks...</p> :
                                        <div>
                                            {artworksData.map(artwork => (
                                                <Form.Check
                                                    key={artwork._id}
                                                    type="checkbox"
                                                    id={`artwork_${artwork._id}`}
                                                    label={artwork.title}
                                                    checked={exhibitionData.artworks.includes(artwork._id)}
                                                    onChange={(e) => handleArtworksChange(e, artwork._id)}
                                                />
                                            ))}
                                        </div>
                                    }
                                </Form.Group>
                            </Form>

                            <Button variant="primary" type="submit" disabled={loadingImage}>{loadingImage ? 'Loading Image...' : ' Add Exhibition'}
                                Add Exhibition
                            </Button>
                        </Form>
                    </>
            }
        </div>

    )
}

export default AddExhibitionForm