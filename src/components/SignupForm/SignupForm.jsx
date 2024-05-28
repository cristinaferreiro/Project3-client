import React from 'react'
import './SignupForm.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import authServices from "../../services/auth.services"




const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        lastname: '',
        country: '',
        birthyear: '',
        avatar: '',
        userbio: '',
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault()

        authServices
            .signupUser(signupData)
            .then(() => navigate('/signup'))
            .catch(err => console.log(err))
    }
    return (

        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={signupData.username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={signupData.lastname} onChange={handleInputChange} name="lastname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" value={signupData.country} onChange={handleInputChange} name="country" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="birthyear">
                <Form.Label>Birthyear</Form.Label>
                <Form.Control type="text" value={signupData.birthyear} onChange={handleInputChange} name="birthyear" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" value={signupData.avatar} onChange={handleInputChange} name="avatar" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userbio">
                <Form.Label>userbio</Form.Label>
                <Form.Control type="text" value={signupData.userbio} onChange={handleInputChange} name="userbio" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Create Profile</Button>
            </div>

        </Form>
    )
}



export default SignupForm