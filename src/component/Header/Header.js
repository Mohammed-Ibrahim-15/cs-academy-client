import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaUser } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                // Sign Out
            })
            .catch((error) => {
                console.error('Error: ', error)
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container >
                <Navbar.Brand><Link style={{ textDecoration: 'none' }} className='text-light' to='/'> <h3><FaBookOpen></FaBookOpen> CS Academy</h3></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link> <Link style={{ textDecoration: 'none' }} className='text-light' to='/'><h6>Home</h6></Link> </Nav.Link>
                        <Nav.Link> <Link style={{ textDecoration: 'none' }} className='text-light' to='/courses'><h6>Courses</h6></Link> </Nav.Link>
                        <Nav.Link > <Link style={{ textDecoration: 'none' }} className='text-light' to='/FAQ'><h6>FAQ</h6></Link> </Nav.Link>
                        <Nav.Link > <Link style={{ textDecoration: 'none' }} className='text-light' to='/blog'><h6>Blog</h6></Link> </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link > <Link style={{ textDecoration: 'none' }} className='text-light'>
                            <>
                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Tooltip id={`tooltip-${placement}`}>
                                                {user?.displayName}
                                            </Tooltip>
                                        }>
                                        {
                                            user?.uid ?
                                                <Image
                                                    style={{ height: '30px' }}
                                                    roundedCircle
                                                    src={user?.photoURL}>
                                                </Image>
                                                :
                                                <FaUser></FaUser>
                                        }
                                    </OverlayTrigger>
                                ))}
                            </>
                            <>
                                {
                                    user?.uid ?
                                        <button onClick={handleSignOut} className='btn btn-light ms-2 rounded-3'>Logout</button>
                                        :
                                        <Link to='/login'><button className='btn btn-light ms-2 rounded-3'>Login</button> </Link>


                                }
                            </>
                        </Link> </Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;