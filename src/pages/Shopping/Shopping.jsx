import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Fade } from 'react-reveal';

const Shopping = () => {
    const { product } = useData()

    console.log(product);
    return (
        <>
            <Header></Header>
            <Container className="my-5 pt-5">
            <SectionTitle title={"Our Products"}></SectionTitle>
                <Row xs={1} md={3} className="g-4 mb-5">
                    {product?.map((p, idx) => (
                        <Col as={Link} to={`/shopping/${p.id}`} key={idx} className="text-decoration-none text-dark">
                            <Fade bottom>
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
                    ))}
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Shopping;