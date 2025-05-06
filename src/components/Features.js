import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import '../assets/css/Features.css';

const Features = () => (
    <Container fluid className="features-container">
        <Container>
            <Row>
                <Col lg={2}>
                    <p className='f-title'>Our Services</p>
                </Col>
                <Col lg={10}>
                    <Accordion defaultActiveKey="0" className="features-accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h3 className='h1-title mb-0'>Visual Branding</h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='p1-title'>
                                    Your brand is more than just a logo; it's the essence of your business. We create compelling brand identities that tell your unique story and resonate with your target audience.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h3 className='h1-title mb-0'>UI/UX Design</h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='p1-title'>
                                    We design intuitive and beautiful interfaces that provide a seamless user experience across all devices.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <h3 className='h1-title mb-0'>Development</h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='p1-title'>
                                    We develop high-quality software solutions that meet your business needs and exceed your expectations.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <h3 className='h1-title mb-0'>Creative Campaigning</h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='p1-title'>
                                    We create compelling and effective marketing campaigns that drive results and achieve your business goals.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* Add more Accordion.Items as needed */}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </Container>
);

export default Features;
