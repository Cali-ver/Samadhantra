import React from 'react';
import { Settings, Users, Share2, Layers } from 'lucide-react';
import './Why.css';

const Why = () => {
  const cards = [
    {
      icon: <Settings className="why-icon" />,
      title: "Unified Solution System",
      description: "One integrated platform that brings together demand creators and solution providers across sectors."
    },
    {
      icon: <Share2 className="why-icon" />,
      title: "Demand–Supply Alignment",
      description: "Structured matching of requirements with the right services, products, and partners for faster fulfilment."
    },
    {
      icon: <Users className="why-icon" />,
      title: "Multi-Stakeholder Ecosystem",
      description: "Designed for individuals, institutions, industry, government bodies, and service providers to collaborate seamlessly."
    },
    {
      icon: <Layers className="why-icon" />,
      title: "Transparent & Scalable Platform",
      description: "Built to ensure efficiency, accountability, and growth—supporting small needs to large-scale requirements."
    }
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-header">
          <h4 className="why-subtitle">WHY SAMADHANTRA</h4>
          <h2 className="why-title">A Unified Solution Ecosystem for Every Stakeholder</h2>
          <p className="why-description">
            Connecting requirements to real-world outcomes—efficiently, transparently, and at scale.
          </p>
        </div>

        <div className="why-grid">
          {cards.map((card, index) => (
            <div key={index} className="why-card">
              <div className="why-icon-wrapper">
                {card.icon}
              </div>
              <h3 className="why-card-title">{card.title}</h3>
              <p className="why-card-text">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
