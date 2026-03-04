import React from 'react';
import PageHero from '../components/PageHero';
import BlogCards from '../components/BlogCards';

const Blogs = () => {
  return (
    <div className="blogs-page">
      <PageHero title="Blogs" />
      <BlogCards />
    </div>
  );
};

export default Blogs;
