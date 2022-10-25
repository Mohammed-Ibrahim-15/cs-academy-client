import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    let theme = false;
    const { user } = useContext(AuthContext)

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container >
                <Navbar.Brand><Link style={{ textDecoration: 'none' }} className='text-light' to='/'> <h3><FaBookOpen></FaBookOpen> CS Academy</h3></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link> <Link style={{ textDecoration: 'none' }} className='text-light' to='/'><h6>Home</h6></Link> </Nav.Link>
                        <Nav.Link> <Link style={{ textDecoration: 'none' }} className='text-light' to='/courses'><h6>Courses</h6></Link> </Nav.Link>
                        <Nav.Link > <h6>FAQ</h6> </Nav.Link>
                        <Nav.Link > <Link style={{ textDecoration: 'none' }} className='text-light' to='/blog'><h6>Blog</h6></Link> </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link > <Link style={{ textDecoration: 'none' }} className='text-light' to='/login'> <h6>Login</h6> </Link> </Nav.Link>

                        <Nav.Link > <Link style={{ textDecoration: 'none' }} className='text-light'>
                            <>
                                <h5>Dark meme</h5>
                            </>
                        </Link> </Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;