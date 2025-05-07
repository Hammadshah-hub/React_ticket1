import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import '../../assets/css/Header.css';

const Header = () => {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home" className="text-white">
                    <FaChevronRight className="me-2" />
                    <span className="brand-text">Your Brand</span>
                    <FaChevronRight className="ms-2" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#features" className="text-white">Features</Nav.Link>
                        <Nav.Link href="#gallery" className="text-white">Gallery</Nav.Link>
                        <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header; 