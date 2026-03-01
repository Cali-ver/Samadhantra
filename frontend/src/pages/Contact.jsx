import React from 'react';
import PageHero from '../components/PageHero';

const Contact = () => {
  return (
    <div className="contact-page">
      <PageHero title="Contact Us" />
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Get in touch with us for any queries or collaborations. We are here to help you navigate 
          the Samadhantra ecosystem.
        </p>
      </div>
    </div>
  );
};

export default Contact;
