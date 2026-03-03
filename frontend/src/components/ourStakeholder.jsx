import React from 'react';
import { motion } from 'framer-motion';
import './ourStakeholder.css';

const stakeholdersData = [
  {
    emoji: "🚀",
    title: "Startups & MSMEs",
    description: "Helping startups and MSMEs find the right solutions, partners, and support to grow efficiently.",
    gradient: "gradient-green",
    tag: "Growth"
  },
  {
    emoji: "🏛️",
    title: "Institutes & Industry",
    description: "Enabling institutions and industries to source solutions, talent, and collaborations easily.",
    gradient: "gradient-blue",
    tag: "Collaboration"
  },
  {
    emoji: "🎓",
    title: "Educational Institutions",
    description: "Connecting education with industry to drive practical learning and innovation.",
    gradient: "gradient-indigo",
    tag: "Innovation"
  },
  {
    emoji: "📈",
    title: "Investors",
    description: "Providing access to curated opportunities and high-potential, scalable startups.",
    gradient: "gradient-teal",
    tag: "Funding"
  },
  {
    emoji: "🌱",
    title: "Incubation Centres",
    description: "Supporting incubators by connecting startups with mentors, partners, and investors.",
    gradient: "gradient-emerald",
    tag: "Nurturing"
  },
  {
    emoji: "🎯",
    title: "Students",
    description: "Linking students to real-world projects, skills, and industry exposure.",
    gradient: "gradient-violet",
    tag: "Learning"
  },
  {
    emoji: "💻",
    title: "Freelancers",
    description: "Helping freelancers discover relevant projects and collaborate across sectors.",
    gradient: "gradient-sky",
    tag: "Talent"
  },
  {
    emoji: "🔧",
    title: "Service & Product Providers",
    description: "Enabling providers to reach the right clients through verified requirements.",
    gradient: "gradient-orange",
    tag: "Services"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.09,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const OurStakeholder = () => {
  return (
    <section className="our-stakeholder-section">
      <div className="stakeholder-bg-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Our Ecosystem</span>
          <h2 className="section-title">Stakeholders Across the<br />Samadhantra Ecosystem</h2>
          <p className="section-subtitle">A unified platform where every stakeholder finds value, opportunity, and growth.</p>
        </motion.div>

        <div className="stakeholder-grid">
          {stakeholdersData.map((item, index) => (
            <motion.div
              key={index}
              className={`stakeholder-card ${item.gradient}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={index}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
            >
              <div className="card-inner">
                <div className="card-top">
                  <div className="icon-bubble">
                    <span className="icon-emoji">{item.emoji}</span>
                    <div className="icon-glow"></div>
                  </div>
                  <span className="card-tag">{item.tag}</span>
                </div>
                <h3 className="stakeholder-card-title">{item.title}</h3>
                <p className="stakeholder-card-desc">{item.description}</p>
                <div className="card-footer">
                  <a href="#" className="read-more-btn">
                    <span>Read more</span>
                    <span className="arrow-icon">→</span>
                  </a>
                  <div className="card-shimmer"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStakeholder;
