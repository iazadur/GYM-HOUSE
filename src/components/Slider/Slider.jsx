import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = ({ slider }) => {
    const { img, title, desc } = slider
    return (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </Carousel.Caption>
            </Carousel.Item>
    );
};

export default Slider;