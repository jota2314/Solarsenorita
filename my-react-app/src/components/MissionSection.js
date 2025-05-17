import React from 'react';
import styled from 'styled-components';

const MissionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #1a1a1a;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const QuoteContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
  
  &::before, &::after {
    content: '"';
    font-size: 5rem;
    color: #ff69b4;
    opacity: 0.3;
    position: absolute;
    
    @media (max-width: 768px) {
      font-size: 4rem;
    }
    
    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }
  
  &::before {
    top: -20px;
    left: 0;
    
    @media (max-width: 480px) {
      top: -10px;
    }
  }
  
  &::after {
    bottom: -60px;
    right: 0;
    
    @media (max-width: 480px) {
      bottom: -40px;
    }
  }
`;

const Quote = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  color: white;
  font-style: italic;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    line-height: 1.4;
  }
  
  span {
    color: #ff69b4;
    font-weight: 700;
  }
`;

const MissionSection = () => {
  return (
    <MissionContainer>
      <QuoteContainer>
        <Quote>
          Solar Señorita is here to unchain you from high energy bills and help you embrace clean power—<span>stylishly</span>.
        </Quote>
      </QuoteContainer>
    </MissionContainer>
  );
};

export default MissionSection;
