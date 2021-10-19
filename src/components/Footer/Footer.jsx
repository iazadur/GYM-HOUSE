import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className=" bg-gradient py-5" style={{ backgroundColor: "#13243A" }}>
                <Container>
                    <Row className="" >

                        <Col xs={12} md={4} className="bg-light bg-transparent text-white my-3">
                            <div className="">
                                <h3 className="text-uppercase fs-3 border-bottom border-warning pb-2 ">About us</h3>
                                <Link className="text-decoration-none border-b pb-2 fs-6 d-block text-white" to="/">Fit Club in a nutshel</Link>
                                <Link className="text-decoration-none border-b pb-2 fs-6 d-block text-white" to="/">What we do</Link>
                                <Link className="text-decoration-none border-b pb-2 fs-6 d-block text-white" to="/">History</Link>
                                <Link className="text-decoration-none border-b pb-2 fs-6 d-block text-white" to="/">Location</Link>
                                <Link className="text-decoration-none border-b pb-2 fs-6 d-block text-white" to="/">Management Team</Link>
                            </div>
                        </Col>

                        <Col xs={12} md={4} className="bg-light bg-transparent text-white my-3">
                            <div className="">

                                <h3 className="text-uppercase fs-3 border-bottom border-warning pb-2 ">Gym classes</h3>

                                <Link className="text-decoration-none border-b pb-2 fs-6 d-block text-white" to="/">Overview</Link>
                                <Link className="text-decoration-none border-b pb-2 fs-6 d-block text-white" to="/">Classes altenrnate</Link>
                                <Link className="text-decoration-none border-b pb-2 fs-6 d-block text-white" to="/">Class pricing</Link>
                                <Link className="text-decoration-none border-b pb-2 fs-6 d-block text-white" to="/">Signle class</Link>
                                <Link className="text-decoration-none border-b pb-2 fs-6 d-block text-white" to="/">Find Out More</Link>
                            </div>
                        </Col>


                        <Col xs={12} md={4} className="bg-light bg-transparent text-white my-3">
                            <div className="">
                                <div className="">
                                    <h3 className="text-uppercase fs-3 border-bottom border-warning pb-2">NewsLetter</h3>
                                    <p>Subscribe to our newsletter to receive regular updates and news form us</p>
                                    <Row>
                                        <Col xs={12} xxl={8} className="mb-2">
                                            <input type="email" className="w-100 text-muted  form-control" placeholder="Email Address"></input>
                                        </Col>
                                        <Col xs={12} xxl={4}>
                                            <button type="submit" className="w-100 btn text-muted btnhover fs-6 fw-bold bg-gradient mb-3">Subscribe us</button></Col>
                                    </Row>
                                    <div className="d-flex justify-content-around fs-3">
                                        <i class="fab fa-facebook fs-2 text-light rounded-circle p-3 bg-dark bg-gradient "></i>
                                        <i class="fab fa-twitter fs-2 text-light rounded-circle p-3 bg-dark bg-gradient "></i>
                                        <i class="fab fa-instagram fs-2 text-light rounded-circle p-3 bg-dark bg-gradient "></i>
                                        <i class="fab fa-linkedin fs-2 text-light rounded-circle p-3 bg-dark bg-gradient "></i>
                                        <i class="fab fa-github fs-2 text-light rounded-circle p-3 bg-dark bg-gradient "></i>
                                    </div>
                                </div>
                            </div>
                        </Col>


                    </Row>
                </Container>
            </div>

        </>
    );
};

export default Footer;