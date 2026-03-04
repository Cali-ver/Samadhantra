import React from 'react';
import { motion } from 'framer-motion';
import './PastEvents.css';

import pastEvent1 from '../assets/past-events/past-event-1.jpg';
import pastEvent2 from '../assets/past-events/past-event-2.jpg';

const pastEventsData = [
  {
    id: 1,
    title: 'MESTA State Level Conference',
    description: 'State level conference of Maharashtra English School Trustees Association held successfully with participation from trustees & education leaders.',
    location: 'Shirdi, Maharashtra',
    date: 'JAN 31',
    image: pastEvent1,
    status: 'Event Closed'
  },
  {
    id: 2,
    title: 'MESTA Education Leadership Meet',
    description: 'A successful education conference focused on collaboration, innovation and future growth of English medium schools.',
    location: 'Shirdi, Maharashtra',
    date: 'JAN 31',
    image: pastEvent2,
    status: 'Event Closed'
  }
];

const PastEvents = () => {
  return (
    <section className="pe-section">
      <div className="container">
        <h2 className="pe-main-title">Past Events</h2>
        
        <div className="pe-grid">
          {pastEventsData.map((event, index) => (
            <motion.div
              key={event.id}
              className="pe-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="pe-card-img-wrap">
                <img src={event.image} alt={event.title} className="pe-card-img" />
                <div className="pe-card-badges">
                  <span className="pe-badge-date">{event.date}</span>
                  <span className="pe-badge-status">Past Event</span>
                </div>
              </div>
              
              <div className="pe-card-body">
                <h3 className="pe-card-title">{event.title}</h3>
                <p className="pe-card-desc">{event.description}</p>
                
                <div className="pe-card-footer">
                  <div className="pe-location">
                    <span className="pe-location-icon">📍</span>
                    <span className="pe-location-text">{event.location}</span>
                  </div>
                  <div className="pe-status-tag">{event.status}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
