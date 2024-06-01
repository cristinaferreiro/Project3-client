import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import './EditUserForm.css';
import userServices from "../../services/user.services";



const EditUserForm = () => {

    const [editUser, setEditUser] = useState({
        username: '',
        lastname: '',
        country: '',
        birthyear: '',
        userimage: '',
        backgrdimage: '',
        userbio: '',
    })

    const [isLoading, setIsLoading] = useState(true)
    const { userId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        userServices.getOneUsers(userId)
            .then(response => {
                setEditUser(response.data.userInfo);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [userId]);


    const handleInputChange = e => {
        const { name, value, checked, type } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setEditUser({ ...editUser, [name]: newValue });
    };

    const handleFileChange = e => {
        const { name, files } = e.target;
        setEditUser({ ...editUser, [name]: files[0] });
    };

    const handleUserSubmit = e => {
        e.preventDefault();

        userServices
            .editUsers(userId, editUser)
            .then(() => navigate('/profile'))
            .catch(err => console.log(err));
    };


    return (
        <div className="EditUserForm">
            {isLoading ? <p>Loading...</p> : (

                <Form onSubmit={handleUserSubmit}>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={editUser.username} name="username" disabled />
                        <Form.Control type="text" value={editUser.lastname} name="username" disabled />

                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={editUser.lastname} name="lastname" placeholder='holaaa' onChange={handleInputChange} />
                    </Form.Group> */}


                    <Form.Group className="mb-3" controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" value={editUser.country} name="country" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="birthyear">
                        <Form.Label>Birthday year</Form.Label>
                        <Form.Control type="number" value={editUser.birthyear} name="birthyear" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userimage">
                        <Form.Label>Profile image (URL)</Form.Label>
                        <Form.Control type="file" name="userimage" onChange={handleFileChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="backgrdimage">
                        <Form.Label>Background image (URL)</Form.Label>
                        <Form.Control type="file" name="backgrdimage" onChange={handleFileChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="userbio">
                        <Form.Label>User bio</Form.Label>
                        <Form.Control type="text" value={editUser.userbio} name="userbio" onChange={handleInputChange} />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="dark" type="submit">Save changes</Button>
                    </div>
                </Form>
            )}
        </div>
    );
}

export default EditUserForm;