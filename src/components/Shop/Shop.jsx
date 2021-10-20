import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import SectionTitle from '../SectionTitle/SectionTitle';
import './shop.css'

const Shop = () => {
    const { product } = useData()
    return (
        <>
            <Container>
            <SectionTitle title={"Our Shop"}></SectionTitle>
                <Row xs={1} md={3} className="g-4 mb-5">
                    {product?.slice(0, 3).map((p, idx) => {
                        if (idx % 2 === 0) {
                            return (
                                <Col as={Link} to={`/shopping/${p.id}`} key={idx} className="text-decoration-none text-dark">

                                    <Fade left>
                                        <Card className="border-0 shadow-sm productHover rounded-3">
                                        <div className="overflow-hidden">
                                            <Card.Img variant="top" className="cardimg" src={p.img} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title className="fs-3">{p.name}</Card.Title>
                                                <Card.Title>${p.price}</Card.Title>
                                                <Card.Title>
                                                    <p>
                                                        <Rating className="text-warning"
                                                            initialRating={p.rating}
                                                            emptySymbol="far fa-star icon-color"
                                                            fullSymbol="fas fa-star icon-color"
                                                            readonly></Rating> ({p.rating})
                                                    </p></Card.Title>
                                                <Card.Text className="text-muted">
                                                    {p.sortDesc}
                                                </Card.Text>
                                                <div className=" d-flex justify-content-center">

                                                    <Link className="px-4 py-2 rounded-3 bg-gradient text-decoration-none btnHover" to="/cart">Add to Cart</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Fade>
                                </Col>
                            )
                        } else {
                            return (
                                <Col as={Link} to={`/shopping/${p.id}`} key={idx} className="text-decoration-none text-dark">

                                    <Fade right>
                                        <Card className="border-0 overflow-hidden shadow-sm productHover rounded-3">
                                            <div className="overflow-hidden">
                                            <Card.Img variant="top" className="cardimg" src={p.img} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title className="fs-3">{p.name}</Card.Title>
                                                <Card.Title>${p.price}</Card.Title>
                                                <Card.Title>
                                                    <p>
                                                        <Rating className="text-warning"
                                                            initialRating={p.rating}
                                                            emptySymbol="far fa-star icon-color"
                                                            fullSymbol="fas fa-star icon-color"
                                                            readonly></Rating> ({p.rating})
                                                    </p></Card.Title>
                                                <Card.Text className="text-muted">
                                                    {p.sortDesc}
                                                </Card.Text>
                                                <div className=" d-flex justify-content-center">

                                                    <Link className=" px-4 py-2 rounded-3 text-decoration-none btnHover" to="/cart">Add to Cart</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Fade>
                                </Col>
                            )
                        }
                    })}
                </Row>
            </Container>
        </>
    );
};

export default Shop;