import getCurrentYear from '@/util/timeManager';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <Link href="/" className="footer-logo">
              <Image src="/next.svg" className="footer-logo-image" alt="Flowbite Logo" width={180} height={38} />
              <span className="footer-logo-text">{process.env.APP_NAME}</span>
            </Link>
            <ul className="footer-links">
              <li>
                <Link href="/testimonials" className="footer-link-item">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/experience" className="footer-link-item">
                  Experiencia
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="footer-link-item">
                  Politica de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link-item">
                  Terminos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-social-icons">
            <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="footer-social-icon" />
            </Link>
            <Link href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <span className="sr-only">TikTok</span>
              <FaTiktok className="footer-social-icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/javier-plaza-sisqu%C3%A9s-b79367172/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="footer-social-icon" />
            </Link>
          </div>

          <hr className="footer-divider" />
          <span className="footer-copyright">
            © {getCurrentYear()}{' '}
            <Link href="https://github.com/JSisques" className="hover:underline">
              Made with 🖤 by JSisques
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
