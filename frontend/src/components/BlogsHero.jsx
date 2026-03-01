import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './BlogsHero.css';

const BlogsHero = () => {
  return (
    <section className="blogs-hero">
      <div className="blogs-hero-overlay"></div>
      <div className="container blogs-hero-container">
        <div className="blogs-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Blogs
          </motion.h1>
          <motion.nav 
            className="breadcrumbs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Link to="/">Home</Link>
            <ChevronRight size={16} className="breadcrumb-separator" />
            <span>Blogs</span>
          </motion.nav>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
