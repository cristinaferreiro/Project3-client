import React from 'react'
import './AddArtworkForm.css'
import { useState, useEffect } from "react"
import { Form, Button, InputGroup, Col, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import artworkServices from '../../services/artwork.services'
import uploadServices from "../../services/upload.services"


const AddArtworkForm = () => {

    const navigate = useNavigate()
    const [newArtwork, setNewArtwork] = useState({
        title: '',
        technique: '',
        dimension: '',
        year: '',
        imageURL: '',
        price: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    const handleArtworkChange = event => {
        const { name, value } = event.target
        setNewArtwork({
            ...newArtwork,
            [name]: value,
        })
    }
    const handleForSubmit = e => {
        e.preventDefault()
        artworkServices
            .saveArtwork(newArtwork)
            .then(response => {
                const artworkId = response.data._id
                navigate(`/artwork-details/${artworkId}`)
            })
            .catch((err) => console.log(err))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])
        uploadServices
            .uploadimage(formData)
            .then(res => {
                setNewArtwork({ ...newArtwork, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="AddArtworkForm ">
            {
                isLoading
                    ?
                    <Spinner animation="border" size="sm" />
                    :
                    <>
                        <Form onSubmit={handleForSubmit} className='mb-3'>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    controlId="title"
                                    type="text"
                                    placeholder="Enter your title work..."
                                    name="title"
                                    value={newArtwork.title}
                                    onChange={handleArtworkChange}
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
                                        value={newArtwork.technique}
                                        onChange={handleArtworkChange}
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
                                        value={newArtwork.dimension}
                                        onChange={handleArtworkChange}
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
                                        value={newArtwork.year}
                                        onChange={handleArtworkChange}
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} controlId="image">
                                <Form.Label>Image (URL)</Form.Label>
                                <Form.Control type="file" onChange={handleFileUpload} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter your prices work..."
                                    name="price"
                                    value={newArtwork.price}
                                    onChange={handleArtworkChange} />
                            </Form.Group>



                            <Button variant="outline-danger mb-3" type="submit" disabled={loadingImage}>
                                {loadingImage ? 'Loading Image...' : ' Add Artwork'}
                            </Button>
                        </Form>
                    </>
            }
        </div >
    )
}
export default AddArtworkForm