import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MapDirection from '../../components/MapDirection/MapDirection';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useData from '../../Hooks/useData';
import './Contact.css'

const Contact = () => {
    const {contact}= useData()
    return (
        <>
            <Header></Header>
            <br /><br /><br />
            <Container>
                <div className="my-5">
                    <SectionTitle title={"Contact Us"}></SectionTitle>
                </div>
                <hr />
                <br /><br />
                <Row xs={1} md={3} className="g-4">
                    {contact?.map((c, idx) => (
                        <Col key={c.id}>
                            <Card className="border-0 ">
                                <Card.Body>
                                    <Card.Title className="fw-600 ff-kanit">{c.title} </Card.Title>
                                    <Card.Text className="fw-400 ff-kanit">
                                        {c.info}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <br /><br />
            </Container>
                <MapDirection></MapDirection>
            <Footer></Footer>
        </>
    );
};

export default Contact;