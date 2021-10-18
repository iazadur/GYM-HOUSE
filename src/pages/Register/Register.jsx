import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook, handleName, handlePassword, handleEmail, handleRegistration } = useAuth()
    return (
        <>
            <Header></Header>
            <br /><br /><br /><br />
            <div>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col xs={12} md={8} className="d-flex justify-content-center">
                            <Form onSubmit={handleRegistration} className="border p-4 bg-white shadow-lg w-400 rounded-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control className="rounded-3 p-3 fs-5 text-gray" onBlur={handleName} type="Text" placeholder="Full name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control onBlur={handleEmail} type="email"
                                        className="rounded-3 p-3 fs-5 text-gray" placeholder="Email address" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        className="rounded-3 p-3 fs-5 text-gray"
                                        onBlur={handlePassword} type="password" placeholder="Password" />
                                </Form.Group>

                                <Button className="w-100 p-3 fs-5 fw-bold" variant="primary" type="submit">
                                    Sign Up
                                </Button>
                                <hr />
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
                                <Col>
                                    <p className="text-center">Already on LinkedIn?
                                        <Link to="/login" className="ms-1 text-decoration-none">Sign in</Link></p>
                                </Col>

                            </Form>
                        </Col>

                    </Row>




                </Container>
            </div>
        </>
    );
};

export default Register;