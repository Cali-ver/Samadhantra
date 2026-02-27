import React from 'react';
import './Partners.css';
import grownidhiLogo from '../assets/grownidhi_logo.png';
import aapkaInsuranceLogo from '../assets/aapka_insurance_logo.png';
import teknowxaLogo from '../assets/teknowxa_logo.png';
import tpcLogo from '../assets/tpc_logo.png';
import fintecheduLogo from '../assets/fintechedu_logo.png';

const GrowNidhiLogo = () => (
  <div className="logo-box grow-nidhi-img">
    <img src={grownidhiLogo} alt="Grow Nidhi" className="partner-img-logo" />
  </div>
);

const AapkaInsuranceLogo = () => (
  <div className="logo-box aapka-insurance-img">
    <img src={aapkaInsuranceLogo} alt="Aapka Insurance" className="partner-img-logo" />
  </div>
);

const TeknowxaLogo = () => (
  <div className="logo-box teknowxa-img">
    <img src={teknowxaLogo} alt="Teknowxa" className="partner-img-logo" />
  </div>
);

const TPCLogo = () => (
  <div className="logo-box tpc-img">
    <img src={tpcLogo} alt="TPC" className="partner-img-logo" />
  </div>
);

const FintechEduLogo = () => (
  <div className="logo-box fintechedu-img">
    <img src={fintecheduLogo} alt="FintechEdu" className="partner-img-logo" />
  </div>
);

const Partners = () => {
  const logos = [
    <a href="https://grownidhi.com/" target="_blank" rel="noopener noreferrer" className="partner-link">
      <GrowNidhiLogo />
    </a>,
    <AapkaInsuranceLogo />,
    <a href="https://teknowxa.com/" target="_blank" rel="noopener noreferrer" className="partner-link">
      <TeknowxaLogo />
    </a>,
    <a href="https://tpcportacabin.com/" target="_blank" rel="noopener noreferrer" className="partner-link">
      <TPCLogo />
    </a>,
    <a href="https://fintechedu.in/" target="_blank" rel="noopener noreferrer" className="partner-link">
      <FintechEduLogo />
    </a>
  ];

  // Duplicate for seamless infinite scroll
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="partners-container">
      <div className="partners-track">
        {allLogos.map((Logo, index) => (
          <div key={index} className="partner-logo-wrapper">
            {Logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
