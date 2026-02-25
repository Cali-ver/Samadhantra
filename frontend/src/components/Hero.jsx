import React, { useState, useEffect, useRef } from 'react';
import { Search, Volume2, VolumeX, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const slides = [
  {
    badge: "AI-ENABLED SMART SOLUTION",
    title: "Uniting Academia, Industry, & Startups",
    desc: "A single platform to collaborate, innovate, and address stakeholder needs through our advanced smart matching technology.",
    video: "https://www.samadhantra.online/public/website/assets/images/vedio/WhatsApp Video 2026-02-05 at 11.12.00 AM (1).mp4",
    startTime: 0
  },
  {
    badge: "INNOVATION HUB",
    title: "Samadhantra (Ai Enabled Smart Solution)",
    desc: (
      <div className="hero-slide-split">
        <div className="slide-col-left">
          <p className="summary-text">A Single platform uniting Academia, Industry, Startups and Professionals to collaborate and address their needs.</p>
          <div className="branding-definition">
            <span className="equation">Samadhantra = Samadhan (Solution) + Tantra (Frame work)</span>
          </div>
        </div>
        <div className="slide-col-right">
          <p className="detail-text">A unified digital platform that anyone can access by subscribing and posting their needs or requirements. An AI Powered matching engine then selects and connects the right stakeholders to meet those needs in a transparent, cost effective and efficient way.</p>
        </div>
      </div>
    ),
    video: "https://www.samadhantra.online/public/website/assets/images/vedio/WhatsApp Video 2026-02-05 at 11.12.00 AM (1).mp4",
    startTime: 10 // Simulated cut
  },
  {
    badge: "COLLABORATION PLATFORM",
    title: "Smart and Faster Discovery",
    desc: "Our AI matching engine selecting and connecting the right stakeholders to meet your needs in an efficient way.",
    video: "https://www.samadhantra.online/public/website/assets/images/vedio/WhatsApp Video 2026-02-05 at 11.12.00 AM (1).mp4",
    startTime: 20 // Simulated cut
  }
];

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count}</>;
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const toggleAudio = () => {
    const activeVideo = videoRefs.current[currentSlide];
    if (activeVideo) {
      if (isPlaying) {
        activeVideo.muted = true;
      } else {
        activeVideo.muted = false;
        activeVideo.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
  };

  return (
    <section className="hero-container">
      <AnimatePresence>
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="hero-background-wrapper"
        >
          <div className="hero-video-overlay"></div>
          <video 
            ref={el => videoRefs.current[currentSlide] = el}
            className="hero-video" 
            autoPlay 
            muted={!isPlaying} 
            loop 
            playsInline
            onLoadedMetadata={(e) => {
              e.target.currentTime = slides[currentSlide].startTime;
            }}
          >
            <source src={slides[currentSlide].video} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>

      <div className={`container hero-content ${currentSlide === 1 ? 'slide-full-layout' : ''}`}>
        <AnimatePresence mode='wait'>
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className={`hero-text ${currentSlide === 1 ? 'full-width' : ''}`}
          >
            <span className="badge">{slides[currentSlide].badge}</span>
            <h1 className={currentSlide === 1 ? 'title-large' : ''}>{slides[currentSlide].title}</h1>
            <div className="hero-description">{slides[currentSlide].desc}</div>
            
            <div className="hero-actions-container">
              <div className="hero-search">
                <input type="text" placeholder="What service are you looking for?" />
                <button className="btn btn-primary">
                  <Search size={20} />
                  <span>Search</span>
                </button>
              </div>

              <div className="hero-cta">
                <a href="/subscribe" className="btn btn-primary">Subscribe Now</a>
                <button className={`btn btn-audio ${isPlaying ? 'playing' : ''}`} onClick={toggleAudio}>
                  <div className="audio-icon">
                    {isPlaying ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </div>
                  <span>{isPlaying ? 'Stop Voice' : 'Listen to Voice'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {currentSlide !== 1 && (
          <div className="hero-stats">
            <div className="stat-card">
              <h3><CountUp end={500} />+</h3>
              <p>Startups</p>
            </div>
            <div className="stat-card">
              <h3><CountUp end={50} />+</h3>
              <p>Universities</p>
            </div>
            <div className="stat-card">
              <h3><CountUp end={200} />+</h3>
              <p>Partners</p>
            </div>
          </div>
        )}
      </div>

      <div className="hero-navigation">
        <button onClick={prevSlide} className="nav-arrow"><ChevronLeft size={24} /></button>
        <div className="nav-dots">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className={`nav-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => {
                setCurrentSlide(idx);
                setIsPlaying(false);
              }}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="nav-arrow"><ChevronRight size={24} /></button>
      </div>
    </section>
  );
};

export default Hero;
