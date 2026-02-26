import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stakeholders from '../components/Stakeholders';
import ValueProposition from '../components/ValueProposition';
import Why from '../components/Why';
import Blog from '../components/Blog';
import PreFooter from '../components/PreFooter';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Stakeholders />
      <ValueProposition />
      <Why />
      <Blog />
      <PreFooter />
    </>
  );
};

export default Home;
