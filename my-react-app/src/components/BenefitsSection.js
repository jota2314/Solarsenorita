import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const BenefitsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #1a1a1a;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const BenefitsTitle = styled.h2`
  font-size: 2.5rem;
  color: #ff69b4;
  text-align: center;
  margin-bottom: 2.5rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const BenefitsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
  }
`;

// Define animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const animatedStyles = css`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: ${({ index }) => `${index * 0.15}s`};
`;

const BenefitPill = styled.div.attrs(props => {
  // Filter out custom props to prevent React warnings
  const { isVisible, index, ...rest } = props;
  return rest;
})`
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
  ${animatedStyles}
  
  @media (max-width: 1024px) {
    font-size: 1.1rem;
    padding: 0.9rem 1.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
  
  &:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 10px 20px rgba(255, 105, 180, 0.5);
    animation: ${pulse} 1s ease infinite;
  }
`;

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const benefitsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = benefitsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const benefits = [
    '$0 Upfront. No Hidden Fees',
    'You May Qualify for a $10,000 Tax Credit',
    'Increase Home Value Instantly',
    'Own Your Electricity',
    'Save Money on Your Bill'
  ];

  return (
    <BenefitsContainer id="why-solar">
      <BenefitsTitle>Reasons Why to Go Solar</BenefitsTitle>
      <BenefitsList ref={benefitsRef}>
        {benefits.map((benefit, index) => (
          <BenefitPill 
            key={index}
            isVisible={isVisible}
            index={index}
          >
            {benefit}
          </BenefitPill>
        ))}
      </BenefitsList>
    </BenefitsContainer>
  );
};

export default BenefitsSection;
