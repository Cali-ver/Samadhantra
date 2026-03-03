import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import OurStakeholder from '../components/ourStakeholder';
import StakeholderFeatures from '../components/StakeholderFeatures';

const Stakeholders = () => {
  useEffect(() => {
    document.title = "Stakeholders | Samadhantra";
  }, []);

  return (
    <div className="stakeholders-page">
      <PageHero title="Stakeholders" />
      <OurStakeholder />
      <StakeholderFeatures />
    </div>
  );
};

export default Stakeholders;
