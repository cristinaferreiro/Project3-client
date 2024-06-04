import React, { useState, useEffect, useContext } from 'react'
import { Button, Col, Form, Image, Spinner, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import exhibitionServices from '../../services/exhibition.services'
import artworkServices from '../../services/artwork.services'
import { AuthContext } from '../../context/auth.context'
import uploadServices from '../../services/upload.services'

const EditExhibitionForm = ({ exhibitionId }) => {

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
        if (exhibitionId) {
            loadExhibitionData(exhibitionId)
        }

        if (user) {
            loadArtworks(user._id)
        }
    }, [exhibitionId, user])

    const loadExhibitionData = (exhibitionId) => {
        exhibitionServices
            .getOneExhibition(exhibitionId)
            .then(response => {
                setExhibitionData(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

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

    const handleFileUpload = e => {
        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setExhibitionData({ ...exhibitionData, image: res.data.cloudinary_url })
                setLoadingImage(false)
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

    const handleExhibitionFormSubmit = e => {
        e.preventDefault()

        const formattedStartDate = new Date(exhibitionData.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
        const formattedEndDate = new Date(exhibitionData.dateend).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })

        if (exhibitionId) {
            exhibitionServices.editExhibition(exhibitionId, { ...exhibitionData, date: formattedStartDate, dateend: formattedEndDate })
                .then(() => {
                    navigate(`/exhibition-details/${exhibitionId}`)
                })
                .catch(err => console.log(err))
        } else {
            exhibitionServices.saveExhibition({ ...exhibitionData, date: formattedStartDate, dateend: formattedEndDate })
                .then(response => {
                    navigate(`/exhibition-details/${response.data._id}`)
                })
                .catch(err => console.log(err))
        }
    }
    const handleCancel = () => {
        navigate(`/exhibition-details/${exhibitionId}`)
    }

    return (
        <div className="EditExhibitionForm">
            {
                isLoading
                    ? <Spinner animation="border" size="sm" />
                    : <Form onSubmit={handleExhibitionFormSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={exhibitionData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Date Start</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={exhibitionData.date}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Date End</Form.Label>
                            <Form.Control
                                type="date"
                                name="dateend"
                                value={exhibitionData.dateend}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="description"
                                value={exhibitionData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Place</Form.Label>
                            <Form.Control
                                type="text"
                                name="place"
                                value={exhibitionData.place}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <hr />

                        <h5>Imagen actual</h5>
                        <Image src={exhibitionData.image} style={{ width: 100 }} />

                        <Form.Group as={Col} controlId="image">
                            <Form.Label>Sustituir imagen</Form.Label>
                            <Form.Control type="file" onChange={handleFileUpload} />
                        </Form.Group>



                        <Form.Group className="mb-3">
                            <Form.Label>Select Works Available</Form.Label>
                            {isLoading ? <p>Loading artworks...</p> : (
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
                            )}
                        </Form.Group>


                        <Row>
                            <Col xs={6}>
                                <Button variant="outline-danger" style={{ span: 4, offset: 2 }} type="submit" disabled={loadingImage}>
                                    {loadingImage ? 'Loading Image...' : 'Update Exhibition'}
                                </Button>
                            </Col>
                            <Col xs={6}>
                                <div className="d-grid">
                                    <Button variant="outline-danger" type="cancel"
                                        onClick={handleCancel}>
                                        Cancel update
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
            }
        </div>
    )
}

export default EditExhibitionForm



