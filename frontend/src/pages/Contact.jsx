import PageHero from '../components/PageHero';
import ContactSection from '../components/ContactSection';
import ContactMap from '../components/ContactMap';

const Contact = () => {
  return (
    <div className="contact-page">
      <PageHero title="Contact Us" />
      <ContactSection />
      <ContactMap />
    </div>
  );
};

export default Contact;
