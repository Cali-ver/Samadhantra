import React from 'react';
import { Lightbulb, Shield, Users, Activity } from 'lucide-react';
import './Value.css';

const Value = () => {
  const stakeholderGroups = [
    {
      title: "For Individuals & Demand Creators",
      className: "green-card",
      points: [
        "Single platform to raise needs and access verified solutions",
        "Faster fulfilment with reduced effort and uncertainty",
        "Transparent process and trusted ecosystem"
      ]
    },
    {
      title: "For Service & Product Providers",
      className: "blue-card",
      points: [
        "Direct access to real, verified demand",
        "Opportunity to serve diverse sectors and stakeholders",
        "Reduced customer acquisition cost and higher conversion"
      ]
    },
    {
      title: "For Institutions & Organizations",
      className: "purple-card",
      points: [
        "Structured mechanism to source solutions efficiently",
        "Collaboration with multiple vendors and partners",
        "Improved governance, monitoring, and outcome tracking"
      ]
    },
    {
      title: "For Government & Public Sector",
      className: "purple-card",
      points: [
        "Centralized demand–supply coordination system",
        "Increased transparency, efficiency, and accountability",
        "Support for policy execution, programs, and public initiatives"
      ]
    },
    {
      title: "For Academia, NGOs & CSR Bodies",
      className: "blue-card",
      points: [
        "Platform to align resources with societal and institutional needs",
        "Collaboration with industry and government stakeholders",
        "Enhanced impact through coordinated solution delivery"
      ]
    },
    {
      title: "For Industry & Enterprises",
      className: "green-card",
      points: [
        "On-demand access to services, talent, vendors, and partners",
        "Efficient matching aligned with business requirements",
        "Scalable platform for continuous engagement"
      ]
    }
  ];

  return (
    <section className="value-section">
      <div className="value-container">
        <div className="value-header">
          <h2 className="value-title">Our Value Proposition</h2>
          <p className="value-description">
            Samadhantra unites diverse stakeholders on a single platform to turn requirements <br className="wwd-br" />
            into structured, scalable, and measurable outcomes.
          </p>
        </div>

        <div className="value-grid stake-grid">
          {stakeholderGroups.map((group, index) => (
            <div key={index} className={`stake-card ${group.className}`}>
              <div className="stake-card-header">
                <h3 className="stake-card-title">{group.title}</h3>
              </div>
              <div className="stake-card-body">
                <ul className="stake-list">
                  {group.points.map((point, idx) => (
                    <li key={idx} className="stake-list-item">
                      <span className="stake-dot"></span>
                      <p className="stake-text">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
