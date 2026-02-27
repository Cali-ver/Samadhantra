import React from 'react';
import './whatWeDo.css';
import wwdImg from '../assets/what_we_do_v2.jpg';

const WhatWeDo = () => {
  const steps = [
    {
      title: "Requirement Discovery",
      description: "We clearly identify and validate needs to ensure the right problem is being solved."
    },
    {
      title: "Right Partner Matching",
      description: "We connect requirements with the most relevant technology, service, and ecosystem partners."
    },
    {
      title: "Outcome - Driven Delivery",
      description: "We ensure solutions are executed efficiently with measurable and scalable outcomes."
    }
  ];

  return (
    <section className="what-we-do-section">
      <div className="what-we-do-container">
        <div className="what-we-do-content">
          <h4 className="wwd-subtitle">WHAT WE DO</h4>
          <h2 className="wwd-title">We enable solutions by connecting needs with the right partners</h2>
          
          <div className="wwd-description">
            <p>
              Samadhantra is not just a service provider—we are a unified solution ecosystem. We help startups, MSMEs, institutions, and enterprises identify their requirements and connect with the right technology, service providers, talent, and partners through a structured and transparent process.
            </p>
            <p>
              Our approach reduces complexity, improves efficiency, and ensures solutions are planned, executed, and delivered with measurable outcomes.
            </p>
          </div>

          <ul className="wwd-list">
            {steps.map((step, index) => (
              <li key={index} className="wwd-list-item">
                <div className="wwd-bullet"></div>
                <div className="wwd-item-text">
                  <h3 className="wwd-item-title">{step.title}</h3>
                  <p className="wwd-item-description">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="wwd-actions">
            <button className="read-more-btn">Read more</button>
          </div>
        </div>
        
        {/* Placeholder for right side graphic/image if needed in future */}
        <div className="what-we-do-visual">
          <div className="wwd-image-wrapper">
            <img src={wwdImg} alt="What we do" className="wwd-main-img" />
            <div className="wwd-img-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
