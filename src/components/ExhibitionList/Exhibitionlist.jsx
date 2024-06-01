// import './ExhibitionList.css'
// import { Col, Row } from "react-bootstrap"
// import ExhibitionCard from '../ExhibitionCard/ExhibitionCard'

// function ExhibibtionList({ exhibitions }) {

//     return (
//         <Row>
//             {
//                 exhibitions.map((exhibition) => (
//                     <Col md={3} key={exhibition.id} className='mb-4'>
//                         <ExhibitionCard {...exhibition} />
//                     </Col>
//                 ))
//             }
//         </Row>
//     )
// }

// export default ExhibibtionList


// ExhibitionsList.jsx
import React from 'react';
import { Col, Row } from "react-bootstrap";
import ExhibitionCard from '../ExhibitionCard/ExhibitionCard';
import './ExhibitionsList.css';

function ExhibitionsList({ exhibitionData }) {
    if (!exhibitionData) {
        return <div>No hay datos disponibles.</div>;
    }

    return (
        <Row>
            {exhibitionData.map((exhibition) => (
                <Col md={3} key={exhibition._id} className='mb-4'>
                    <ExhibitionCard {...exhibition} />
                </Col>
            ))}
        </Row>
    )
}

export default ExhibitionsList;
