import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../assets/css/style.css';
import p1 from '../../../assets/img/p1.png';
import p2 from '../../../assets/img/p2.png';
import p3 from '../../../assets/img/p3.png';
import p4 from '../../../assets/img/p4.png';
import p5 from '../../../assets/img/p5.png';
import p6 from '../../../assets/img/p6.png';

const portfolioItems = [
    { img: p1, title: 'Daily App', subtitle: 'Increasing your productivity' },
    { img: p2, title: 'Daily App', subtitle: 'Increasing your productivity' },
    { img: p3, title: 'Basics', subtitle: 'Everyday Masterclass' },
    { img: p4, title: 'Visualizing the data', subtitle: 'Understanding insights' },
    { img: p5, title: 'Project 5', subtitle: 'Subtitle 5' },
    { img: p6, title: 'Project 6', subtitle: 'Subtitle 6' },
];

const Portfolio = () => (
    <div className="portfolio-section container-fluid">
        <Container >
            <Row>
                <Col lg={2}>
                    <p className='portfolio-label'>Our Portfolio</p>
                </Col>
                <Col lg={10}>
                    <div className="portfolio-heading">
                        We envision a world where every idea, product, or<br />
                        service is brought to life through exceptional design.
                    </div>
                    <div className="portfolio-grid">
                        {portfolioItems.map((item, idx) => (
                            <div className="portfolio-item" key={idx}>
                                <img src={item.img} alt={item.title} className="portfolio-img" />
                                <div className="portfolio-caption">
                                    <span className="portfolio-title">{item.title}</span>
                                    <span className="portfolio-subtitle"> - {item.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Portfolio;
