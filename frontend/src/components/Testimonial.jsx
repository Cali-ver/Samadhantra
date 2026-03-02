import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonial.css';
import authorImg from '../assets/amit_sharma.png';

const testimonials = [
  {
    text: "Samadhantra helped us clearly define our requirements and connect with the right partners at the right time. The structured process and transparent collaboration made execution smooth and outcome-driven.",
    name: "Amit Sharma",
    role: "Founder, Startup / MSME",
    image: authorImg
  },
  
  {
    text: "The AI-driven matching engine is a game-changer. We found the perfect academic partner for our R&D project within weeks instead of months.",
    name: "Dr. Rajesh K.",
    role: "Director, Innovation Lab",
    image: authorImg 
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        <span className="section-label">OUR TESTIMONIAL</span>
        <h2>Connecting needs with the right solutions—through real experiences</h2>

        <div className="testimonial-card">
          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="quote-icon">
                <Quote size={60} fill="currentColor" opacity={0.2} />
              </div>
              
              <p className="testimonial-text">
                "{testimonials[current].text}"
              </p>

              <div className="testimonial-author">
                <span className="author-name">{testimonials[current].name}</span>
                <span className="author-role">{testimonials[current].role}</span>
              </div>

              <div className="author-img-wrapper">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name} 
                  className="author-img" 
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-nav">
            <button className="nav-arrow" onClick={prevSlide}>
              <ChevronLeft size={32} />
            </button>
            <button className="nav-arrow" onClick={nextSlide}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
