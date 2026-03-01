import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
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
      <Topbar />
      <nav className="nav-container">
        <div className="container">
          {/* Main Nav Row */}
          <div className="nav-main-content">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Samadhantra Logo" className="logo-img" />
              </Link>
            </div>

            <div className="nav-center">
              <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT US <ChevronDown size={14} /></Link></li>
                <li><Link to="/stakeholders">STAKEHOLDERS</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to="/events">EVENTS</Link></li>
                <li><Link to="/blogs">BLOGS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
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
                  <li><Link to="/member-benefits">Benefits</Link></li>
                  <li><Link to="/registration">Registration</Link></li>
                </ul>
              </li>
              <li className="dropdown utility-item utility-member">
                <a href="#">Members Zone <ChevronDown size={14} /></a>
                <ul className="dropdown-menu">
                  <li><Link to="/member-login">Login</Link></li>
                  <li><Link to="/opportunities">Opportunities</Link></li>
                </ul>
              </li>
              <li className="dropdown utility-item utility-employee">
                <a href="#">Employee Zone <ChevronDown size={14} /></a>
                <ul className="dropdown-menu">
                  <li><Link to="/employee-portal">Portal</Link></li>
                  <li><Link to="/vacancies">Careers</Link></li>
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
