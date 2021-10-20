import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useData from '../../Hooks/useData';
import './ServicesDetails.css'

const ServicesDetails = () => {
    const { id } = useParams()
    const data = useData()
    const s = data?.service?.find(d => d.id === id)


    return (
        <>
            <Header></Header>
            <Container className="my-5 py-3">
                <SectionTitle title={"Claim Our Service"}></SectionTitle>
                <Row className="my-5" >
                    <Col>
                        <Image src={s?.img} className="w-100" alt="" />
                    </Col>
                    <Col>
                        <h1>FITNESS {s?.name}</h1>
                        <div className="b my-4"></div>
                        <h1>${s?.price} For One Month</h1>
                        <span className="">{s?.desc}</span>
                        <div className="d-flex my-2 fw-bold">
                            <Link to={`/cart/${s?.id}`} className="rounded-pill text-white text-decoration-none px-4 py-2 btnHover">Enroll Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ServicesDetails;