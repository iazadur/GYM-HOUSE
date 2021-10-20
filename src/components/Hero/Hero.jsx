import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import useData from '../../Hooks/useData';
import './Hero.css'

const Hero = () => {
    const { hero } = useData()

    return (
        <>

            <div className="banner" style={{ backgroundImage: `url(${hero?.img})` }}>
                <Container className="my-5">
                    <Row>
                        <Col md={6}>
                            <div className="bannerTextDiv">
                                <div className="text-white fw-bolder">
                                    <Fade left>

                                        <h1 className="fs-100">{hero?.title}</h1>
                                    </Fade>
                                    <Fade right>
                                        <h4 className="fs-2 text-muted my-4">{hero?.desc}</h4>
                                    </Fade>
                                    <Fade left>
                                        

                                            <button className="btn fs-3 bg-success bg-gradient herobtn fw-bold rounded-3 shadow-lg border-0 px-5 py-3 text-light">Know More<i className="fas ms-2 fa-arrow-right"></i></button>
                                       
                                    </Fade>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Hero;