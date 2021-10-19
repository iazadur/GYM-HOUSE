import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
                <Row xs={1} md={2} className="g-4">
                    {product?.map((p, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src={p.img} />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Text>
                                        {p.sortDesc}
                                    </Card.Text>
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