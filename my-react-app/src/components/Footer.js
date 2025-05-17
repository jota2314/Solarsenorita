import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaInstagram, FaGlobe } from 'react-icons/fa';
// Using a placeholder for QR code until the actual one is provided

const FooterContainer = styled.footer`
  background-color: #121212;
  color: white;
  padding: 4rem 2rem 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem 4rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #ff69b4;
  margin-bottom: 2rem;
  text-align: center;
  grid-column: 1 / -1;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  svg {
    color: #ff69b4;
    font-size: 1.5rem;
    
    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }
  
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
    
    &:hover {
      color: #ff69b4;
    }
  }
`;

const QRCodeContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 100px;
  height: 100px;
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    bottom: 1.5rem;
    right: 1.5rem;
  }
  
  @media (max-width: 480px) {
    position: relative;
    margin: 2rem auto 0;
    width: 100px;
    height: 100px;
    bottom: auto;
    right: auto;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
  
  @media (max-width: 480px) {
    margin-top: 2rem;
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer id="contact">
      <ContactGrid>
        <ContactTitle>Get In Touch</ContactTitle>
        
        <div>
          <ContactItem>
            <FaPhone />
            <a href="tel:+17814266300">+1 781-426-6300</a>
          </ContactItem>
          
          <ContactItem>
            <FaEnvelope />
            <a href="mailto:TheSolarSenorita@gmail.com">TheSolarSenorita@gmail.com</a>
          </ContactItem>
        </div>
        
        <div>
          <ContactItem>
            <FaInstagram />
            <a href="https://instagram.com/TheSolarSenorita" target="_blank" rel="noopener noreferrer">@TheSolarSenorita</a>
          </ContactItem>
          
          <ContactItem>
            <FaGlobe />
            <a href="https://SolarSenorita.com" target="_blank" rel="noopener noreferrer">SolarSenorita.com</a>
          </ContactItem>
        </div>
      </ContactGrid>
      
      <QRCodeContainer>
        <img src="/Untitled design (25).png" alt="QR Code" />
      </QRCodeContainer>
      
      <Copyright>
        &copy; {currentYear} Solar Señorita. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
