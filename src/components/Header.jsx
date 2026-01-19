import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="logo" style={{cursor: 'default'}}>
        <img src="/images/adcet.png" alt="Logo" />
      </a>
      <nav>
        <a href="#home" className="hit">Home</a>
        <a href="#about">About</a>
        <a href="#domains">Domains</a>
        <a href="#prizes">Prizes</a>
        <a href="#timeline">Timeline</a>
        <a href="#sponsors">Partners</a>
        <a href="#faq">FAQs</a>
      </nav>
    </header>
  );
};

export default Header;
