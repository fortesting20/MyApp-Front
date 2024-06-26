import React, { useContext, useState }  from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import LogoutModal from "../Auth/Modal/LogoutModal";
import { AuthContext } from "../../contexts/AuthContext";


const NavigationBar = () => {
    const { auth }  = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);

    const logout = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    { auth.token ?
                        <Nav.Link as={Link} to="/post">Post</Nav.Link> 
                        : ''
                    }
                    </Nav>
                    <Nav>
                        {auth.token ? (
                            <NavDropdown title={auth.user.name} id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <LogoutModal show={showModal} handleClose={handleClose}/>
        </Navbar>
    );
};

export default NavigationBar;