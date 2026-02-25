import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, FileText, Users, Quote, CheckCircle, PackageCheck } from 'lucide-react';
import './Features.css';

const Features = () => {
  const steps = [
    {
      icon: <UserPlus size={32} />,
      title: "Subscribe & Member",
      desc: "Choose your category, complete payment, and get instant access.",
      align: "left"
    },
    {
      icon: <FileText size={32} />,
      title: "Post Requirement",
      desc: "Login to your dashboard and submit your specific innovation needs.",
      align: "right"
    },
    {
      icon: <Users size={32} />,
      title: "Get Matched",
      desc: "Our AI matching engine suggests the most suitable service providers.",
      align: "left"
    },
    {
      icon: <Quote size={32} />,
      title: "Approve Quote",
      desc: "Compare transparent quotes and approve the best option for you.",
      align: "right"
    },
    {
      icon: <PackageCheck size={32} />,
      title: "Service Delivered",
      desc: "The approved service is executed successfully by verified partners.",
      align: "left"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Project Closure",
      desc: "Share feedback and close the project with confidence.",
      align: "right"
    }
  ];

  // Path generator for S-curve flow
  const getFlowPath = () => {
    // This is a simplified S-curve for a desktop view
    // In a real implementation, coordinates would depend on container height
    return "M 500 0 C 800 150, 200 300, 500 450 C 800 600, 200 750, 500 900";
  };

  return (
    <section className="features-flow-section">
      <div className="container">
        <div className="section-header centered">
          <span className="subtitle">HOW IT WORKS</span>
          <h2>A Seamless Process for Results</h2>
          <p>Follow our structured flow from subscribing to project closure.</p>
        </div>

        <div className="features-flow-visualizer">
          {/* SVG Connection Line */}
          <div className="flow-line-container">
            <svg className="flow-svg" viewBox="0 0 1000 800" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Static background path */}
              <motion.path
                d="M 500 0 Q 800 100, 500 200 Q 200 300, 500 400 Q 800 500, 500 600 Q 200 700, 500 800"
                fill="none"
                stroke="rgba(40, 167, 69, 0.1)"
                strokeWidth="4"
              />
              
              {/* Animated energy flow path */}
              <motion.path
                d="M 500 0 Q 800 100, 500 200 Q 200 300, 500 400 Q 800 500, 500 600 Q 200 700, 500 800"
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth="6"
                strokeDasharray="80, 220"
                initial={{ strokeDashoffset: 800 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </svg>
          </div>

          <div className="flow-steps-container">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className={`flow-step ${step.align}`}
                initial={{ opacity: 0, x: step.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="step-icon-wrapper">
                  <motion.div 
                    className="step-icon"
                    animate={{ 
                      boxShadow: ["0 0 0px var(--primary)", "0 0 20px var(--primary)33", "0 0 0px var(--primary)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="step-number">{index + 1}</div>
                </div>
                
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
