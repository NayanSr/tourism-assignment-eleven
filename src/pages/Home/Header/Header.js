import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="success" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand className='text-warning' href="#home">S. TOUR</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className='text-warning' to="/home"> <h5>Home</h5></Nav.Link>
                        <Nav.Link as={Link} className='text-warning' to="/home"> <h5>Home</h5></Nav.Link>
                        <Nav.Link as={Link} className='text-warning' to="/allservices"><h5>All Packages</h5></Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="secondary">Logout</Button> :
                            <Nav.Link as={Link} className='text-warning' to="/login"><h5>Login</h5></Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;