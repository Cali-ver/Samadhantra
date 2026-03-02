import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Users } from 'lucide-react';
import './WhySamadhantra.css';

const WhySamadhantra = () => {
    const features = [
        {
            icon: <Layers size={32} />,
            title: "Unified Solution System",
            description: "One integrated platform that brings together demand creators and solution providers across sectors."
        },
        {
            icon: <Zap size={32} />,
            title: "Demand–Supply Alignment",
            description: "Structured matching of requirements with the right services, products, and partners for faster fulfilment."
        },
        {
            icon: <Users size={32} />,
            title: "Multi-Stakeholder Ecosystem",
            description: "Designed for individuals, institutions, industry, government bodies, and service providers to collaborate seamlessly."
        }
    ];

    return (
        <section className="why-samadhantra-section">
            <div className="container">
                <div className="why-header">
                    <motion.span
                        className="why-subtitle"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        WHY SAMADHANTRA
                    </motion.span>
                    <motion.h2
                        className="why-main-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A Unified Solution Ecosystem for Every Stakeholder
                    </motion.h2>
                </div>

                <div className="why-cards-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="why-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="why-icon-container">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySamadhantra;
