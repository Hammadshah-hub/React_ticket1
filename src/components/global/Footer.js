import React from 'react';
import '../../assets/css/Footer.css';

import { FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Footer = () => (
    <footer className="footer-section">
        {/* Top Collaborate Section */}
        <div className="footer-collab container">
            <div className="footer-collab-row">
                <div className="footer-collab-label">Let's Collaborate</div>
                <div className="footer-collab-content">
                    <div className="footer-collab-heading">
                        Ready to turn your ideas into exceptional designs?<br />
                        Contact us today, and let's make something amazing together!
                    </div>
                    <button className="footer-collab-btn">LET'S TALK</button>
                </div>
            </div>
        </div>
        {/* Main Footer */}
        <div className="footer-main container">
            <div className="footer-row">
                <div className="footer-brand-col">
                    <div className="footer-logo">
                        <span className="footer-logo-icon">✦</span> Creativo.
                    </div>
                    <div className="footer-desc">
                        Creativo is where your imagination and our expertise converge to create design solutions that elevate your brand and set you apart from the competition.
                    </div>
                    <div className="footer-contact">
                        <div className="footer-email">hello@creativo.com</div>
                        <div className="footer-phone">+1-800-123 4567</div>
                    </div>
                </div>
                <div className="footer-links-col">
                    <div className="footer-links-title">Company</div>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Pricing</a>
                </div>
                <div className="footer-links-col">
                    <div className="footer-links-title">Contact</div>
                    <a href="#">Help</a>
                    <a href="#">FAQs</a>
                    <a href="#">Press</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Partners</a>
                </div>
                <div className="footer-links-col">
                    <div className="footer-links-title">Discover</div>
                    <a href="#">Affiliate</a>
                    <a href="#">Partner Program</a>
                </div>
            </div>
        </div>
        {/* Bottom Bar */}
        <div className="footer-bottom container">
            <div className="footer-copyright">
                Copyright © 2032 Creativo®. All rights reserved.
            </div>
            <div className="footer-social">
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaFacebookF /></a>
            </div>
        </div>
    </footer>
);

export default Footer;
