import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
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
              <a href="/">
                <img src={logo} alt="Samadhantra Logo" className="footer-logo-img" />
              </a>
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
              <li><a href="/about">About Us</a></li>
              <li><a href="/stakeholders">Stakeholders</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/blogs">Blogs</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Stakeholders</h4>
            <ul>
              <li><a href="/startups">Startups &amp; MSMEs</a></li>
              <li><a href="/universities">Universities</a></li>
              <li><a href="/students">Students</a></li>
              <li><a href="/investors">Investors</a></li>
              <li><a href="/vendors">Service Providers</a></li>
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
          <p>&copy; 2026 Samadhantra. All rights reserved. | <a href="/privacy">Privacy Policy</a></p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
