import React from "react";
import { 
  Phone, 
  Mail, 
  Globe, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react";
import "./Topbar.css";

const Topbar = () => {
  const news = [
    "S$ 6 bn in 2022 is projected to surpass US$ 13 bn by 2026: Gajendra Singh Shekhawat",
    "Samadhantra Innovation Platform: Uniting Academia, Industry, and Startups.",
    "Discover new opportunities in MSME and Startup incubation.",
  ];

  return (
    <div className="top-ticker-master">
      {/* 1. Green Section - Countdown/Meta */}
      <div className="ticker-section ticker-meta">
         FICCI@100 : 407 days to go
      </div>

      {/* 2. Orange Section - Scrolling Ticker */}
      <div className="ticker-section ticker-news">
        <div className="ticker-scroll-container">
          <div className="ticker-scroll-content">
            {news.map((item, index) => (
              <span key={index} className="ticker-news-item">{item}</span>
            ))}
            {/* Loop duplication */}
            {news.map((item, index) => (
              <span key={`dup-${index}`} className="ticker-news-item">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Red-Orange Section - Contact */}
      <div className="ticker-section ticker-contact-links">
        <div className="contact-item">
          <Phone size={14} />
          <Mail size={14} />
          <span className="contact-text">Contact</span>
        </div>
        <div className="contact-item globe-icon">
          <Globe size={16} />
        </div>
      </div>

      {/* 4. Gold Section - Social */}
      <div className="ticker-section ticker-social">
        <Twitter size={14} />
        <Facebook size={14} />
        <Instagram size={14} />
        <Linkedin size={14} />
        <Youtube size={14} />
        <span className="social-b">B</span>
      </div>
    </div>
  );
};

export default Topbar;
