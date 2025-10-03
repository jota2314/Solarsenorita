'use client';

import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #121212 0%, #1a0d1a 50%, #121212 100%);
  color: white;
  padding: 4rem 2rem 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 105, 180, 0.15) 0%, rgba(18, 18, 18, 0) 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 1rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 0.8fr 1fr 1fr;
  gap: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`;

const LogoSection = styled(FooterSection)`
  img {
    height: 60px;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      margin: 0 auto 1rem;
      display: block;
    }
  }

  p {
    color: #d1d5db;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #d1d5db;

  @media (max-width: 768px) {
    justify-content: center;
  }

  svg {
    color: #ff69b4;
    font-size: 1.2rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }

  a {
    color: #d1d5db;
    text-decoration: none;

    &:hover {
      color: #ff69b4;
    }
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.75rem;

    a {
      color: #d1d5db;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.3s ease;

      &:hover {
        color: #ff69b4;
      }
    }
  }

  &.cities-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
`;

const SubscribeBox = styled.div`
  p {
    color: #d1d5db;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const EmailInputWrapper = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  background-color: #374151;
  border: 1px solid #4b5563;
  border-right: none;
  border-radius: 4px 0 0 4px;
  color: white;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    border-right: 1px solid #4b5563;
    border-radius: 4px;
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #ff69b4;
  }
`;

const SubscribeButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #ff69b4;
  border: none;
  border-radius: 0 4px 4px 0;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    border-radius: 4px;
    width: 100%;
  }

  &:hover {
    background-color: #ff1493;
  }
`;

const SmallText = styled.p`
  color: #9ca3af;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  max-width: 1400px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid #374151;
  text-align: center;
  color: #9ca3af;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer id="contact">
      <FooterContent>
        <LogoSection>
          <img src="/Untitled design (25).png" alt="Solar Señorita Logo" />
          <p>
            Making solar simple, affordable, and rewarding for Massachusetts homeowners. Get your free consultation today!
          </p>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>Serving All of Massachusetts</span>
          </ContactItem>
        </LogoSection>

        <FooterSection>
          <h3>Contacts</h3>
          <ContactItem>
            <FaPhone />
            <a href="tel:+17814266300">+1 781-426-6300</a>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <a href="mailto:TheSolarSenorita@gmail.com">TheSolarSenorita@gmail.com</a>
          </ContactItem>
          <ContactItem>
            <FaInstagram />
            <a href="https://www.instagram.com/thesolarsenorita/" target="_blank" rel="noopener noreferrer">
              @thesolarsenorita
            </a>
          </ContactItem>
        </FooterSection>

        <FooterSection>
          <h3>About</h3>
          <LinkList>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/solar-agent">Solar Agent</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </LinkList>
        </FooterSection>

        <FooterSection>
          <h3>Massachusetts Cities</h3>
          <LinkList className="cities-grid">
            <li><Link href="/boston">Boston</Link></li>
            <li><Link href="/worcester">Worcester</Link></li>
            <li><Link href="/springfield">Springfield</Link></li>
            <li><Link href="/lowell">Lowell</Link></li>
            <li><Link href="/cambridge">Cambridge</Link></li>
            <li><Link href="/newton">Newton</Link></li>
            <li><Link href="/framingham">Framingham</Link></li>
            <li><Link href="/quincy">Quincy</Link></li>
            <li><Link href="/brockton">Brockton</Link></li>
            <li><Link href="/lynn">Lynn</Link></li>
            <li><Link href="/somerville">Somerville</Link></li>
            <li><Link href="/lawrence">Lawrence</Link></li>
            <li><Link href="/new-bedford">New Bedford</Link></li>
            <li><Link href="/fall-river">Fall River</Link></li>
            <li><Link href="/malden">Malden</Link></li>
            <li><Link href="/medford">Medford</Link></li>
            <li><Link href="/peabody">Peabody</Link></li>
            <li><Link href="/revere">Revere</Link></li>
            <li><Link href="/waltham">Waltham</Link></li>
            <li><Link href="/taunton">Taunton</Link></li>
          </LinkList>
        </FooterSection>

        <FooterSection>
          <h3>Subscribe</h3>
          <SubscribeBox>
            <p>Subscribe to our newsletter! Get the latest updates from the solar industry.</p>
            <EmailInputWrapper>
              <EmailInput type="email" placeholder="Your Email" />
              <SubscribeButton>→</SubscribeButton>
            </EmailInputWrapper>
            <SmallText>* Don&apos;t worry, we don&apos;t spam.</SmallText>
          </SubscribeBox>
        </FooterSection>
      </FooterContent>

      <BottomBar>
        <p>&copy; 2024 Solar Señorita. All Rights Reserved.</p>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;