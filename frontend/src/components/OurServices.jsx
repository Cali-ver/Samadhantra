import React from 'react';
import { motion } from 'framer-motion';
import './OurServices.css';

const servicesData = [
  {
    emoji: "💼",
    title: "Business & Startup Services",
    gradient: "gradient-green",
    tag: "Startup",
    items: [
      "Company incorporation",
      "MSME registration",
      "Business advisory",
      "Financial planning",
      "Process consulting",
      "Event"
    ]
  },
  {
    emoji: "💻",
    title: "Technology & Digital Solutions",
    gradient: "gradient-blue",
    tag: "Tech",
    items: [
      "Website & app development",
      "SaaS products",
      "ERP / CRM / HRMS",
      "AI & data analytics",
      "Cybersecurity",
      "Cloud & hosting"
    ]
  },
  {
    emoji: "🎓",
    title: "Education & Skill Development",
    gradient: "gradient-indigo",
    tag: "Education",
    items: [
      "Certification programs",
      "Faculty development",
      "Industry-aligned curriculum",
      "Online / offline training",
      "Skill assessment",
      "Foreign university collaboration"
    ]
  },
  {
    emoji: "👥",
    title: "Talent, Internship & Hiring",
    gradient: "gradient-teal",
    tag: "Talent",
    items: [
      "Internships",
      "Apprenticeships",
      "Freelance projects",
      "Full-time hiring",
      "Campus placements"
    ]
  },
  {
    emoji: "⚖️",
    title: "Legal, Compliance & Governance",
    gradient: "gradient-violet",
    tag: "Legal",
    items: [
      "IP & patent filing",
      "Contracts & agreements",
      "GST & taxation",
      "Audit & compliance",
      "Regulatory advisory"
    ]
  },
  {
    emoji: "📣",
    title: "Marketing, Sales & Growth",
    gradient: "gradient-orange",
    tag: "Marketing",
    items: [
      "Branding & design",
      "Digital marketing",
      "Performance marketing",
      "PR & communications",
      "Market research"
    ]
  },
  {
    emoji: "🏗️",
    title: "Infrastructure & Operations",
    gradient: "gradient-sky",
    tag: "Operations",
    items: [
      "Office setup",
      "IT hardware",
      "Cloud infrastructure",
      "Facility management",
      "Supply chain services"
    ]
  },
  {
    emoji: "🔬",
    title: "Research, Innovation & Consulting",
    gradient: "gradient-emerald",
    tag: "R&D",
    items: [
      "R&D projects",
      "Industry–academia collaboration",
      "Market intelligence",
      "Product validation",
      "Innovation labs"
    ]
  },
  {
    emoji: "🏛️",
    title: "Government, CSR & Public Programs",
    gradient: "gradient-rose",
    tag: "Government",
    items: [
      "Government scheme implementation",
      "CSR project execution",
      "Skill & employment programs",
      "Social impact initiatives",
      "Monitoring & reporting"
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const OurServices = () => {
  return (
    <section className="os-section">
      {/* Background decoration */}
      <div className="os-blob os-blob-1"></div>
      <div className="os-blob os-blob-2"></div>
      <div className="os-blob os-blob-3"></div>

      <div className="container">
        {/* Header */}
        <motion.div
          className="os-header"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="os-badge">Our Services</span>
          <h2 className="os-title">Services Across Samadhantra</h2>
          <p className="os-callout">
            "Become a member of <strong>Samadhantra</strong> before choosing any services."
            <a href="/contact" className="os-subscribe-btn">Subscribe Now</a>
          </p>
          <p className="os-subtitle">Structured, scalable and collaborative service offerings</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="os-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {servicesData.map((svc, index) => (
            <motion.div
              key={index}
              className={`os-card ${svc.gradient}`}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
            >
              <div className="os-card-inner">
                {/* Top row */}
                <div className="os-card-top">
                  <div className="os-icon-bubble">
                    <span className="os-icon-emoji">{svc.emoji}</span>
                    <div className="os-icon-glow"></div>
                  </div>
                  <span className="os-tag">{svc.tag}</span>
                </div>

                <h3 className="os-card-title">{svc.title}</h3>

                <ul className="os-items">
                  {svc.items.map((item, i) => (
                    <li key={i} className="os-item">
                      <span className="os-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="os-card-footer">
                  <a href="/contact" className="os-get-started-btn">Get Started</a>
                </div>

                {/* Shimmer */}
                <div className="os-shimmer"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
