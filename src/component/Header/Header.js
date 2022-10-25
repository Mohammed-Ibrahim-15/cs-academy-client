import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand> <h3><FaBookOpen></FaBookOpen> CS Academy</h3> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link> <Link to='/'><h6>Courses</h6></Link> </Nav.Link>
                        <Nav.Link > <h6>FAQ</h6> </Nav.Link>
                        <Nav.Link > <Link to='/blog'><h6>Blog</h6></Link> </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link > <Link to='/login'>Login</Link> </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank Meme
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;