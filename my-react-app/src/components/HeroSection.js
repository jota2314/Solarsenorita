import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for the animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const HeroContainer = styled.section`
  background-color: #121212;
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 30%, rgba(255, 105, 180, 0.3) 0%, rgba(18, 18, 18, 0) 70%);
    z-index: 1;
    animation: ${gradientAnimation} 15s ease infinite;
    background-size: 200% 200%;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(18, 18, 18, 0) 50%, rgba(255, 20, 147, 0.1) 100%);
    z-index: 1;
    animation: ${gradientAnimation} 10s ease infinite;
    background-size: 200% 200%;
    animation-delay: -5s;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const Headline = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  
  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
  
  .line1 {
    color: white;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .line2 {
    color: #ff69b4; /* Neon pink */
    display: block;
  }
`;

const Subtext = styled.p`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const CTAButton = styled.button`
  background-color: white;
  color: #ff69b4;
  border: 2px solid #ff69b4;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
  
  &:hover {
    background-color: #ff69b4;
    color: white;
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.5);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Headline>
          <span className="line1">Power Your Home,</span>
          <span className="line2">Empower Your Future</span>
        </Headline>
        <Subtext>Save on your electric bill with Solar Señorita.</Subtext>
        <CTAButton>Schedule a Free Consultation</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
