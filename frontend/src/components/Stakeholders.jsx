import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  GraduationCap, 
  Building2, 
  UserCircle, 
  Briefcase, 
  TrendingUp, 
  Laptop
} from 'lucide-react';
import './Stakeholders.css';

const Stakeholders = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeConnection, setActiveConnection] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 1024;

  const stakeholders = [
    { id: 'incubator', title: "Incubation Centres", pos: { x: 500, y: 350 } }, // Center Hub
    { id: 'freelancer', title: "Freelancers", pos: { x: 190, y: 180 } }, // Top Left
    { id: 'msme', title: "Startup / MSME", pos: { x: 500, y: 160 } }, // Top Mid
    { id: 'industry', title: "Institutes / Industry", pos: { x: 810, y: 180 } }, // Top Right
    { id: 'investor', title: "Investors", pos: { x: 810, y: 520 } }, // Bottom Right
    { id: 'students', title: "Students", pos: { x: 500, y: 540 } }, // Bottom Mid
    { id: 'service', title: "Service Providers", pos: { x: 190, y: 520 } }, // Bottom Left
  ];

  const connections = [
    // Mutual (Blue)
    { from: 'incubator', to: 'freelancer', type: 'mutual', desc: "Incubators provide specialized resources and guidance while freelancers offer flexible expertise to hub projects." },
    { from: 'incubator', to: 'msme', type: 'mutual', desc: "Incubators offer MSMEs workspace, mentorship, and funding access to accelerate growth." },
    { from: 'incubator', to: 'industry', type: 'mutual', desc: "Industries gain access to innovative technology and talent, while incubators receive corporate support and market insights." },
    { from: 'incubator', to: 'investor', type: 'mutual', desc: "Investors find vetted high-potential ventures, and incubators secure vital capital for their portfolio companies." },
    { from: 'incubator', to: 'students', type: 'mutual', desc: "Students get real-world exposure and internship opportunities, while incubators tap into fresh ideas and skillsets." },
    { from: 'incubator', to: 'service', type: 'mutual', desc: "Service providers gain a platform to reach growing businesses, and incubators ensure their startups have reliable professional support." },

    // Yellow Arrows (Benefit)
    { from: 'freelancer', to: 'msme', type: 'benefit', desc: "Freelancers provide cost-effective, specialized skills that MSMEs need for specific project milestones." },
    { from: 'msme', to: 'industry', type: 'benefit', desc: "Startups and MSMEs drive innovation and agility within larger industrial value chains." },
    { from: 'industry', to: 'investor', type: 'benefit', desc: "Established industries provide the stability and exit opportunities that attract strategic investors." },
    { from: 'investor', to: 'students', type: 'benefit', desc: "Investment in the ecosystem creates scholarship programs and advanced training facilities for students." },
    { from: 'students', to: 'service', type: 'benefit', desc: "The next generation of talent drives demand for modern digital products and professional services." },
    { from: 'service', to: 'freelancer', type: 'benefit', desc: "Product providers supply the essential tools and software that empower freelancers to work efficiently." },

    // Curved Benefit
    { from: 'freelancer', to: 'incubator', type: 'benefit', curve: -40, desc: "Freelancers contribute diverse expertise to the central hub's collective knowledge pool." },
    { from: 'industry', to: 'incubator', type: 'benefit', curve: 40, desc: "Corporate giants provide technical standards and industrial infrastructure support to the hub." },
    { from: 'service', to: 'incubator', type: 'benefit', curve: -40, desc: "Specialized service providers ensure the hub's ecosystem has a foundation of reliable professional resources." },
    { from: 'investor', to: 'incubator', type: 'benefit', curve: 40, desc: "Investors provide strategic guidance and networking power to elevate the hub's industry standing." },
  ];

  const getPath = (c) => {
    const fromNode = stakeholders.find(s => s.id === c.from);
    const toNode = stakeholders.find(s => s.id === c.to);
    if (!fromNode || !toNode) return "";

    const { x: x1, y: y1 } = fromNode.pos;
    const { x: x2, y: y2 } = toNode.pos;
    
    if (c.curve) {
      const midX = (x1 + x2) / 2 + c.curve;
      const midY = (y1 + y2) / 2 + c.curve;
      return `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;
    }
    return `M ${x1} ${y1} L ${x2} ${y2}`;
  };

  return (
    <section className="stakeholders-network-section">
      <div className="network-bg-overlay"></div>
      
      {/* Interaction Layer */}
      <div className="container network-animation-container">
        {!isMobile && (
          <svg className="network-svg-overlay" viewBox="0 0 1000 700">
            {connections.map((c, i) => {
              const fromName = stakeholders.find(s => s.id === c.from)?.title;
              const toName = stakeholders.find(s => s.id === c.to)?.title;
              const isActive = activeConnection === i;
              const color = c.type === 'mutual' ? "#3b82f6" : "#3b82f6";
              
              return (
                <g 
                  key={`connection-${i}`}
                  onMouseEnter={() => setActiveConnection(i)}
                  onMouseLeave={() => setActiveConnection(null)}
                  style={{ cursor: 'pointer' }}
                >
                   {/* Wide invisible path for easier hover */}
                   <path 
                     d={getPath(c)} 
                     fill="none" 
                     stroke="transparent" 
                     strokeWidth="30" 
                   />

                   {/* Active Highlight Path */}
                   {isActive && (
                     <motion.path
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 0.2 }}
                       d={getPath(c)}
                       fill="none"
                       stroke={color}
                       strokeWidth="15"
                       filter="blur(5px)"
                     />
                   )}
                   
                   {/* Animated Flow Pulse */}
                   <motion.circle 
                     r={isActive ? "6" : "4"} 
                     fill={color} 
                     filter="blur(2px)"
                     animate={{ scale: isActive ? 1.5 : 1 }}
                   >
                      <animateMotion dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" path={getPath(c)} />
                   </motion.circle>
                   
                   {/* Secondary pulse */}
                   <motion.circle r="2" fill="white">
                      <animateMotion dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" path={getPath(c)} begin="1s" />
                   </motion.circle>
                </g>
              );
            })}
          </svg>
        )}

        {/* Narrative Panel */}
        <div className={`narrative-panel ${activeConnection !== null ? 'is-visible' : ''}`}>
          {activeConnection !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="narrative-content"
            >
              <div className="narrative-header">
                <span className={`narrative-tag ${connections[activeConnection].type}`}>
                  {connections[activeConnection].type === 'mutual' ? 'Mutual Collaboration' : 'Strategic Benefit'}
                </span>
                <div className="narrative-path">
                  <strong>{stakeholders.find(s => s.id === connections[activeConnection].from)?.title}</strong>
                  <span className="path-arrow">→</span>
                  <strong>{stakeholders.find(s => s.id === connections[activeConnection].to)?.title}</strong>
                </div>
              </div>
              <p className="narrative-desc">{connections[activeConnection].desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
