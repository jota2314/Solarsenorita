'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const BenefitsContainer = styled.section`
  padding: 6rem 2rem;
  background-color: #1a1a1a;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const BenefitsTitle = styled.h2`
  font-size: 3.5rem;
  color: #ff69b4;
  text-align: center;
  margin-bottom: 3.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`;

const BenefitsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
    flex-direction: column;
    align-items: center;
    max-width: 320px;
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

const animatedStyles = css<{ $isVisible: boolean; $index: number }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: ${({ $index }) => `${$index * 0.15}s`};
`;

const BenefitPill = styled.div<{ $isVisible: boolean; $index: number }>`
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  color: white;
  font-weight: 700;
  font-size: 1.35rem;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
  ${animatedStyles}

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    padding: 1.1rem 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1.1rem;
    font-size: 1.05rem;
  }

  &:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 10px 20px rgba(255, 105, 180, 0.5);
    animation: ${pulse} 1s ease infinite;
  }
`;

interface BenefitsSectionProps {
  city?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ city }) => {
  const [isVisible, setIsVisible] = useState(false);
  const benefitsRef = useRef<HTMLDivElement>(null);

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
    'Save Money on Your Bill',
    'You May Qualify for a New Roof',
    'Protection Against Rising Energy Costs',
    'Clean, Renewable Energy',
    '25-Year Performance Warranty',
    'Energy Independence from the Grid',
    'Lock in Low Energy Rates',
    'Reduce Your Carbon Footprint',
    'Massachusetts SMART Program Eligible',
    'Net Metering Benefits',
    'Professional Installation & Support',
    'Start Saving From Day One'
  ];

  return (
    <BenefitsContainer id="why-solar">
      <BenefitsTitle>Why Go Solar with Solar Señorita{city ? ` in ${city}` : ''}</BenefitsTitle>
      <BenefitsList ref={benefitsRef}>
        {benefits.map((benefit, index) => (
          <BenefitPill
            key={index}
            $isVisible={isVisible}
            $index={index}
          >
            {benefit}
          </BenefitPill>
        ))}
      </BenefitsList>
    </BenefitsContainer>
  );
};

export default BenefitsSection;