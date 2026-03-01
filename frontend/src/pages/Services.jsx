import React from 'react';
import PageHero from '../components/PageHero';

const Services = () => {
  return (
    <div className="services-page">
      <PageHero title="Services" />
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Consulting, Innovation, and Execution solutions for our multi-stakeholder ecosystem.
        </p>
      </div>
    </div>
  );
};

export default Services;
