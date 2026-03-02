import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';
import aboutImg from '../assets/about-img.png';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-container">
                            <img src={aboutImg} alt="Stakeholder Benefits Infographic" className="stakeholder-infographic" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="sub-heading">ABOUT SAMADHANTRA</span>
                        <h2 className="main-heading">Where Requirements Turn into Results</h2>
                        <div className="description-text">
                            <p>
                                Samadhantra is a unified solution system designed to fulfil demand and supply for all stakeholders through a structured, transparent, and collaborative platform.
                            </p>
                            <p>
                                We bring together individuals, institutions, service providers, industry, academia, NGOs, and government bodies to create an ecosystem where requirements are clearly identified, resources are efficiently aligned, and solutions are effectively delivered.
                            </p>
                            <p>
                                Samadhantra is not just a platform—it is a system that enables collaboration, trust, and sustainable outcomes across sectors.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
