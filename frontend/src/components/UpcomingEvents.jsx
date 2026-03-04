import React from 'react';
import { motion } from 'framer-motion';
import './UpcomingEvents.css';

import event1 from '../assets/events/event-1.png';
import event2 from '../assets/events/event-2.png';

const upcomingEvents = [
  {
    id: 1,
    title: 'Startup Growth Bootcamp',
    description: 'Scale your startup with expert mentoring & proven strategies.',
    date: '2 March 2026',
    category: 'Workshop',
    image: event1,
    color: '#0369a1' // Deep blue for Workshop
  },
  {
    id: 2,
    title: 'Funding & Investor Connect',
    description: 'Interact with investors and explore funding opportunities.',
    date: '10 March 2026',
    category: 'Webinar',
    image: event2,
    color: '#10b981' // Emerald for Webinar
  }
];

const UpcomingEvents = () => {
  return (
    <section className="ue-section">
      <div className="container">
        <div className="ue-header">
          <span className="ue-badge">UPCOMING EVENTS</span>
          <h2 className="ue-title">Join Our Latest Events</h2>
          <p className="ue-subtitle">Learn, connect & grow with industry experts</p>
        </div>

        <div className="ue-grid">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="ue-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="ue-card-img-wrap">
                <img src={event.image} alt={event.title} className="ue-card-img" />
                <span className="ue-card-category" style={{ backgroundColor: event.color }}>
                  {event.category}
                </span>
              </div>
              <div className="ue-card-body">
                <h3 className="ue-card-title">{event.title}</h3>
                <p className="ue-card-desc">{event.description}</p>
                <div className="ue-card-footer">
                  <span className="ue-date">
                    <span className="ue-date-icon">📅</span> {event.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
