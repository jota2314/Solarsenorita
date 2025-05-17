import React, { useState } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121212;
  color: white;
  flex-wrap: wrap;
  
  @media (max-width: 1024px) {
    padding: 1rem;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`;

const Logo = styled.div`
  img {
    height: 80px;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    img {
      height: 70px;
    }
  }
  
  @media (max-width: 480px) {
    img {
      height: 60px;
    }
  }
`;

const Navigation = styled.nav.attrs(props => ({
  // This prevents the isOpen prop from being passed to the DOM element
  className: props.className
}))`
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
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
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    
    @media (max-width: 480px) {
      gap: 1.5rem;
    }
    
    li {
      @media (max-width: 768px) {
        margin-bottom: 0.5rem;
      }

      a {
        color: white;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
        font-size: 1rem;
        
        @media (max-width: 768px) {
          font-size: 1.5rem;
        }
        
        &:hover {
          color: #ff69b4; /* Neon pink */
        }
      }
    }
  }
`;

const MenuToggle = styled.button.attrs(props => ({
  // This prevents the isOpen prop from being passed to the DOM element
  className: props.className
}))`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;
  
  @media (max-width: 768px) {
    display: block;
    position: ${({ isOpen }) => (isOpen ? 'fixed' : 'relative')};
    right: ${({ isOpen }) => (isOpen ? '2rem' : '0')};
    top: ${({ isOpen }) => (isOpen ? '1.5rem' : '0')};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
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
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
  
  .social-icons {
    display: flex;
    gap: 1rem;
    
    a {
      color: white;
      font-size: 1.2rem;
      transition: color 0.3s ease;
      
      &:hover {
        color: #ff69b4; /* Neon pink */
      }
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Prevent scrolling when menu is open
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
        <img src="/Untitled design (25).png" alt="Solar Señorita Logo" />
      </Logo>
      
      <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuToggle>
      
      <Navigation isOpen={isMenuOpen}>
        <ul>
          <li><a href="#why-solar" onClick={() => setIsMenuOpen(false)}>Why Solar</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </Navigation>
      
      <ContactInfo>
        <div className="phone">
          <FaPhone />
          <span>+1 781-426-6300</span>
        </div>
        <div className="social-icons">
          <a href="https://instagram.com/TheSolarSenorita" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:TheSolarSenorita@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </ContactInfo>
    </HeaderContainer>
  );
};

export default Header;
