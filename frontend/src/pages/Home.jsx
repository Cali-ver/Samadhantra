import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stakeholders from '../components/Stakeholders';
import Value from '../components/Value';
import WhatStakeholders from '../components/whatStakeholders';
import WhatWeDo from '../components/whatWeDo';
import Why from '../components/Why';
import Partners from '../components/Partners';
import Blog from '../components/Blog';
import Testimonial from '../components/Testimonial';
import PreFooter from '../components/PreFooter';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Stakeholders />
      <WhatStakeholders />
      <Value />
      <WhatWeDo />
      <Partners />
      <Why />
      <Blog />
      <Testimonial />
      <PreFooter />
    </>
  );
};

export default Home;
