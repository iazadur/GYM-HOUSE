import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';

const Shop = () => {
    const { product } = useData()

    console.log(product);
    return (
        <>
            <Container>
                <div className="my-5">
                    <h1 className="text-center">Our Products</h1>
                    <div className="b mx-auto"></div>
                </div>
                <Row xs={1} md={2} className="g-4 mb-5">
                    {product?.slice(0,4).map((p, idx) => (
                        <Col as={Link} to={`/shopping/${p.id}`} key={idx} className="text-decoration-none text-dark">
                            <Card className="border-0 shadow-lg rounded-3">
                                <Card.Img variant="top" src={p.img} />
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

                                    <Link className=" bg-danger px-4 py-2 text-white bg-gradient rounded-3 shadow-lg text-decoration-none fw-500" to="/cart">Add to Cart</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Shop;