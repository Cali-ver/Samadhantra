import React from 'react';
import PageHero from '../components/PageHero';

const Events = () => {
  return (
    <div className="events-page">
      <PageHero title="Events" />
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Stay updated with the latest innovation events and collaborative sessions.
        </p>
      </div>
    </div>
  );
};

export default Events;
