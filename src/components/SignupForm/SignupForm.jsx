import './SignupForm.css'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button, Spinner, Col } from "react-bootstrap"
import authServices from "../../services/auth.services"
import uploadServices from "../../services/upload.services"

const SignupForm = () => {

    const navigate = useNavigate()

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        lastname: '',
        country: '',
        birthyear: '',
        userimage: '',
        backgrdimage: '',
        userbio: '',
    })

    const [loadingProfile, setLoadingImage] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        authServices
            .signupUser(signupData)
            .then(() => navigate('/login'))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setSignupData({ ...signupData, userimage: res.data.cloudinary_url, backgrdimage: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                isLoading
                    ?
                    <Spinner animation="border" size="sm" />
                    :
                    <>
                        <Form onSubmit={handleFormSubmit}>

                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={signupData.username} onChange={handleInputChange} name="username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={signupData.lastname} onChange={handleInputChange} name="lastname" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="country">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" value={signupData.country} onChange={handleInputChange} name="country" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="birthyear">
                                <Form.Label>Birthyear</Form.Label>
                                <Form.Control type="text" value={signupData.birthyear} onChange={handleInputChange} name="birthyear" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="image">
                                <Form.Label>Profile Image</Form.Label>
                                <Form.Control type="file" onChange={handleFileUpload} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="backgrdimage">
                                <Form.Label>BackgroundImage (URL)</Form.Label>
                                <Form.Control type="file" onChange={handleFileUpload} />
                            </Form.Group>


                            {/* <Form.Group className="mb-3" controlId="userbio">
                                <Form.Label>userbio</Form.Label>
                                <Form.Control type="text" value={signupData.userbio} onChange={handleInputChange} name="userbio" />
                            </Form.Group> */}

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    controlId="userbio"
                                    name="userbio"
                                    value={signupData.userbio}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <div className="d-grid">
                                <Button variant="outline-danger mb-5" type="submit" disabled={loadingProfile}>
                                    {loadingProfile ? 'Loading ...' : ' Create Profile'}
                                </Button>
                            </div>

                        </Form>
                    </>
            }

        </div>
    )
}
export default SignupForm