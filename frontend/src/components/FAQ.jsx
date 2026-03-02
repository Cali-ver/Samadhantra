import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock } from 'lucide-react';
import './FAQ.css';
import faqImg from '../assets/faq.png';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "Who can use Samadhantra's support services?",
            answer: "Samadhantra supports startups, MSMEs, institutions, corporates, service providers, students, and ecosystem partners who need structured guidance and reliable solutions.",
            icon: <Clock size={20} />
        },
        {
            question: "How does Samadhantra provide support to users?",
            answer: "We connect you with industry domain experts and academic specialists who provide strategic expertise, technical guidance, and operational support through a transparent collaboration model.",
            icon: <ChevronDown size={20} />
        },
        {
            question: "Do you offer domain and website-related support?",
            answer: "Yes, we provide specialized support for digital presence, including domain consulting, website development, and digital marketing strategies to help businesses grow in the online space.",
            icon: <ChevronDown size={20} />
        },
        {
            question: "What makes Samadhantra different from traditional service platforms?",
            answer: "Unlike generic platforms, Samadhantra focuses on outcome-driven collaboration. We define requirements clearly, match with specific expertise, and ensure structured execution for maximum impact.",
            icon: <ChevronDown size={20} />
        }
    ];

    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-grid">
                    <div className="faq-content">
                        <span className="faq-label">FREQUENTLY ASKED QUESTIONS</span>
                        <h2 className="faq-main-title">Answers That Help You Move Forward</h2>
                        <p className="faq-subtitle">
                            Samadhantra connects your questions with the right experts and ecosystem partners—so
                            you can move forward with confidence.
                        </p>

                        <div className="faq-accordion">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                                >
                                    <div className="faq-question-row">
                                        <h3 className="faq-question">{faq.question}</h3>
                                        <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>
                                            {index === 0 ? <Clock size={20} /> : <ChevronDown size={20} />}
                                        </span>
                                    </div>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                className="faq-answer-wrapper"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className="faq-answer">{faq.answer}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="faq-visual">
                        <motion.div
                            className="faq-image-container"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={faqImg} alt="FAQ Illustration" className="faq-img" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
