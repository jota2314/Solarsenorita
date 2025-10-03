'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaInstagram, FaEnvelope, FaPhone, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
  background-color: #121212;
  color: white;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding: 1.25rem 1.5rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  img {
    height: 100px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    img {
      height: 80px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 70px;
    }
  }
`;

const Navigation = styled.nav<{ $isOpen: boolean }>`
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(18, 18, 18, 0.95);
    z-index: 100;
    padding: 5rem 2rem;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    @media (max-width: 480px) {
      gap: 1.5rem;
    }

    li {
      position: relative;

      @media (max-width: 768px) {
        margin-bottom: 0.5rem;
      }

      a, .dropdown-toggle {
        color: white;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        font-size: 1.3rem;
        letter-spacing: 0.5px;
        display: flex;
        align-items: center;
        gap: 0.3rem;
        cursor: pointer;

        @media (max-width: 768px) {
          font-size: 1.5rem;
        }

        &:hover {
          color: #ff69b4;
          transform: translateY(-2px);
        }

        svg {
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }
      }

      &:hover .dropdown-menu {
        display: block;
        opacity: 1;
        visibility: visible;

        @media (max-width: 768px) {
          position: static;
          box-shadow: none;
          background: transparent;
        }
      }

      &:hover .dropdown-toggle svg {
        transform: rotate(180deg);
      }
    }
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: calc(100% - 0.5rem);
  left: 0;
  background-color: #1a1a1a;
  min-width: 320px;
  padding: 1.5rem 0;
  padding-top: 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    position: static;
    display: none;
    box-shadow: none;
    background: transparent;
    margin-top: 1rem;
    min-width: 100%;
    padding-top: 1.5rem;
  }

  a {
    display: block;
    padding: 1rem 1.5rem;
    color: #d1d5db;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    letter-spacing: 0.3px;

    &:hover {
      background-color: rgba(255, 105, 180, 0.1);
      color: #ff69b4;
      padding-left: 2rem;
      transform: none;
    }

    @media (max-width: 768px) {
      padding: 0.5rem 0;
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;

const DropdownItem = styled.li`
  &:hover .dropdown-menu,
  .dropdown-menu:hover {
    display: block;
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    &:hover .dropdown-menu {
      display: block;
    }
  }
`;

const MenuToggle = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
    position: ${({ $isOpen }) => ($isOpen ? 'fixed' : 'relative')};
    right: ${({ $isOpen }) => ($isOpen ? '2rem' : '0')};
    top: ${({ $isOpen }) => ($isOpen ? '1.5rem' : '0')};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 0.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }

  .phone {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.05rem;

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }

  .social-icons {
    display: flex;
    gap: 1rem;

    a {
      color: white;
      font-size: 1.4rem;
      transition: color 0.3s ease;

      &:hover {
        color: #ff69b4;
      }
    }
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <HeaderContainer>
      <Logo>
        <Link href="/">
          <img src="/Untitled design (25).png" alt="Solar Señorita Logo" />
        </Link>
      </Logo>

      <MenuToggle $isOpen={isMenuOpen} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuToggle>

      <Navigation $isOpen={isMenuOpen}>
        <ul>
          <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>

          <DropdownItem>
            <span className="dropdown-toggle">
              Residential Solar <FaChevronDown />
            </span>
            <DropdownMenu className="dropdown-menu">
              <Link href="/residential-solar-faq" onClick={() => setIsMenuOpen(false)}>Residential Solar FAQ</Link>
              <Link href="/residential-solar-incentives" onClick={() => setIsMenuOpen(false)}>Residential Solar Incentives</Link>
              <Link href="/residential-solar-panels-products" onClick={() => setIsMenuOpen(false)}>Residential Solar Panels & Products</Link>
              <Link href="/residential-solar-financing" onClick={() => setIsMenuOpen(false)}>Residential Solar Energy Financing</Link>
              <Link href="/massachusetts-towns-cities" onClick={() => setIsMenuOpen(false)}>Towns & Cities We Support</Link>
            </DropdownMenu>
          </DropdownItem>

          <DropdownItem>
            <span className="dropdown-toggle">
              Commercial Solar <FaChevronDown />
            </span>
            <DropdownMenu className="dropdown-menu">
              <Link href="/commercial-solar-faq" onClick={() => setIsMenuOpen(false)}>Commercial Solar FAQ</Link>
              <Link href="/commercial-solar-incentives" onClick={() => setIsMenuOpen(false)}>Commercial Solar Incentives</Link>
              <Link href="/commercial-solar-panels-products" onClick={() => setIsMenuOpen(false)}>Commercial Solar Panels & Products</Link>
              <Link href="/commercial-solar-financing" onClick={() => setIsMenuOpen(false)}>Commercial Solar Financing</Link>
            </DropdownMenu>
          </DropdownItem>

          <li><Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
        </ul>
      </Navigation>

      <ContactInfo>
        <div className="phone">
          <FaPhone />
          <a href="tel:+17814266300" style={{ color: 'white', textDecoration: 'none' }}>
            <span>+1 781-426-6300</span>
          </a>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/thesolarsenorita/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:TheSolarSenorita@gmail.com?subject=Solar%20Energy%20Inquiry" title="Email Us" aria-label="Send email to Solar Señorita">
            <FaEnvelope />
          </a>
        </div>
      </ContactInfo>
    </HeaderContainer>
  );
};

export default Header;