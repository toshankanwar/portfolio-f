import React, { useState, useEffect } from 'react';
import { personalInfo } from '../utils/data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          <span>T</span>oshan <span>K</span>anwar
        </a>

        {/* Hamburger Button: shown only on mobile and when menu is closed */}
        <div className="mobile-menu-icon">
          {!isMenuOpen && (
            <i className="fas fa-bars" onClick={toggleMenu}></i>
          )}
        </div>

        {/* Nav Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Close Button (only on mobile) */}
          <div className="nav-close-btn" onClick={closeMenu}>
            <i className="fas fa-times"></i>
          </div>

          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#education" onClick={closeMenu}>Education</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          background-color: transparent;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark);
        }

        .logo span {
          color: var(--primary);
        }

        .nav-menu ul {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-menu a {
          color: var(--dark);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-menu a:hover {
          color: var(--primary);
        }

        .mobile-menu-icon {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .nav-close-btn {
          display: none;
        }

        @media screen and (max-width: 768px) {
          .mobile-menu-icon {
            display: block;
            z-index: 1100;
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background-color: white;
            padding: 5rem 2rem 2rem;
            transition: all 0.3s ease;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-menu ul {
            flex-direction: column;
            gap: 1.5rem;
          }

          .nav-close-btn {
            display: block;
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--dark);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
