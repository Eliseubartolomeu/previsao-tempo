import './style.css'

import { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Chamada inicial ao carregar a página
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">ElisTime</h1>
        </a>

      </div>
    </header>
  );
}

export default Header;
