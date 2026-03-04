import React from 'react';
import PageHero from '../components/PageHero';
import EventsSection from '../components/EventsSection';
import UpcomingEvents from '../components/UpcomingEvents';
import PastEvents from '../components/PastEvents';

const Events = () => {
  return (
    <div className="events-page">
      <PageHero title="Events" />
      <div className="container" style={{ padding: '60px 0 20px', textAlign: 'center' }}>
       
      </div>
      <EventsSection />
      <UpcomingEvents />
      <PastEvents />
    </div>
  );
};

export default Events;
