import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Domains', href: '#domains' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Rules', href: '#rules' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQs', href: '#faq' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/images/adcet.png" alt="ADCET" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = 'ADCET'; }} />
        </div>

        <button
          className={`navbar-menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="navbar-link"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
