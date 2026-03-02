import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Honorary.css';

// Import images
import madhuImg from '../assets/madhu_khare.jpg';
import manojImg from '../assets/manoj_lal.jpg';
import arvindImg from '../assets/arvind_singh.png';
import advisor1Img from '../assets/advisor1.jpg';
import advisor3Img from '../assets/advisor3.png';

const Honorary = () => {
    const advisors = [
        {
            name: 'Madhu Khare',
            role: 'Head Operations & HR',
            image: madhuImg
        },
        {
            name: 'Manoj Lal',
            role: 'Industry domain expert',
            image: manojImg
        },
        {
            name: 'Dr. Arvind Singh',
            role: 'Academic & Management Expert',
            image: arvindImg
        },
        {
            name: 'Expert Advisor',
            role: 'Strategic Advisor',
            image: advisor1Img
        },
        {
            name: 'Strategic Advisor',
            role: 'Industry Expert',
            image: advisor3Img
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const sliderRef = useRef(null);

    // Responsive visible cards
    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % (advisors.length - (visibleCards - 1)));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? advisors.length - visibleCards : prev - 1));
    };

    return (
        <section className="honorary-section">
            <div className="container">
                <div className="honorary-header text-center">
                    <h2 className="honorary-title">Honorary Advisor</h2>
                    <p className="honorary-subtitle">Guiding Samadhantra with strategic expertise and experience</p>
                </div>

                <div className="honorary-slider-container">
                    <button className="slider-nav prev" onClick={handlePrev}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className="slider-wrapper" ref={sliderRef}>
                        <motion.div
                            className="slider-track"
                            animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {advisors.map((advisor, index) => (
                                <div
                                    key={index}
                                    className="slider-item"
                                    style={{ flex: `0 0 ${100 / visibleCards}%` }}
                                >
                                    <motion.div
                                        className="honorary-card"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="honorary-image-wrapper">
                                            <img src={advisor.image} alt={advisor.name} className="honorary-img" />
                                        </div>
                                        <div className="honorary-info">
                                            <h3 className="advisor-name">{advisor.name}</h3>
                                            <p className="advisor-role">{advisor.role}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <button className="slider-nav next" onClick={handleNext}>
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="slider-dots">
                    {Array.from({ length: advisors.length - (visibleCards - 1) }).map((_, idx) => (
                        <button
                            key={idx}
                            className={`dot ${currentIndex === idx ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Honorary;
