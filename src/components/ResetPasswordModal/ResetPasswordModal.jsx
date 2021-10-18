
import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';


const ResetPasswordModal = (props) => {
    const { handleEmail, handleResetPassword } = useAuth()
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Forget Your Password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleResetPassword}>
                    <Row className="d-flex justify-content-center">
                        <Col sm={9} className="my-1">

                            <Form.Control placeholder="Email Address" type="email" required onBlur={handleEmail} />
                        </Col>

                        <Col xs="auto" className="my-1">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ResetPasswordModal;