import React from 'react';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';
import './ValueProposition.css';

const ValueProposition = () => {
  return (
    <section className="value-prop-container">
      <div className="container">
        <div className="value-prop-content">
          <div className="value-prop-text">
            <span className="subtitle">WHY CHOOSE US</span>
            <h2>Where Requirements Turn into Results</h2>
            <p>
              Samadhantra is not just a platform—it is a system that enables collaboration, trust, and sustainable outcomes across sectors.
            </p>
            
            <div className="prop-list">
              <div className="prop-item">
                <div className="prop-icon"><Target size={24} /></div>
                <div>
                  <h4>Requirement Discovery</h4>
                  <p>We clearly identify and validate needs to ensure the right problem is being solved.</p>
                </div>
              </div>
              <div className="prop-item">
                <div className="prop-icon"><TrendingUp size={24} /></div>
                <div>
                  <h4>Right Partner Matching</h4>
                  <p>We connect requirements with the most relevant technology and ecosystem partners.</p>
                </div>
              </div>
              <div className="prop-item">
                <div className="prop-icon"><ShieldCheck size={24} /></div>
                <div>
                  <h4>Outcome-Driven Delivery</h4>
                  <p>We ensure solutions are executed efficiently with measurable and scalable outcomes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="value-prop-image">
            <div className="image-stack">
              <img src="https://www.samadhantra.online/public/website/assets/images/about-img.png" alt="Innovation" className="img-main" />
              <div className="experience-badge">
                <span className="number">AI</span>
                <span className="text">Powered Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
