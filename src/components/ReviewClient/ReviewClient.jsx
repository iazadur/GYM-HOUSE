import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import useData from '../../Hooks/useData';

const ReviewClient = () => {
    const { review } = useData()
    return (
        <>
            <Container>
                <div className="my-5">
                    <h1 className="text-center">Our Student Saying</h1>
                    <div className="b mx-auto"></div>
                </div>

                <Row xs={1} md={3} className="g-4">
                    {review?.map((r, idx) => (
                        <Col key={idx}>
                            <Card className="border-0 shadow-lg mb-5 rounded-3 text-center">
                                <Card.Img className="my-3 mx-auto" variant="top" style={{borderRadius:"50%",width:"100px",height:"100px"}} src={r?.img} />
                                <Card.Body>
                                    <Card.Title>{r?.name}</Card.Title>

                                    <Card.Text>
                                        <p>
                                            <Rating className="text-warning"
                                                initialRating={r.rating}
                                                emptySymbol="far fa-star icon-color"
                                                fullSymbol="fas fa-star icon-color"
                                                readonly></Rating> ({r.rating})
                                        </p>
                                        <p className="text-muted"> {r.saying}</p>
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

export default ReviewClient;