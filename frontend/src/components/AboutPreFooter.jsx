import React, { useState } from 'react';
import './AboutPreFooter.css';

const AboutPreFooter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log('Subscribing:', email);
        alert('Thank you for subscribing!');
        setEmail('');
    };

    return (
        <section className="about-prefooter">
            <div className="apf-shape apf-shape-top"></div>
            <div className="apf-shape apf-shape-bottom"></div>

            <div className="container">
                <div className="apf-content">
                    <span className="apf-label">NEWSLETTER</span>
                    <h2 className="apf-title">Join the Samadhantra Newsletter</h2>
                    <p className="apf-desc">
                        Get ecosystem insights, collaboration opportunities, platform updates, and stories
                        from startups, institutions, and partners—straight to your inbox.
                    </p>

                    <form className="apf-form" onSubmit={handleSubmit}>
                        <div className="apf-input-group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="apf-input"
                            />
                        </div>
                        <button type="submit" className="apf-btn">
                            Subscribe to Updates
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AboutPreFooter;
