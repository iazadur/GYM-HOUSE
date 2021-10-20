import React from 'react';
import { Container } from 'react-bootstrap';
import './Service.css'
import useData from '../../Hooks/useData';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import SectionTitle from '../SectionTitle/SectionTitle';



const Service = () => {
    const { service } = useData()
    return (
        <Container className="my-5">
            <SectionTitle title={"Our Services"}></SectionTitle>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mt-2">

                {
                    service?.map((s) => (
                        <Fade bottom>
                        <div className="col hello" key={s.id}>
                            <div className="card h-100 border-0 shadow-lg rounded-3 position-relative ">
                                <img src={s.img} className="opacity-75 h-100 card-img-top" alt="..." />
                                <div className="position-absolute top-0 start-0">
                                    <h5 className="card-title text-uppercase fw-bolder fs-4 mb-0 p-2 text-white">FITNESS <br /> <span className="fs-6 fw-normal">{s.name}</span></h5>
                                </div>
                                <div className="position-absolute top-50 start-0 w-100">

                                    <div style={{ backgroundColor: `${s.color}` }} className="p-2 rounded-end text-white w-75">
                                        <h5 className="fs-4">${s.price} <span className=" fw-500">For one month</span></h5>
                                        <p className="card-text fs-5 fw-400">{s.desc}</p>
                                    </div>

                                </div>
                                <div className="overlay">
                                    <div className="d-flex justify-content-between bg-white ">
                                        <Link to={`/cart/${s.id}`} className="btn btn-light btnMore d-flex ">Enroll Now</Link>
                                        <Link to={`/service/${s.id}`} className="btn btnMore btn-light">More Details<i className="fas ms-2 fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    ))
                }



            </div>
            
        </Container>
    );
};



export default Service;