import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Core.css';

// Import images
import core6 from '../assets/core-team6.png';
import core5 from '../assets/core-team5.png';
import core1 from '../assets/core-team1.png';
import core2 from '../assets/core-team-2.png';

const Core = () => {
    const teamMembers = [
        {
            name: 'Rajesh Sen',
            role: 'Founder & CTO',
            image: core1
        },
        {
            name: 'Rakesh Gupta',
            role: 'Lead - Products',
            image: core2
        },
        {
            name: 'Priyanka Sarathe',
            role: 'Lead - Fromt End',
            image: core5
        },
        {
            name: 'Vikas Gupta',
            role: 'Digital Manager',
            image: core6
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
        setCurrentIndex((prev) => (prev + 1) % (teamMembers.length - (visibleCards - 1)));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - visibleCards : prev - 1));
    };

    return (
        <section className="core-section">
            <div className="container">
                <div className="core-header text-center">
                    <h2 className="core-title">Core Team</h2>
                    <p className="core-subtitle">The passionate individuals driving our vision forward with commitment and excellence</p>
                </div>

                <div className="core-slider-container">
                    <button className="slider-nav prev" onClick={handlePrev}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className="slider-wrapper" ref={sliderRef}>
                        <motion.div
                            className="slider-track"
                            animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="slider-item"
                                    style={{ flex: `0 0 ${100 / visibleCards}%` }}
                                >
                                    <motion.div
                                        className="core-card"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="core-image-wrapper">
                                            <img src={member.image} alt={member.name} className="core-img" />
                                        </div>
                                        <div className="core-info">
                                            <h3 className="member-name">{member.name}</h3>
                                            <p className="member-role">{member.role}</p>
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
                    {Array.from({ length: teamMembers.length - (visibleCards - 1) }).map((_, idx) => (
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

export default Core;
