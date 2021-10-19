import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pagenotFound from'../../asserts/page_not_found.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <Container className=" text center">
            <img src={pagenotFound} alt="" />
            <Link className="fs-4 bg-success bg-gradient p-3 px-4 text-center rounded-3 text-decoration-none d-block text-white" to='/'>Back To Home<i className="fas fa-arrow-right mx-4"></i></Link>
        </Container>
    );
};

export default NotFound;