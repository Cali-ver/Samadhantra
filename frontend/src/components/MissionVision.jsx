import React from 'react';
import { motion } from 'framer-motion';
import './MissionVision.css';
import visionImg from '../assets/vision.jpg';
import missionImg from '../assets/mission.jpg';

const MissionVision = () => {
    return (
        <section className="mission-vision-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        How Samadhantra Creates Impact
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Connecting requirements with the right stakeholders through a structured ecosystem
                    </motion.p>
                </div>

                <div className="mission-vision-grid">
                    <motion.div
                        className="mv-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="card-image-wrapper">
                            <img src={visionImg} alt="Our Vision" />
                        </div>
                        <div className="card-content">
                            <h3>Our Vision</h3>
                            <p>
                                To become India's most trusted multi-stakeholder solution ecosystem—enabling seamless alignment of demand and supply to drive inclusive growth and collective progress.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mv-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="card-image-wrapper">
                            <img src={missionImg} alt="Our Mission" />
                        </div>
                        <div className="card-content">
                            <h3>Our Mission</h3>
                            <ul>
                                <li>To create a structured system that connects needs with the right solutions</li>
                                <li>To enable collaboration across sectors and stakeholders</li>
                                <li>To ensure transparency, efficiency, and fulfilment in every engagement</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
