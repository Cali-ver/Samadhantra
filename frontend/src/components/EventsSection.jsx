import React, { useState } from 'react';
import eventAudienceImg from '../assets/event-audience.jpg';
import { motion } from 'framer-motion';
import './EventsSection.css';

const categories = [
  'Awards Ceremony',
  'Brainstorming Sessions',
  'Round Table Discussions',
  'Conferences',
  'Seminars',
  'Meetings',
  'Recognition of Efforts & Contributions',
];

const eventsData = {
  
  'Brainstorming Sessions': [
    {
      title: 'Startup Growth & Networking Meet',
      description:
        'A structured networking engagement enabling startups, investors, and ecosystem stakeholders to connect effectively.',
      date: '25 Feb 2026',
      location: 'New Delhi',
      image: eventAudienceImg,
    },
  ],
  'Round Table Discussions': [
    {
      title: 'Policy & Innovation Roundtable',
      description:
        'Leaders from industry and government convene to shape policy frameworks driving sustainable innovation.',
      date: '10 Mar 2026',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    },
  ],
  Conferences: [
    {
      title: 'Samadhantra Tech Conference 2026',
      description:
        'A premier conference bringing together tech visionaries, startups and investors to explore future-ready solutions.',
      date: '20 May 2026',
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    },
  ],
  Seminars: [
    {
      title: 'Financial Literacy Seminar',
      description:
        'An in-depth seminar on financial planning, investment strategies and wealth management for entrepreneurs.',
      date: '5 Apr 2026',
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    },
  ],
  Meetings: [
    {
      title: 'Stakeholder Strategy Meeting',
      description:
        'Quarterly strategic alignment meeting for Samadhantra stakeholders to review goals and plan ahead.',
      date: '1 Mar 2026',
      location: 'Chennai',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    },
  ],
  'Recognition of Efforts & Contributions': [
    {
      title: 'Champions of Change Felicitation',
      description:
        'Honouring individuals and organisations who have made an exceptional impact on communities and ecosystems.',
      date: '30 Mar 2026',
      location: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80',
    },
  ],
};

const EventsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[1]); // default: Brainstorming

  const featuredEventTitle = 'Startup Growth & Networking Meet';
  const currentEvents = (eventsData[activeCategory] || []).filter(
    (ev) => ev.title !== featuredEventTitle
  );

  return (
    <section className="es-section">
      {/* background blobs */}
      <div className="es-blob es-blob-1" />
      <div className="es-blob es-blob-2" />

      <div className="container es-container">
        {/* ── Section header ── */}
        <motion.div
          className="es-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         
          <h2 className="es-title">Events & Engagements</h2>
          <p className="es-subtitle">
           Where ideas connect, collaborations grow, and ecosystems evolve.
          </p>
        </motion.div>

        {/* ── Body ── */}
        <div className="es-body">
          {/* Left – category list */}
          <motion.aside
            className="es-sidebar"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="es-sidebar-heading">Event Categories</h3>
            <ul className="es-cat-list">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={`es-cat-btn${activeCategory === cat ? ' active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </motion.aside>

          {/* Right – event card(s) */}
          <div className="es-content">
            {/* Featured Banner */}
            <motion.div 
              className="es-featured-banner"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="es-fb-image-container">
                <img src={eventAudienceImg} alt="Featured Event" className="es-fb-image" />
                <div className="es-fb-overlay" />
              </div>
              <div className="es-fb-content">
                <span className="es-fb-badge">Featured Event</span>
                <h3 className="es-fb-title">Startup Growth & Networking Meet</h3>
                <p className="es-fb-desc">
                  Join us for our upcoming flagship networking engagement, where startups, investors, and industry leaders shape the future of innovation.
                </p>
                <div className="es-fb-footer">
                  <div className="es-fb-meta">
                    <span>📅 25 Feb 2026</span>
                    <span>📍 New Delhi</span>
                  </div>
                  <a href="/contact" className="es-fb-btn">Reserve Your Spot</a>
                </div>
              </div>
            </motion.div>

            {currentEvents.length > 0 && (
              <>
                
                <div className="es-cards">
                  {currentEvents.map((ev, idx) => (
                    <motion.div
                      key={idx}
                      className="es-card"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                      whileHover={{ y: -6, transition: { duration: 0.22 } }}
                    >

                      {/* shimmer */}
                      <div className="es-shimmer" />
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
