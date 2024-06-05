import EditUserForm from "../../components/EditUserForm/EditUserForm";
import './EditUserPage.css'
import { Container, Row, Col } from "react-bootstrap";


function EditUserPage() {

    return (

        <div className="EditUserPage mt-3">
            <Container>
                <h1 className="text-center" style={{ marginBottom: '20px' }}>Edit your profile </h1>
                <hr className="mx-auto d-block w-50" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 10)' }} />
                <Row>
                    <Col
                        md={{ span: 6, offset: 3 }}
                        style={{}}
                        className="mt-2 mb-5"
                    >
                        <EditUserForm />
                    </Col>


                </Row>
            </Container>

        </div >)


}

export default EditUserPage