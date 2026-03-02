import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutSection from '../components/AboutSection';
import MissionVision from '../components/MissionVision';
import WhySamadhantra from '../components/WhySamadhantra';
import OurFounder from '../components/OurFounder';
import Honorary from '../components/Honorary';
import Core from '../components/Core';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import Solution from '../components/Solution';
import AboutPreFooter from '../components/AboutPreFooter';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutSection />
      <MissionVision />
      <WhySamadhantra />
      <OurFounder />
      <Honorary />
      <Core />
      <Testimonial />
      <FAQ />
      <Solution />
      <AboutPreFooter />
    </div>
  );
};



export default About;
