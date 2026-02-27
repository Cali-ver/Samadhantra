import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Home } from 'lucide-react';
import TopTicker from './TopTicker';
import './Navbar.css';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 1. Determine if header should be visible
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      // 2. Scrolled state for background changes
      setIsScrolled(currentScrollY > 50);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header-master ${!isVisible ? 'header-hidden' : ''} ${isScrolled ? 'header-scrolled' : ''}`}>
      <TopTicker />
      <nav className="nav-container">
        <div className="container">
          {/* Main Nav Row */}
          <div className="nav-main-content">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Samadhantra Logo" className="logo-img" />
              </a>
            </div>

            <div className="nav-center">
              <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT US <ChevronDown size={14} /></a></li>
                <li><a href="/stakeholders">STAKEHOLDERS</a></li>
                <li><a href="/services">SERVICES</a></li>
                <li><a href="/events">EVENTS</a></li>
                <li><a href="/blogs">BLOGS</a></li>
                <li><a href="/contact">CONTACT</a></li>
              </ul>
            </div>

            <div className="nav-right">
              <div className="search-pill">
                <input type="text" placeholder="Search Samadhantra" />
                <Search size={18} className="search-icon" />
              </div>
              
              <button 
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Utility Button Row */}
          {!isMobileMenuOpen && (
            <div className="nav-utility-ribbon">
              <li className="dropdown utility-item utility-become">
                <a href="#">Become a Member <ChevronDown size={14} /></a>
                <ul className="dropdown-menu">
                  <li><a href="/member-benefits">Benefits</a></li>
                  <li><a href="/registration">Registration</a></li>
                </ul>
              </li>
              <li className="dropdown utility-item utility-member">
                <a href="#">Members Zone <ChevronDown size={14} /></a>
                <ul className="dropdown-menu">
                  <li><a href="/member-login">Login</a></li>
                  <li><a href="/opportunities">Opportunities</a></li>
                </ul>
              </li>
              <li className="dropdown utility-item utility-employee">
                <a href="#">Employee Zone <ChevronDown size={14} /></a>
                <ul className="dropdown-menu">
                  <li><a href="/employee-portal">Portal</a></li>
                  <li><a href="/vacancies">Careers</a></li>
                </ul>
              </li>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
