import React from 'react';
import { motion } from 'framer-motion';
import './Solution.css';
import solutionImg from '../assets/what-we-do-img.png';

const Solution = () => {
   
    const leftSteps = [
        {
            number: 1,
            title: "Identify the Requirement",
            description: "Clearly understand and define the stakeholder's exact need."
        },
        {
            number: 2,
            title: "Requirement Analysis",
            description: "Assess scope, feasibility, priorities, and constraints."
        },
        {
            number: 3,
            title: "Stakeholder Matching",
            description: "Identify and connect with the most relevant partners."
        }
    ];

    const rightSteps = [
        {
            number: 4,
            title: "Solution Planning",
            description: "Design a customized, actionable solution roadmap."
        },
        {
            number: 5,
            title: "Execution & Coordination",
            description: "Enable smooth execution through coordinated collaboration."
        },
        {
            number: 6,
            title: "Delivery & Outcomes",
            description: "Deliver results with measurable impact and accountability."
        }
    ];

    return (
        <section className="solution-section">
            <div className="container">
                <div className="solution-header text-center">
                    <span className="solution-label">WHAT WE DO</span>
                    <h2 className="solution-title">Our End-to-End Solution Process</h2>
                </div>

                <div className="solution-main-grid">
                    {/* Column 1 (Steps 1, 2, 3) */}
                    <div className="solution-column">
                        {leftSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`solution-step step-${step.number}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="step-number-circle">{step.number}</div>
                                <div className="step-text-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-desc">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Column (Process Illustration) */}
                    <div className="solution-visual">
                        <motion.div
                            className="solution-img-wrapper"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img src={solutionImg} alt="Solution Illustration" className="solution-main-img" />
                        </motion.div>
                    </div>

                    {/* Column 3 (Steps 4, 5, 6) */}
                    <div className="solution-column">
                        {rightSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`solution-step step-${step.number}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="step-number-circle">{step.number}</div>
                                <div className="step-text-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-desc">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
