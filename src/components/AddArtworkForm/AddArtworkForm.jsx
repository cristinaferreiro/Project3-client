import React from 'react';
import './AddArtworkForm.css';
import axios from 'axios';
import { useState } from "react"
import { Form, Button, InputGroup } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import artworkServices from '../../services/artwork.services';


const AddArtworkForm = ({ getArtworkDetail }) => {

    const navigate = useNavigate()

    const [newArtwork, setNewArtwork] = useState({

        title: " ",
        technique: ' ',
        dimension: ' ',
        year: ' ',
        image: ' ',
        price: ' '
    })


    const handleArtworkChange = event => {
        const { name, value } = event.target
        setNewArtwork({
            ...newArtwork,
            [name]: value,
        });
    };

    // const addImageField = () => {
    //     const image_urlCopy = [...newArtwork.image_url]
    //     image_urlCopy.push('')
    //     setNewArtwork({ ...newArtwork, image_url: image_urlCopy })
    // }

    // const handleImageChange = (e, index) => {
    //     const { value } = e.target

    //     const image_urlCopy = [...newArtwork.image_url]
    //     image_urlCopy[index] = value

    //     setNewArtwork({ ...newArtwork, image_url: image_urlCopy })
    // }




    const handleForSubmit = e => {
        e.preventDefault()

        artworkServices

            .saveArtwork(newArtwork)
            .then(() => navigate('/artwork-details'))
            .catch((err) => console.log(err))
        setNewArtwork(initialState)

    }


    return (
        <div className="AddArtworkForm ">

            <br></br>
            <Form onSubmit={handleForSubmit} style={{ marginBottom: '10px', marginTop: '5px' }}>




                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            as="textarea"
                            placeholder="Enter your titles work"
                            name="title"
                            value={newArtwork.title}
                            onChange={handleArtworkChange}
                            required
                        />
                    </InputGroup>
                </Form.Group>


                <Form.Group className="mb-3" controlId="technique">
                    <Form.Label>Technique</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            as="textarea"
                            placeholder="Enter your techniques work"
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
                            placeholder="Enter your dimensions work"
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
                            placeholder="Enter your creations year work"
                            name="year"
                            value={newArtwork.year}
                            onChange={handleArtworkChange}
                            required
                        />
                    </InputGroup>
                </Form.Group>


                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter your prices work"
                        name="price"
                        value={newArtwork.price}
                        onChange={handleArtworkChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please, enter the estimated price
                    </Form.Control.Feedback>
                </Form.Group>




                <Button variant="dark" type="submit" className="w-100" style={{ marginTop: '20px' }} onClick={handleForSubmit}>
                    Save
                </Button>

            </Form>

        </div>
    )
}


export default AddArtworkForm;