import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer-container">

      {/* Top section with background image */}
      <div className="footer-bg-wrapper">
        <div className="container footer-content">
          <div className="footer-section">
            {/* Logo matching navbar style */}
            <div className="footer-logo-wrap">
              <Link to="/">
                <img src={logo} alt="Samadhantra Logo" className="footer-logo-img" />
              </Link>
            </div>
            <p className="footer-desc">
              A multi-stakeholder innovation platform connecting startups, students, investors, and service providers to enable growth and collaboration.
            </p>
            <div className="social-links">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/stakeholders">Stakeholders</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Stakeholders</h4>
            <ul>
              <li><Link to="/startups">Startups &amp; MSMEs</Link></li>
              <li><Link to="/universities">Universities</Link></li>
              <li><Link to="/students">Students</Link></li>
              <li><Link to="/investors">Investors</Link></li>
              <li><Link to="/vendors">Service Providers</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li><MapPin size={18} /> Bengaluru &amp; Bhopal, India</li>
              <li><Phone size={18} /> +91 6232912441</li>
              <li><Mail size={18} /> contact@samadhantra.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Samadhantra. All rights reserved. | <Link to="/privacy">Privacy Policy</Link></p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
