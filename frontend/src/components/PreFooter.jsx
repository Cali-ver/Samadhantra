import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './PreFooter.css';

const PreFooter = () => {
  return (
    <section className="prefooter-section">
      {/* Animated background blobs */}
      <div className="pf-blob pf-blob-1"></div>
      <div className="pf-blob pf-blob-2"></div>

      <div className="container prefooter-inner">
        {/* Left: Text block */}
        <div className="pf-text">
          <h2 className="pf-heading">
            See How Samadhantra Turns
            <span className="pf-highlight"> Requirements into Results</span>
          </h2>
          <p className="pf-desc">
            Samadhantra brings together startups, institutions, enterprises, and ecosystem
            partners to deliver outcomes through structured, transparent collaboration.
          </p>
        </div>

        {/* Right: CTA Button */}
        <div className="pf-action">
          <a href="#how-it-works" className="pf-btn">
            <span className="pf-btn-icon">
              <Play size={18} fill="currentColor" />
            </span>
            <span className="pf-btn-text">See How It Works</span>
            <span className="pf-btn-arrow">
              <ArrowRight size={18} />
            </span>
            {/* Ripple rings */}
            <span className="pf-ripple pf-ripple-1"></span>
            <span className="pf-ripple pf-ripple-2"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
