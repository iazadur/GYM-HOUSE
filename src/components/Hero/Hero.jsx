import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import './Hero.css'

const Hero = () => {
    const { heroSlider } = useData()
    
    return (
        <>
            <Container className="my-4 pt-4">
                <Carousel >

                    {
                        heroSlider?.map((s, i) => (

                            <Carousel.Item key={i}>
                                <img
                                    className="d-block car w-100 caro"
                                    src={s.img}
                                    alt="First slide"
                                />
                                <div className="">
                                    <Carousel.Caption>
                                        <h3 className="fs-1 lh-lg">{s.title}</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </div>
                            </Carousel.Item>

                        ))
                    }


                </Carousel>
            </Container>
        </>
    );
};

export default Hero;