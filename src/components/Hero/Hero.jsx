
import React from 'react';
import { Carousel } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import './Hero.css'

const Hero = () => {
    const data = useData()
    const { heroSlider } = data
    console.log(heroSlider);
    return (

        <>
            <Carousel >

                {
                    heroSlider?.map(s => (

                        <Carousel.Item>
                            <img
                                className="d-block car w-100"
                                src={s.img}
                                alt="First slide"
                            />
                            <div className="">
                            <Carousel.Caption>
                                <h3>{s.title}</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                            </div>
                        </Carousel.Item>

                    ))
                }


            </Carousel>
        </>

    );
};

export default Hero;