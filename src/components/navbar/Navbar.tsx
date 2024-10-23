'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <span className="sr-only">Open main menu</span>
            <svg className="navbar-toggle-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="navbar-links">
              <li>
                <Link href="/" className="navbar-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="navbar-link" aria-current="page">
                  Sobre mi
                </Link>
              </li>
              <li>
                <Link href="/projects" className="navbar-link" aria-current="page">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/skills" className="navbar-link" aria-current="page">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="/contact" className="navbar-link" aria-current="page">
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
