import React from 'react';
import { Form, Button, Container, Col, Row, Alert } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ResetPasswordModal from '../../components/ResetPasswordModal/ResetPasswordModal';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
import loginImg from './../../asserts/Press_play.png'
import Footer from '../../components/Footer/Footer';


const Login = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook, handleLogin, error, handleEmail, handlePassword, setIsLoading, setUser, setError } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'

    const handleGoogle = () => {
        signInUsingGoogle()
            .then((result) => {
                setUser(result.user)
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const handleGb = () => {
        signInUsingGithub()
        .then((result) => {
            setUser(result.user)
            history.push(redirect_uri)
          })
          .catch(error => {
            setError(error.message)
          })
          .finally(() => setIsLoading(false))
    }
    const handleFb = () => {
        signInUsingFacebook()
        .then((result) => {
            setUser(result.user)
            history.push(redirect_uri)
          })
          .catch(error => {
            setError(error.message)
          })
          .finally(() => setIsLoading(false))
    }
    const handleEml = (e) => {
        e.preventDefault()
        handleLogin()
        .then((result) => {
            const user = result.user
            setUser(user)
            setError('')
            history.push(redirect_uri)
          })
          .catch(error => {
            setError(error.message)
          })
          .finally(() => setIsLoading(false))
    }

    return (
        <>
            <Header></Header>
            <Container>
                <br /><br /><br />

                {error && <Alert variant={"danger"}>
                    {error}!
                </Alert>}

                <br />
                <Row>
                    <Col xs={12} lg={6}>
                        <img src={loginImg} className="img-fluid d-sm-none d-lg-block" alt="" />
                    </Col>
                    <Col xs={12} lg={6} className="d-flex justify-content-center">

                        <Form onSubmit={handleEml} className="border p-4 bg-white shadow-lg w-400 rounded-3">
                            <Col>
                                <Button
                                    onClick={handleGoogle} variant="white" className="w-100 shadow-lg border p-2">
                                    <i className="fab fa-google me-2 text-primary"></i>Sign up with Google</Button>
                            </Col>
                            <br />
                            <Col>
                                <Button
                                    onClick={handleGb} variant="dark" className="w-100 shadow-lg p-2">
                                    <i className="fab fa-github me-2"></i>Sign up With Github</Button>
                            </Col>
                            <br />
                            <Col>
                                <Button onClick={handleFb} variant="primary" className="w-100 shadow-lg p-2">
                                    <i className="fab fa-facebook me-2"></i>SignIn With Facebook</Button>
                            </Col>
                            <hr />
                            <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control onBlur={handleEmail} className="rounded-3 p-3 fs-5 text-gray" type="email" placeholder="Email address" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control onBlur={handlePassword}
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

                <br /><br /><br />

            </Container>
            <ResetPasswordModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Footer></Footer>
        </>
    );
};

export default Login;