import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
                                    <h1 className="fs-100">{hero?.title}</h1>
                                    <h4 className="fs-2 text-muted">{hero?.desc}</h4>
                                    <button className="btn fs-3 bg-success bg-gradient fw-bold rounded-3 shadow-lg border-0 px-5 py-3 text-light">Know More<i className="fas ms-2 fa-arrow-right"></i></button>
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