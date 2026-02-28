import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay"></div>
      <div className="container about-hero-container">
        <div className="about-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Us
          </motion.h1>
          <motion.nav 
            className="breadcrumbs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <a href="/">Home</a>
            <ChevronRight size={16} className="breadcrumb-separator" />
            <span>About Us</span>
          </motion.nav>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
