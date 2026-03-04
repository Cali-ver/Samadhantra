import React from 'react';
import './ContactMap.css';

const ContactMap = () => {
  return (
    <section className="cm-section">
      <div className="cm-container-flex-full">
        {/* Info Card - Now separate */}
        <div className="cm-info-card">
          <div className="cm-info-item">
            <div className="cm-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <div className="cm-text-wrap">
              <h3>Main Office</h3>
              <p>Bengaluru Karnataka Jnanajyothi Nagar, M. Shivananda Block, Ullal Main Road, Mallathahalli, Bangalore, Karnataka 560056</p>
            </div>
          </div>

          <div className="cm-info-item">
            <div className="cm-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <div className="cm-text-wrap">
              <h3>Branch office</h3>
              <p>Second Floor, Mansarovar Complex, Shivaji Nagar Bhopal, Madhya Pradesh</p>
            </div>
          </div>

          <div className="cm-info-item">
            <div className="cm-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="cm-text-wrap">
              <h3>Email address</h3>
              <p>Email : info@samadhantra.com</p>
            </div>
          </div>

          <div className="cm-info-item">
            <div className="cm-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="cm-text-wrap">
              <h3>Our phone</h3>
              <p>Call (01) : +(91) 6232912441</p>
              <p>Call (02) : +(91) 9644553196</p>
            </div>
          </div>
        </div>

        {/* Map - Now sibling */}
        <div className="cm-map-wrapper">
          <iframe
            title="Google Map"
            className="cm-map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.76567554!2d77.5029!3d12.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzM2LjAiTiA3N8KwMzAnMTAuNCJF!5e0!3m2!1sen!2sin!4v1709531400000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
