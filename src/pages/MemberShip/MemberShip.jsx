import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useData from '../../Hooks/useData';
import './MemberShip.css'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom';
import './MemberShip.css'
const MemberShip = () => {
    const { membershipTitle, membershipDesc, membership } = useData()
    return (
        <>
            <Header></Header>
            <Container className="overflow-hidden my-5 py-5">
                <Fade top>
                    <SectionTitle title={"MemberShip"}></SectionTitle>

                </Fade>


                <div className="">
                    <Fade left>

                        <h3 className="text-center text-muted fw-500 my-5">{membershipDesc}</h3>
                    </Fade>
                    <Fade right>

                        <h1 className="text-center my-5 fw-bold">{membershipTitle}</h1>
                    </Fade>

                    <Row xs={1} md={3} className="g-3">
                        {membership?.map((member, idx) => (
                            <Col>
                                <Fade bottom>
                                    <Card className="border-0 shadow-sm text-center bg-dark bg-gradient text-uppercase text-light rounded-3">
                                        <Card.Body className="">

                                            <Card.Title className="fw-bold fs-3 ff-kanit my-5">{member.title}</Card.Title>
                                            <hr />
                                            <Card.Text className="fw-500 my-5">
                                                {member.desc}
                                            </Card.Text>
                                            <hr />
                                            <h3 className="my-4 fw-bolder">${member.price}</h3>

                                            <Link to="/login" className="fw-500 d-flex justify-content-center align-items-center text-decoration-none text-light hvrmembership">
                                            <i class="fas fa-chevron-right fs-1"></i>
                                            <p className="pt-3 ms-2">join now</p>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Fade>
                            </Col>
                        ))}
                    </Row>
                </div>







            </Container>
            <Footer></Footer>
        </>
    );
};

export default MemberShip;