import React, { useState, useEffect, useRef } from 'react';
import { Rocket, GraduationCap, User, Building2, Briefcase, Users, Handshake, ChevronDown } from 'lucide-react';
import './whatStakeholders.css';

const WhatStakeholders = () => {
  const [activeCategory, setActiveCategory] = useState("Startup & MSME");
  const [isExpanded, setIsExpanded] = useState(false);
  const selectorRef = useRef(null);

  // Close box when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  const contentData = {
    "Startup & MSME": {
      title: "Smart, scalable solutions for startups, institutions, industry, and beyond",
      subHeader: "From Requirements to Results",
      description: [
        "Samadhantra helps startups and MSMEs move from requirements to results through structured planning and coordinated execution.",
        "We analyze needs, align the right partners and resources, and design practical roadmaps that ensure clarity, efficiency, and measurable outcomes."
      ]
    },
    "University/College/School": {
      title: "Academic Excellence & Institutional Growth",
      subHeader: "Empowering Educators & Institutions",
      description: [
        "We provide tools for academic institutions to manage growth, research, and industry collaborations effectively.",
        "Bridging the gap between educational requirements and real-world results for universities and schools."
      ]
    },
    "Students": {
      title: "Career Foundations & Skill Development",
      subHeader: "Your Journey to Professional Success",
      description: [
        "Personalized roadmaps for students to navigate their academic and professional paths.",
        "Access to resources, mentors, and opportunities that turn learning into measurable achievements."
      ]
    },
    "Corporate/Industry": {
      title: "Enterprise Solutions & Industry Synergy",
      subHeader: "Driving Corporate Innovation",
      description: [
        "Structured mechanisms for corporations to source innovations and manage strategic partnerships.",
        "Enhancing operational efficiency and outcome tracking across industry sectors."
      ]
    },
    "Freelancers/professional": {
      title: "Opportunity Access & Growth for Professionals",
      subHeader: "Scaling Your Professional Impact",
      description: [
        "Direct access to verified demand and high-value projects for freelancers and professionals.",
        "Reduced acquisition effort and higher conversion for independent service providers."
      ]
    },
    "Service Providers /Vendor Partners": {
      title: "Trusted Ecosystem for Service Delivery",
      subHeader: "Efficient Resource Orchestration",
      description: [
        "A platform to connect service providers with real, verified needs across diverse sectors.",
        "Streamlining supply chains and ensuring transparent, accountable delivery cycles."
      ]
    },
    "Incubation Centres Investors": {
      title: "Strategic Investment & Startup Nurturing",
      subHeader: "Maximizing Investment Outcomes",
      description: [
        "Tools for incubation centers and investors to monitor, govern, and track the progress of their portfolios.",
        "Connecting funding with grounded requirements to drive sustainable innovation."
      ]
    }
  };

  const cards = [
    { title: "Startup & MSME", icon: <Rocket className="stake-icon" /> },
    { title: "University/College/School", icon: <GraduationCap className="stake-icon" /> },
    { title: "Students", icon: <User className="stake-icon" /> },
    { title: "Corporate/Industry", icon: <Building2 className="stake-icon" /> },
    { title: "Freelancers/professional", icon: <Briefcase className="stake-icon" /> },
    { title: "Service Providers /Vendor Partners", icon: <Users className="stake-icon" /> },
    { title: "Incubation Centres Investors", icon: <Handshake className="stake-icon" /> }
  ];

  const currentContent = contentData[activeCategory];

  return (
    <section className="what-stakeholders-section">
      <div className="what-stakeholders-container">
        <div className="what-stakeholders-left">
          {/* Custom Toggleable Box for Selecing Stakeholder */}
          <div 
            className={`stake-selector-box ${isExpanded ? 'expanded' : ''}`}
            ref={selectorRef}
          >
            <div 
              className="stake-selector-header" 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="selector-current">
                <div className="current-icon-circle">
                  {cards.find(c => c.title === activeCategory)?.icon}
                </div>
                <span>{activeCategory}</span>
              </div>
              <ChevronDown className={`selector-chevron ${isExpanded ? 'rotated' : ''}`} />
            </div>

            <div className="stake-mini-cards-grid">
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  className={`stake-mini-card ${activeCategory === card.title ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(card.title);
                    setIsExpanded(false);
                  }}
                >
                  <div className="stake-icon-circle">
                    {card.icon}
                  </div>
                  <h4 className="stake-mini-title">{card.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stake-divider"></div>

        <div className="what-stakeholders-right">
          <h4 className="stake-label">OUR STAKEHOLDERS</h4>
          
          <h2 className="stake-main-title">{currentContent.title}</h2>
          
          <div className="stake-sub-section">
            <div className="stake-sub-header">
               <div className="sub-icon">🛠️</div>
               <h3>{currentContent.subHeader}</h3>
            </div>
            <div className="stake-description">
              {currentContent.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <button className="explore-btn">Explore {activeCategory}</button>
        </div>
      </div>
    </section>
  );
};

export default WhatStakeholders;
