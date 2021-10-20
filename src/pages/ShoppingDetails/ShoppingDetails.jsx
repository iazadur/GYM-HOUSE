import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useData from '../../Hooks/useData';

const ShoppingDetails = () => {
    const { id } = useParams()
    const data = useData()
    const s = data?.product?.find(d => d.id === id)
    return (
        <>
            <Header></Header>
            <Container className="my-5 py-5">
                <Row >
                    <Col md={6}>
                        <img className="w-100 rounded-3" src={s?.img} alt="" />
                    </Col>
                    <Col className="d-flex align-items-center">
                        <div className="">
                        <h2>{s?.name}</h2>
                        <h5>Price: ${s?.price}</h5>
                        <p>
                            <Rating className="text-warning"
                                initialRating={s?.rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly></Rating> ({s?.rating})
                        </p>
                        <p>{s?.sortDesc}</p>

                        <Link className="rounded-pill text-decoration-none px-5 py-3 btnHover fw-500" to={`/cart/${s?.id}`}>Add To Cart</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                        <h3>Product Descriptions:</h3><br />
                        <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
                            {s?.productDesc}
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ShoppingDetails;