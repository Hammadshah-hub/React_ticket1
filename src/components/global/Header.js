import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Icon1 from '../../assets/icn/icn1.png';
import '../../assets/css/style.css';

const Header = () => (
    <Navbar bg="white" expand="lg" className="border-0">
        <Container>
            <Navbar.Brand href="#" className="fw-bold">
                <img src={Icon1} alt="Creativo Logo" style={{ height: 28, marginRight: 8 }} />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
                <Nav className="ms-auto align-items-center">
                    <Nav.Link href="#features" className="nav-link-custom active">Home</Nav.Link>
                    <Nav.Link href="#about" className="nav-link-custom">About Us</Nav.Link>
                    <Nav.Link href="#portfolio" className="nav-link-custom">Portfolio</Nav.Link>
                    <Nav.Link href="#contact" className="get-in-touch-btn">GET IN TOUCH</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;