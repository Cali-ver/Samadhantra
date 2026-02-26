import React, { useEffect, useRef } from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import './Blog.css';

const posts = [
  {
    id: 1,
    image: blog1,
    date: 'Jan 2024',
    author: 'Amit Sharma',
    title: 'How Ecosystem Collaboration Helps Build Scalable Solutions',
    href: '/blogs/ecosystem-collaboration',
  },
  {
    id: 2,
    image: blog2,
    date: 'Jan 2024',
    author: 'Rohit Malhotra',
    title: 'Why Demand–Supply Alignment Matters for Institutions',
    href: '/blogs/demand-supply-alignment',
  },
  {
    id: 3,
    image: blog3,
    date: 'Jan 2024',
    author: 'Sandeep Gupta',
    title: 'Turning Ideas into Outcomes with the Right Ecosystem Support',
    href: '/blogs/ideas-to-outcomes',
  },
];

const Blog = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('blog-card--visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <span className="blog-tag">OUR BLOGS</span>
          <h2 className="blog-title">
            Insights, Stories & Knowledge from<br />the Samadhantra Ecosystem
          </h2>
        </div>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className="blog-card"
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="blog-card__img-wrap">
                <img src={post.image} alt={post.title} className="blog-card__img" />
              </div>

              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span className="blog-card__meta-item">
                    <Clock size={16} />
                    {post.date}
                  </span>
                  <span className="blog-card__meta-item">
                    <User size={16} />
                    {post.author}
                  </span>
                </div>

                <h3 className="blog-card__heading">{post.title}</h3>

                <a href={post.href} className="blog-card__link">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
