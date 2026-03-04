import React from 'react';
import './BlogCards.css';

// Import existing and new blog images
import blog1 from '../assets/blog-1.png';
import blog2 from '../assets/blog-2.png';
import blog3 from '../assets/blog-3.png';
import blog4 from '../assets/blog-4.png';
import blog5 from '../assets/blog-5.png';
import blog6 from '../assets/blog-6.png';

const blogData = [
  {
    image: blog1,
    date: 'Jan 24, 2026',
    author: 'Ramesh Kumar Khare',
    title: 'How Ecosystem Collaboration Helps Build Scalable Solutions'
  },
  {
    image: blog2,
    date: 'Jan 24, 2026',
    author: 'Rakesh Kumar Gupta',
    title: 'Why Demand–Supply Alignment Matters for Institutions'
  },
  {
    image: blog3,
    date: 'Jan 26, 2026',
    author: 'Priyanka Sarathe',
    title: 'From Requirement to Result: Inside a Multi-Stakeholder Platform'
  },
  {
    image: blog4,
    date: 'Jan 27, 2026',
    author: 'Ramesh Kumar Khare',
    title: 'Turning Ideas into Outcomes with the Right Ecosystem Support'
  },
  {
    image: blog5,
    date: 'Jan 27, 2026',
    author: 'Rakesh Kumar Gupta',
    title: 'Why Connected Stakeholders Shape the Future of Digital Solutions'
  },
  {
    image: blog6,
    date: 'Jan 27, 2026',
    author: 'Priyanka Sarathe',
    title: 'The Power of Multi-Stakeholder Platforms in the Digital Economy'
  }
];

const BlogCards = () => {
  return (
    <section className="bc-section">
      <div className="container">
        <div className="bc-header">
          <span className="bc-badge">OUR BLOGS</span>
          <h2 className="bc-main-title">
            News, Stories & Knowledge for<br />Every Stakeholder
          </h2>
        </div>

        <div className="bc-grid">
          {blogData.map((blog, index) => (
            <div className="bc-card" key={index}>
              <div className="bc-img-wrap">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="bc-meta">
                <span className="bc-date">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  {blog.date}
                </span>
                <span className="bc-author">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  {blog.author}
                </span>
              </div>
              <h3 className="bc-title">{blog.title}</h3>
              <a href="#" className="bc-read-more">Read more</a>
            </div>
          ))}
        </div>

        <div className="bc-pagination">
          <button className="bc-pag-btn bc-prev">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="bc-pag-num active">1</button>
          <button className="bc-pag-num">2</button>
          <button className="bc-pag-num">3</button>
          <button className="bc-pag-btn bc-next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
