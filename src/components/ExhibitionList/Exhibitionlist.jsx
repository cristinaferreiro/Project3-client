import './ExhibitionList.css'
import { Col, Row } from "react-bootstrap"
import ExhibitionCard from '../ExhibitionCard/ExhibitionCard'

function ExhibibtionList({ exhibitions }) {

    return (
        <Row>
            {
                exhibitions.map((exhibition) => (
                    <Col md={3} key={exhibition.id} className='mb-4'>
                        <ExhibitionCard {...exhibition} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default ExhibibtionList
