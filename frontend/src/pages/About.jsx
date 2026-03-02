import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutSection from '../components/AboutSection';
import MissionVision from '../components/MissionVision';
import WhySamadhantra from '../components/WhySamadhantra';
import OurFounder from '../components/OurFounder';
import Honorary from '../components/Honorary';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutSection />
      <MissionVision />
      <WhySamadhantra />
      <OurFounder />
      <Honorary />
    </div>
  );
};



export default About;
