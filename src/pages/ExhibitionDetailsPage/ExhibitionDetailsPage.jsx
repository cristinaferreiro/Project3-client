// import { Container, Row, Col, Button, Image, ListGroup, ButtonGroup } from 'react-bootstrap'
// import { Link, useParams, useNavigate } from 'react-router-dom'
// import { useEffect, useState } from 'react'

// import './ExhibitionDetailsPage.css'
// import exhibitionServices from '../../services/exhibition.services'


// function ExhibitionDetailsPage() {

//     const [exhibition, setExhibition] = useState({})
//     const { exhibitionId } = useParams()

//     useEffect(() => {
//         loadExhibitionDetails()
//     }, [exhibitionId])

//     const loadExhibitionDetails = () => {
//         exhibitionServices
//             .getOneExhibition(exhibitionId)
//             .then(({ data }) => setExhibition(data))
//             .catch(err => console.log(err))
//     }



//     return (
//         <div className="ExhibitionDetailsPage">
//             <Container>
//                 <h1>{exhibition.title} - {exhibition.owner}</h1>
//                 <hr />
//                 <Row className="align-items-center">
//                     <Col md={4} className="img-col">
//                         <Image src={exhibition.cover} alt={exhibition.title} />
//                     </Col>
//                     <Col md={6} className="details-col">
//                         <ListGroup variant="flush">
//                             <ListGroup.Item><h4>Tilte{exhibition.title}</h4></ListGroup.Item>
//                             <ListGroup.Item><h5>{exhibition.date}</h5></ListGroup.Item>
//                             <ListGroup.Item><h5>{exhibition.description} </h5></ListGroup.Item>
//                             <ListGroup.Item><h6>{exhibition.place}</h6></ListGroup.Item>
//                             <ListGroup.Item><h6>{exhibition.owner} </h6></ListGroup.Item>
//                             <ListGroup.Item><h6>{exhibition.artwork} </h6></ListGroup.Item>
//                         </ListGroup>
//                     </Col>
//                 </Row>


//             </Container>
//         </div>
//     )
// }

// export default ExhibitionDetailsPage


import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import exhibitionServices from '../../services/exhibition.services'
import './ExhibitionDetailsPage.css'

function ExhibitionDetailsPage() {
    const { exhibitionId } = useParams()

    const [exhibitionData, setExhibitionInfo] = useState({})

    useEffect(() => {
        loadExhibitionDetails()
    }, [exhibitionId])

    const loadExhibitionDetails = () => {
        exhibitionServices
            .getOneExhibition(exhibitionId)
            .then(({ data }) => {
                setExhibitionInfo(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="ExhibitionDetailsPage">
            <Container>
                <h1>{exhibitionData?.title}</h1>
                <hr />
                <Row className="align-items-center">
                    <Col md={4} className="img-col">
                        <Image src={exhibitionData?.cover} alt={exhibitionData?.title} />
                    </Col>
                    <Col md={6} className="details-col">
                        <ListGroup variant="flush">
                            <ListGroup.Item><h4>Title: {exhibitionData?.title}</h4></ListGroup.Item>
                            <ListGroup.Item><h5>Date: {exhibitionData?.date}</h5></ListGroup.Item>
                            <ListGroup.Item><h5>Description: {exhibitionData?.description}</h5></ListGroup.Item>
                            <ListGroup.Item><h6>Place: {exhibitionData?.place}</h6></ListGroup.Item>
                            <ListGroup.Item><h6>Owner: {exhibitionData?.owner}</h6></ListGroup.Item>

                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ExhibitionDetailsPage

