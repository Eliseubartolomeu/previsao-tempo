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

  //Chamando o menu  mobile
  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle') as HTMLElement | null;
    const body = document.querySelector('body');

    function mobileNavToggle() {
      body?.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn?.classList.toggle('bi-list');
      mobileNavToggleBtn?.classList.toggle('bi-x');
    }

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
    }

    const navLinks = document.querySelectorAll('#navmenu a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (body?.classList.contains('mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    return () => {
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
      }

      navLinks.forEach((link) => {
        link.removeEventListener('click', mobileNavToggle);
      });
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

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#inicio" className="active">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <a href="#" className='btn btn-primary'>Entrar</a>
        <a href="#" className='btn border-primary'>Registrar-se</a>
      </div>
      <div className='bg-header'></div>
    </header>
  );
}

export default Header;
