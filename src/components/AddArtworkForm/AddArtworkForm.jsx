import React from 'react';
import './AddArtworkForm.css';
import axios from 'axios';
import { useState } from "react"
import { Form, Button, InputGroup } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import artworkServices from '../../services/artwork.services';


const AddArtworkForm = () => {

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
        //     <div className="AddArtworkForm ">

        //         <br></br>
        //         <Form onSubmit={handleForSubmit} style={{ marginBottom: '50px', marginTop: '20px' }}>




        //             <Form.Group className="mb-10" controlId="title">
        //                 <Form.Label>Title</Form.Label>
        //                 <InputGroup hasValidation>
        //                     <Form.Control
        //                         as="textarea"
        //                         placeholder="Enter your titles work"
        //                         name="title"
        //                         value={newArtwork.title}
        //                         onChange={handleArtworkChange}
        //                         required
        //                     />
        //                 </InputGroup>
        //             </Form.Group>


        //             <Form.Group className="mb-10" controlId="technique">
        //                 <Form.Label>Technique</Form.Label>
        //                 <InputGroup hasValidation>
        //                     <Form.Control
        //                         as="textarea"
        //                         placeholder="Enter your techniques work"
        //                         name="technique"
        //                         value={newArtwork.technique}
        //                         onChange={handleArtworkChange}
        //                         required
        //                     />
        //                 </InputGroup>
        //             </Form.Group>

        //             <Form.Group className="mb-10" controlId="dimension">
        //                 <Form.Label>Dimension</Form.Label>
        //                 <InputGroup hasValidation>
        //                     <Form.Control
        //                         as="text"
        //                         placeholder="Enter your dimensions work"
        //                         name="dimension"
        //                         value={newArtwork.dimension}
        //                         onChange={handleArtworkChange}
        //                         required
        //                     />
        //                 </InputGroup>
        //             </Form.Group>

        //             <Form.Group className="mb-10" controlId="year">
        //                 <Form.Label>Year of creation</Form.Label>
        //                 <InputGroup hasValidation>
        //                     <Form.Control
        //                         as="text"
        //                         placeholder="Enter your creations year work"
        //                         name="year"
        //                         value={newArtwork.year}
        //                         onChange={handleArtworkChange}
        //                         required
        //                     />
        //                 </InputGroup>
        //             </Form.Group>

        //             {/* 

        //         <Form.Group className="mb-3" controlId="image_url">
        //             <Form.Label>Images</Form.Label>
        //             {
        //                 newArtwork.image_url.map((eachField, idx) => (
        //                     <Form.Control
        //                         type="file"
        //                         placeholder="Enter your pics"
        //                         value={eachField}
        //                         onChange={e => handleImageChange(e, idx)}
        //                     />
        //                 ))}


        //             <Button className="w-100" variant="secondary" onClick={addImageFild}>
        //                 Add new pic
        //             </Button>


        //         </Form.Group> */}


        //             <Form.Group className="mb-3" controlId="price">
        //                 <Form.Label>Price</Form.Label>
        //                 <Form.Control
        //                     type="text"
        //                     placeholder="Enter your prices work"
        //                     name="price"
        //                     value={newArtwork.price}
        //                     onChange={handleArtworkChange}
        //                     required
        //                 />
        //                 <Form.Control.Feedback type="invalid">
        //                     Please, enter the estimated price
        //                 </Form.Control.Feedback>
        //             </Form.Group>




        //             <Button variant="dark" type="submit" className="w-100" style={{ marginTop: '20px' }} onClick={handleForSubmit}>
        //                 Save
        //             </Button>

        //         </Form>

        //     </div>
        // )

        <div className="AddExhibitionForm">

            <Form onSubmit={handleForSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        controlId="title"
                        type="text"
                        name="title"
                        value={newArtwork.title}
                        onChange={handleArtworkChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>technique</Form.Label>
                    <Form.Control
                        controlId="technique"
                        type="text"
                        name="technique"
                        value={newArtwork.technique}
                        onChange={handleArtworkChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Dimension</Form.Label>
                    <Form.Control
                        controlId="dimension"
                        type="text"
                        name="dimension"
                        value={newArtwork.dimension}
                        onChange={handleArtworkChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                        controlId="year"
                        type="number"
                        name="year"
                        value={newArtwork.year}
                        onChange={handleArtworkChange} />
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

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        controlId="price"
                        type="number"
                        name="price"
                        value={newArtwork.price}
                        onChange={handleArtworkChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Artwork
                </Button>
            </Form>

        </div>




    )
}


export default AddArtworkForm;