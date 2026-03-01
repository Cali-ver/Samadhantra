import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PageHero.css';

const PageHero = ({ title }) => {
  return (
    <section className="page-hero">
      <div className="page-hero-overlay"></div>
      <div className="container page-hero-container">
        <div className="page-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <motion.nav 
            className="breadcrumbs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Link to="/">Home</Link>
            <ChevronRight size={16} className="breadcrumb-separator" />
            <span>{title}</span>
          </motion.nav>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
