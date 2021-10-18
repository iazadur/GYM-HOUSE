import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
const {user} = useAuth()
    return (
        <div>
            <Navbar variant="dark" fixed="top" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>

                            <Nav.Link as={NavLink} to="/service">Service</Nav.Link>

                            <Nav.Link as={NavLink} to="/about">About us</Nav.Link>

                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>

                            {user?.email && <Nav.Link as={NavLink} to="/register">Register</Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


















        </div >
    );
};

export default Header;