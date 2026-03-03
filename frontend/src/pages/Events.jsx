import React from 'react';
import PageHero from '../components/PageHero';
import EventsSection from '../components/EventsSection';

const Events = () => {
  return (
    <div className="events-page">
      <PageHero title="Events" />
      <div className="container" style={{ padding: '60px 0 20px', textAlign: 'center' }}>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Stay updated with the latest innovation events and collaborative sessions.
        </p>
      </div>
      <EventsSection />
    </div>
  );
};

export default Events;
