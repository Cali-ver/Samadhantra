import React from 'react';
import AboutHero from '../components/AboutHero';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '20px' }}>Our Mission & Vision</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          Samadhantra is a unified solution system designed to fulfil demand and supply for all stakeholders through a structured, transparent, and collaborative platform. Our goal is to bridge the gap between innovation and implementation.
        </p>
      </div>
    </div>
  );
};

export default About;
