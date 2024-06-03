
// import React, { useContext, useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import './ArtworkCard.css'
// import { AuthContext } from '../../context/auth.context'
// import userServices from '../../services/user.services'

// const ArtworkCard = ({ _id, title, owner, dimension, year, price, technique, image }) => {
//     // const { user } = useContext(AuthContext)
//     // const [userData, setUserInfo] = useState({})
//     // const [isLoading, setIsLoading] = useState(true)

//     // useEffect(() => {
//     //     loadUserInfo()
//     // }, [user])

//     // const loadUserInfo = () => {
//     //     userServices
//     //         .getOneUsers(owner._id)
//     //         .then(({ data }) => {
//     //             setUserInfo(data)
//     //             setIsLoading(false)
//     //         })
//     //         .catch(err => console.log(err))
//     // }


// //////////////


//     return (
//         <div className="artwork-card">
//             <Link to={`/artwork-details/${_id}`}>
//                 <div className="exhibition-card">
//                     <img src={image} alt={title} />
//                     <p>Owner: {userData?.username}</p>
//                     <h3>{title}</h3>
//                     <p>{year}</p>
//                     <p>{technique}</p>
//                     <p>{price} €</p>
//                     <p>{dimension}</p>
//                 </div>
//             </Link>
//         </div>
//     )
// }

// export default ArtworkCard


// // // import React, { useContext, useEffect, useState } from "react"
// // // import { Link } from "react-router-dom"
// // // import { Card, Button, ListGroup } from 'react-bootstrap'
// // // import './ArtworkCard.css'
// // // import { AuthContext } from '../../context/auth.context'
// // // import userServices from '../../services/user.services'

// // // const ArtworkCard = ({ _id, title, owner, dimension, year, price, technique, image }) => {
// // //     const { user } = useContext(AuthContext)
// // //     const [userData, setUserInfo] = useState({})
// // //     const [isLoading, setIsLoading] = useState(true)

// // //     useEffect(() => {
// // //         loadUserInfo()
// // //     }, [user])

// // //     const loadUserInfo = () => {
// // //         userServices
// // //             .getOneUsers(owner)
// // //             .then(({ data }) => {
// // //                 setUserInfo(data)
// // //                 setIsLoading(false)
// // //             })
// // //             .catch(err => console.log(err))
// // //     }

// // //     return (
// // //         <Card className="artwork-card">
// // //             <Link to={`/artwork-details/${_id}`}>
// // //                 <Card.Img variant="top" src={image} alt={title} />
// // //                 <p>Owner: {userData?.owner.username}</p>
// // //             </Link>
// // //             <Card.Body>
// // //                 <Card.Title>{userData?.username} {userData?.lastname}</Card.Title>
// // //                 <Card.Text>
// // //                     <ListGroup variant="flush">
// // //                         <ListGroup.Item><h6><em>{title}</em></h6></ListGroup.Item>
// // //                         <ListGroup.Item><h6>{technique}</h6></ListGroup.Item>
// // //                         <ListGroup.Item><h6>{dimension}</h6></ListGroup.Item>
// // //                         <ListGroup.Item><h6>{year}</h6></ListGroup.Item>
// // //                         <ListGroup.Item><h6>{price} €</h6></ListGroup.Item>
// // //                     </ListGroup>
// // //                 </Card.Text>
// // //                 <Button variant="primary">Go somewhere</Button>
// // //             </Card.Body>
// // //         </Card>
// // //     )
// // // }

// // // export default ArtworkCard


import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, Button, ListGroup, Spinner } from 'react-bootstrap'
import './ArtworkCard.css'
import { AuthContext } from '../../context/auth.context'
import userServices from '../../services/user.services'

const ArtworkCard = ({ _id, title, owner, dimension, year, price, technique, image }) => {
    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (owner && owner._id) {
            loadUserInfo(owner._id)
        } else {
            setUserData(owner)
            setIsLoading(false)
        }
    }, [owner])

    const loadUserInfo = (ownerId) => {
        userServices
            .getOneUsers(ownerId)
            .then(({ data }) => {
                setUserData(data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }
    ////////german <Card.Title>{userData?.username.owner} {userData?.lastname.owner}</Card.Title>
    return (
        <div className="ArtworkCard ">
            {
                isLoading
                    ?
                    <Spinner animation="border" size="sm" />
                    :
                    <>
                        <Card className="artwork-card">
                            <Link to={`/artwork-details/${_id}`}>
                                <Card.Img variant="top" src={image} alt={title} />
                            </Link>
                            <Card.Body className="artwork-details">
                                <Card.Title>{userData?.username} {userData?.lastname}</Card.Title>
                                <Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><h5><em>{title}</em></h5></ListGroup.Item>
                                        <ListGroup.Item><h5>{technique}</h5></ListGroup.Item>
                                        <ListGroup.Item><h5>{dimension}</h5></ListGroup.Item>
                                        <ListGroup.Item><h5>{year}</h5></ListGroup.Item>
                                        {/* <ListGroup.Item><h5>{price} €</h5></ListGroup.Item> */}
                                    </ListGroup>
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </>
            }
        </div >
    )
}

export default ArtworkCard

