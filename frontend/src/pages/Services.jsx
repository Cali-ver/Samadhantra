import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import OurServices from '../components/OurServices';

const Services = () => {
  useEffect(() => {
    document.title = "Services | Samadhantra";
  }, []);

  return (
    <div className="services-page">
      <PageHero title="Services" />
      <OurServices />
    </div>
  );
};

export default Services;
