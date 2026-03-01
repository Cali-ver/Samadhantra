import React from 'react';
import PageHero from '../components/PageHero';

const Stakeholders = () => {
  return (
    <div className="stakeholders-page">
      <PageHero title="Stakeholders" />
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Discover our diverse network of startups, institutions, industry partners, and students.
        </p>
      </div>
    </div>
  );
};

export default Stakeholders;
