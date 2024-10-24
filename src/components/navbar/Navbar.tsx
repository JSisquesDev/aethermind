'use client';

import Link from 'next/link';
import React from 'react';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="navbar-logo">
            <img src="https://flowbite.com/docs/images/logo.svg" className="navbar-logo-image" alt="Flowbite Logo" />
            <span className="navbar-logo-text">Aethermind</span>
          </Link>
          <button onClick={toggleMenu} type="button" className="navbar-toggle" aria-controls="navbar-default" aria-expanded={isMenuOpen}>
            <span className="sr-only">Abrir menu principal</span>
            <FaBars className="navbar-toggle-icon" />
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="navbar-links">
              <li>
                <Link href="/" className="navbar-link" aria-current="page" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="navbar-link" aria-current="page" onClick={closeMenu}>
                  Sobre mi
                </Link>
              </li>
              <li>
                <Link href="/projects" className="navbar-link" aria-current="page" onClick={closeMenu}>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/skills" className="navbar-link" aria-current="page" onClick={closeMenu}>
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="/contact" className="navbar-link" aria-current="page" onClick={closeMenu}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
