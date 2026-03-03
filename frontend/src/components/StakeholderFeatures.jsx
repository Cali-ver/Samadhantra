import React from 'react';
import { motion } from 'framer-motion';
import './StakeholderFeatures.css';

const featuresData = [
  {
    number: "1",
    title: "Onboarding & KYC",
    points: [
      "Profile creation with verification (docs upload, LinkedIn, GST/CIN, sector tags, SDG tags, TRL level)",
      "Role selection: Startup, MSME, Service Provider, Incubator/Accelerator, Investor/Grant body, Mentor."
    ]
  },
  {
    number: "2",
    title: "Discovery & search",
    points: [
      "Advanced filters: Industry, stage, revenue band, geography, funding need, service type, technology, certifications.",
      "Saved searches and alerts (email + push) when new profiles match criteria."
    ]
  },
  {
    number: "3",
    title: "Matchmaking & recommendations",
    points: [
      "Suggested connections using: profile tags, stated needs/offers, engagement history.",
      "One click 'show interest' / 'request intro' with templated messages."
    ]
  },
  {
    number: "4",
    title: "Communication",
    points: [
      "In app chat and file sharing, with optional 'deal room' per opportunity.",
      "Integrated meeting scheduling (calendar slots, video links)."
    ]
  },
  {
    number: "5",
    title: "Community & content",
    points: [
      "Knowledge hub: articles, playbooks, funding schemes, govt programs, incubator calls, events listing.",
      "Activity feed (new programs, top experts, featured startups)."
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const StakeholderFeatures = () => {
  return (
    <section className="sf-section">
      <div className="sf-bg-blob blob-left"></div>
      <div className="sf-bg-blob blob-right"></div>

      <div className="container">
        <motion.div
          className="sf-header"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="sf-badge">Stakeholder Module</span>
          <h2 className="sf-title">
            Unified features that empower<br />every stakeholder
          </h2>
          <p className="sf-subtitle">
            Every feature is built to connect, accelerate, and deliver measurable outcomes across the ecosystem.
          </p>
        </motion.div>

        <motion.div
          className="sf-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="sf-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <div className="sf-card-inner">
                {/* Number circle */}
                <div className="sf-number-badge">
                  <span>{feature.number}</span>
                  <div className="sf-number-ring"></div>
                </div>

                <h3 className="sf-card-title">{feature.title}</h3>

                <ul className="sf-points">
                  {feature.points.map((pt, i) => (
                    <li key={i} className="sf-point">
                      <span className="sf-dot"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover shimmer */}
                <div className="sf-shimmer"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StakeholderFeatures;
