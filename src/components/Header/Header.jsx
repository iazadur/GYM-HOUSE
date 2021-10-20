import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from './../../asserts/Gym-logo-footer.png'


const Header = () => {
const {user,logOut} = useAuth()
    return (
        <>
            <Navbar variant="dark" fixed="top" className="bg-gradient" bg="dark" expand="lg">
                <Container className="">
                    <Navbar.Brand as={Link} to="/">
                    <img
        src={logo}
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>

                            <Nav.Link as={NavLink} to="/service">Service</Nav.Link>

                            <Nav.Link as={NavLink} to="/membership">Membership</Nav.Link>

                            <Nav.Link as={NavLink} to="/shopping">Shop</Nav.Link>

                            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>

                            {user.email?(<Nav.Link as={NavLink} to="/login" onClick={logOut}>logout</Nav.Link>):(<Nav.Link as={NavLink} to="/login">Login</Nav.Link>)}
                            {user.email?(<Nav.Link as={NavLink} to="/">{user.displayName}</Nav.Link>):null}

                             {user.email?(<Nav.Link as={NavLink} to="/register"> {user?.photoURL?(<Image src={user?.photoURL} style={{width:'30px'}} roundedCircle />):(<div className="bg-primary p-1" style={{borderRadius:'50px'}}>{user?.displayName?.slice(0,2)}</div>)} </Nav.Link>): <Nav.Link as={NavLink} to="/register">Register</Nav.Link>}
                             


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


















        </>
    );
};

export default Header;