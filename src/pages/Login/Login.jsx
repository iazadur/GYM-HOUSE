import React from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ResetPasswordModal from '../../components/ResetPasswordModal/ResetPasswordModal';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const {signInUsingGoogle,signInUsingGithub,signInUsingFacebook} = useAuth()
    return (
        <>
            <Header></Header>
            <Container>
                <br /><br /><br /><br />
                <Row>
                    <Col xs={12} md={6}></Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <Form className="border p-4 bg-white shadow-lg w-400 rounded-3">
                        <Col>
                                    <Button
                                        onClick={signInUsingGoogle} variant="white" className="w-100 shadow-lg border p-2">
                                        <i className="fab fa-google me-2 text-primary"></i>Sign up with Google</Button>
                                </Col>
                                <br />
                                <Col>
                                    <Button
                                        onClick={signInUsingGithub} variant="dark" className="w-100 shadow-lg p-2">
                                        <i className="fab fa-github me-2"></i>Sign up With Github</Button>
                                </Col>
                                <br />
                                <Col>
                                    <Button onClick={signInUsingFacebook} variant="primary" className="w-100 shadow-lg p-2">
                                        <i className="fab fa-facebook me-2"></i>SignIn With Facebook</Button>
                                </Col>
                                <hr />
                            <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control className="rounded-3 p-3 fs-5 text-gray" type="email" placeholder="Email address" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control
                                    className="rounded-3 p-3 fs-5 text-gray" type="password" placeholder="Password" />
                            </Form.Group>

                            <Button className="w-100 p-3 fs-5 fw-bold" variant="primary" type="submit">
                                Log In
                            </Button>

                            <Button variant="white" className="text-primary w-100 mt-2" onClick={() => setModalShow(true)}>
                                Forgotten Password?
                            </Button>
                            <hr />
                            <div className="mt-5 mb-3 w-100 text-center">
                                <Link className="text-decoration-none bg-success text-white p-3 rounded-3 fw-bold fs-5 " to="/register">Create New Account</Link>
                            </div>
                        </Form>
                    </Col>
                </Row>


            </Container>
            <ResetPasswordModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default Login;