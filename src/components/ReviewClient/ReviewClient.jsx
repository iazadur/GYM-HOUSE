import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Fade } from 'react-reveal';
import useData from '../../Hooks/useData';
import SectionTitle from '../SectionTitle/SectionTitle';

const ReviewClient = () => {
    const { review } = useData()
    return (
        <>
            <Container>
                <SectionTitle title={"Our Student Saying"}></SectionTitle>

                <Row xs={1} md={3} className="g-4">
                    {review?.map((r, idx) => (
                        <Col key={idx}>
                            <Fade right>
                                <Card className="border-0 shadow-sm my-5 rounded-3 productHover text-center">
                                    <Card.Img className="my-3 mx-auto" variant="top" style={{ borderRadius: "50%", width: "100px", height: "100px" }} src={r?.img} />
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
                                            <div className="">
                                                <i className="fab fa-facebook fs-5 text-primary bg-light shadow socialIconHover m-2 rounded-circle p-2"></i>
                                                <i className="fab fa-twitter fs-5 text-primary bg-light shadow socialIconHover m-2 rounded-circle p-2"></i>
                                                <i className="fab fa-instagram fs-5 text-primary bg-light shadow socialIconHover m-2 rounded-circle p-2"></i>
                                                <i className="fab fa-linkedin fs-5 text-primary bg-light shadow socialIconHover m-2 rounded-circle p-2"></i>
                                                <i className="fab fa-github fs-5 text-primary bg-light shadow socialIconHover m-2 rounded-circle p-2"></i>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Fade>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ReviewClient;