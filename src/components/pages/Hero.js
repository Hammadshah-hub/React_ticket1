import React from 'react';
import { Button } from 'react-bootstrap';
import heroImg from '../../assets/img/img1.png';
import navImg from '../../assets/img/img2.png';
import '../../assets/css/Hero.css';

const Hero = () => (
    <div className="container hero-section">
        <div className="row">
            <div className="col-lg-6 hero-section-left">
                <div className="row">
                    <div className="col-lg-2">
                        <img src={navImg} alt="Hero Illustration" className="nav-img" />

                    </div>
                    <div className="col-lg-10">
                        <h1 className="hero-title">
                            <div className="hero-title-where">Where</div>
                            <div className="hero-title-center">Design Meets</div>
                            <div className="hero-title-end">Innovation!</div>
                        </h1>
                        <p className="hero-subtitle">
                            Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image, we've got the creative firepower to make it happen.
                        </p>
                        <Button className="hero-btn1">LET'S TALK</Button>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <img src={heroImg} alt="Hero Illustration" className="hero-img" />
            </div>

        </div>
    </div>
)

export default Hero;