import { useState } from 'react';
import { Home, Info, Target, Trophy, Clock, FileText, Handshake, HelpCircle } from 'lucide-react';

const DockNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { Icon: Home, label: 'Home', href: '#home' },
    { Icon: Info, label: 'About', href: '#about' },
    { Icon: Target, label: 'Domains', href: '#domains' },
    { Icon: Trophy, label: 'Prizes', href: '#prizes' },
    { Icon: Clock, label: 'Timeline', href: '#timeline' },
    { Icon: FileText, label: 'Rules', href: '#rules' },
    { Icon: Handshake, label: 'Partners', href: '#sponsors' },
    { Icon: HelpCircle, label: 'FAQs', href: '#faq' },
  ];

  const getScale = (index) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.6;
    if (distance === 1) return 1.3;
    if (distance === 2) return 1.1;
    return 1;
  };

  return (
    <div className="dock-nav-container">
      <div className="magic-dock">
        <div className="dock-logo-item">
          <img src="/img/adcet.png" alt="ADCET" />
        </div>
        
        <div className="dock-divider"></div>
        
        <div className="dock-nav-items">
          {navItems.map((item, index) => {
            const { Icon, label, href } = item;
            return (
              <div key={index} className="dock-item-container">
                <a
                  href={href}
                  className="magic-dock-item"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    transform: `scale(${getScale(index)}) translateY(${hoveredIndex === index ? '-8px' : '0'})`,
                  }}
                  aria-label={label}
                >
                  <Icon className="dock-icon" size={20} strokeWidth={1.5} />
                </a>
                
                {hoveredIndex === index && (
                  <div className="dock-tooltip-label">
                    {label}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DockNav;
