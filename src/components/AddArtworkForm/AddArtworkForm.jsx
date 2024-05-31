import React from 'react';
import './AddArtworkForm.css';
import { useState } from "react"
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import artworkServices from '../../services/artwork.services';


const AddArtworkForm = () => {

    const navigate = useNavigate()

    const [newArtwork, setNewArtwork] = useState({
        title: "",
        technique: '',
        dimension: '',
        year: '',
        image: '',
        price: ''
    })


    const handleArtworkChange = event => {
        const { name, value } = event.target
        setNewArtwork({
            ...newArtwork,
            [name]: value,
        })
    };


    const handleForSubmit = e => {
        e.preventDefault()

        artworkServices
            .saveArtwork(newArtwork)
            .then(response => {
                const artworkId = response.data._id
                navigate(`/artwork-details/${artworkId}`);
            })
            .catch((err) => console.log(err))
    }


    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
            })
        console.log(data)
            .catch(err => console.log(err))
    }





    return (
        <div className="AddArtworkForm ">

            <Form onSubmit={handleFormSubmit} className='mt-3 mb-3'>

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

                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        controlId="image"
                        type="text"
                        name="image"
                        value={newArtwork.image}
                        onChange={handleArtworkChange} />
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

                <Button variant="primary" type="submit">
                    Add Artwork
                </Button>
            </Form>

        </div >

    )


}

export default AddArtworkForm;