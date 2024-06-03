import React, { useState, useEffect } from 'react'
import './EditArtworkForm.css'
import { Form, Button, InputGroup, Col, Spinner, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import artworkServices from '../../services/artwork.services'
import uploadServices from "../../services/upload.services"

const ArtworkForm = ({ artworkId }) => {
    const [artworkData, setArtworkData] = useState({
        title: '',
        technique: '',
        dimension: '',
        year: '',
        imageURL: '',
        price: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (artworkId) {
            loadArtworkData(artworkId)
        } else {
            setIsLoading(false)
        }
    }, [artworkId])

    const loadArtworkData = (artworkId) => {
        artworkServices
            .getOneArtwork(artworkId)
            .then(response => {
                setArtworkData(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setArtworkData({ ...artworkData, [name]: value })
    }

    const handleFileUpload = e => {
        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])
        uploadServices.uploadimage(formData)
            .then(res => {
                setArtworkData({ ...artworkData, imageURL: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (artworkId) {
            artworkServices.editArtwork(artworkId, artworkData)
                .then(response => {
                    navigate(`/artwork-details/${artworkId}`)
                })
                .catch(err => console.log(err))
        } else {
            artworkServices.saveArtwork(artworkData)
                .then(response => {
                    navigate(`/artwork-details/${response.data._id}`)
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="ArtworkForm">
            {isLoading ? (
                <Spinner animation="border" size="sm" />
            ) : (
                <Form onSubmit={handleSubmit} className="mt-3 mb-3">
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your title work..."
                            name="title"
                            value={artworkData.title}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="technique">
                        <Form.Label>Technique</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter your techniques work..."
                                name="technique"
                                value={artworkData.technique}
                                onChange={handleInputChange}
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="dimension">
                        <Form.Label>Dimension</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter your dimensions work..."
                                name="dimension"
                                value={artworkData.dimension}
                                onChange={handleInputChange}
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="year">
                        <Form.Label>Year of creation</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter your creations year work..."
                                name="year"
                                value={artworkData.year}
                                onChange={handleInputChange}
                                required
                            />
                        </InputGroup>
                    </Form.Group>

                    <h5>Imagen actual</h5>
                    <Image src={artworkData.imageURL} style={{ width: 100 }} />

                    <Form.Group as={Col} controlId="image">
                        <Form.Label>Sustituir imagen</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload} />
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="image">
                        <Form.Label>Image (URL)</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload} />
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter your prices work..."
                            name="price"
                            value={artworkData.price}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={loadingImage}>
                        {loadingImage ? 'Loading Image...' : artworkId ? 'Update Artwork' : 'Add Artwork'}
                    </Button>
                </Form>
            )}
        </div>
    )
}

export default ArtworkForm

