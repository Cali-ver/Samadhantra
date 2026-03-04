import React from 'react';
import './ContactSection.css';
import contactIllustration from '../assets/contact-illustration.png';

const ContactSection = () => {
  return (
    <section className="cs-section">
      <div className="container cs-container">
        <div className="cs-content">
          <div className="cs-left">
            <span className="cs-badge">CONNECT WITH US</span>
            <h2 className="cs-title">Share Your Requirement, Get the Right Solution.</h2>
            <p className="cs-desc">
              Share your requirement, and Samadhantra will connect you with the right experts, 
              partners, or service providers—quickly and transparently.
            </p>

            <form className="cs-form">
              <div className="cs-form-group">
                <label>Name</label>
                <input type="text" placeholder="" />
              </div>
              <div className="cs-form-group">
                <label>Email</label>
                <input type="email" placeholder="" />
              </div>
              <div className="cs-form-group">
                <label>Mobile</label>
                <input type="tel" placeholder="" />
              </div>
              <div className="cs-form-group">
                <label>Subject</label>
                <input type="text" placeholder="" />
              </div>
              <div className="cs-form-group cs-full">
                <label>Message</label>
                <textarea rows="4"></textarea>
              </div>

              <div className="cs-form-terms">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  Accept <a href="/terms">Terms & Conditions</a> And <a href="/privacy">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className="cs-submit-btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="cs-right">
            <img src={contactIllustration} alt="Contact Illustration" className="cs-illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
