import React from 'react';
import { motion } from 'framer-motion';
import './OurFounder.css';
import founderImg from '../assets/Dr-Ramesh-khare.png';

const OurFounder = () => {
    const stats = [
        { label: 'Years of Leadership', value: '33+' },
        { label: 'Collaborations Enabled', value: '20+' },
        { label: 'Commitment to Impact', value: '100%' }
    ];

    return (
        <section className="founder-section">
            <div className="container">
                <motion.div
                    className="founder-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="founder-grid-new">
                        <div className="founder-visual-column">
                            <div className="side-accent"></div>
                            <div className="founder-image-container">
                                <img src={founderImg} alt="Dr Ramesh K Khare" className="founder-main-img" />
                            </div>
                        </div>

                        <div className="founder-info-column">
                            <span className="founder-small-tag">Founder & CEO</span>
                            <h2 className="founder-main-name">Dr Ramesh K Khare</h2>
                            <div className="name-divider"></div>

                            <div className="founder-detailed-bio">
                                <p>
                                    A seasoned technology leader, entrepreneur, and social impact visionary with over three decades of diverse
                                    experience spanning Information Technology, BFSI, Artificial Intelligence, and Education Technology.
                                </p>
                                <p>
                                    He has held key professional roles with some of India's and the world's most respected organizations,
                                    including Life Insurance Corporation of India (LIC), PNB MetLife, and Computer Sciences Corporation
                                    (CSC, now DXC Technology).
                                </p>
                                <p>
                                    He has founded Data Science Wizards Private Limited, an AI-focused company with operations in Mumbai
                                    and Ireland. He is also the Founder and Chairman of "Data Vigyan Kaushal Vikas Foundation (DVKVF)",
                                    a Section 8 not-for-profit organization headquartered in Bengaluru and expanded across Central India.
                                </p>
                                <p>
                                    Further strengthening his contribution to education and skilling, he is Managing Director,
                                    Fintechedu Solutions Private Limited, an EdTech company based in Bhopal, Madhya Pradesh.
                                </p>
                                <p>
                                    He is the Founder and CEO of the Technology company "Teknowxa Solutions Pvt Ltd", leading innovation
                                    in artificial intelligence, customized Software Development, Education and Digital Marketing areas.
                                </p>
                            </div>

                            <div className="founder-stats-grid">
                                {stats.map((stat, index) => (
                                    <div key={index} className="founder-stat-box">
                                        <span className="stat-value">{stat.value}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurFounder;
