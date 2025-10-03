'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const FAQSection = styled.section`
  padding: 100px 0;
  background-color: #121212;
  color: white;
  font-family: 'Montserrat', sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  color: #ff69b4;
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, rgba(255,105,180,0.2) 0%, rgba(255,105,180,1) 50%, rgba(255,105,180,0.2) 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const FAQContainer = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

const FAQItem = styled.div<{ $isVisible: boolean; $index: number }>`
  background-color: rgba(30, 30, 30, 0.7);
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid rgba(255, 105, 180, 0.1);
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  transform: ${({ $isVisible }) => $isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: ${({ $index }) => `opacity 0.6s ease ${0.2 + $index * 0.1}s, transform 0.6s ease ${0.2 + $index * 0.1}s`};
`;

const FAQQuestion = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    background-color: rgba(255, 105, 180, 0.1);
  }
  
  ${({ $isActive }) => $isActive && `
    border-left: 4px solid #ff69b4;
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.3);
    background-color: rgba(255, 105, 180, 0.08);
  `}
  
  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: ${({ $isActive }) => $isActive ? '#ff69b4' : 'white'};
    letter-spacing: 0.2px;
    transition: color 0.3s ease;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const FAQIcon = styled.div<{ $isActive: boolean }>`
  font-size: 24px;
  color: #ff69b4;
  transition: transform 0.3s ease, color 0.3s ease;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ $isActive }) => $isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
  text-shadow: ${({ $isActive }) => $isActive ? '0 0 10px rgba(255, 105, 180, 0.5)' : 'none'};
`;

const FAQAnswer = styled.div<{ $isActive: boolean }>`
  max-height: ${({ $isActive }) => $isActive ? '300px' : '0'};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  padding: ${({ $isActive }) => $isActive ? '0 28px 28px' : '0 28px'};
  opacity: ${({ $isActive }) => $isActive ? 1 : 0};
  transform: ${({ $isActive }) => $isActive ? 'translateY(0)' : 'translateY(-10px)'};
  background-color: ${({ $isActive }) => $isActive ? 'rgba(30, 30, 30, 0.5)' : 'transparent'};
  box-shadow: ${({ $isActive }) => $isActive ? 'inset 0 5px 15px rgba(0, 0, 0, 0.1)' : 'none'};
  
  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.8;
    font-size: 16px;
    font-weight: 400;
    padding-top: 5px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

interface FAQProps {
  city?: string;
}

const FAQ: React.FC<FAQProps> = ({ city }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How much can I save by switching to solar?",
      answer: "Savings depend on your location, energy usage, and available incentives. Most customers see a significant reduction in their utility bills — often 40–70% over time."
    },
    {
      question: "Do I qualify for any government rebates or tax credits?",
      answer: "Yes! Many customers are eligible for the Federal Solar Investment Tax Credit (ITC) and possibly state or local incentives. We'll guide you through all available options during your consultation."
    },
    {
      question: "What is the installation process like?",
      answer: "It starts with a site assessment, followed by custom system design, permitting, and installation. We handle everything — typically completed within 2 to 4 weeks."
    },
    {
      question: "Can I finance my solar system?",
      answer: "Absolutely. We offer multiple financing options, including zero-down payment plans, solar leases, and PPAs (Power Purchase Agreements)."
    },
    {
      question: "Will solar panels work on cloudy or rainy days?",
      answer: "Yes. While solar panels are most efficient in direct sunlight, they still produce energy on cloudy days — just at a slightly reduced rate."
    },
    {
      question: "Do I need a new roof to install solar panels?",
      answer: "Not necessarily. We'll assess your roof's condition during the consultation. If repairs are needed, we'll advise you upfront."
    },
    {
      question: "How long do solar panels last?",
      answer: "Most panels last 25–30 years and come with manufacturer warranties. We also offer system monitoring and maintenance plans."
    },
    {
      question: "Can I install solar on a commercial property?",
      answer: "Yes! We design and install solar solutions for businesses of all sizes — helping reduce overhead and lock in energy costs."
    },
    {
      question: "What happens if I move?",
      answer: "You can either transfer the solar agreement to the new homeowner or consult us about relocating the system to your new property."
    },
    {
      question: "Will solar increase my home's value?",
      answer: "Studies show homes with solar systems typically sell faster and at a higher price, making it a great long-term investment."
    }
  ];

  return (
    <FAQSection id="faq" ref={sectionRef}>
      <Container>
        <SectionTitle style={{ 
          opacity: isVisible ? 1 : 0, 
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}>
          Frequently Asked Questions{city ? ` - ${city}` : ''}
        </SectionTitle>
        <FAQContainer>
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              $isVisible={isVisible}
              $index={index}
            >
              <FAQQuestion
                $isActive={activeIndex === index}
                onClick={() => toggleQuestion(index)}
              >
                <h3>{item.question}</h3>
                <FAQIcon $isActive={activeIndex === index}>
                  {activeIndex === index ? '−' : '+'}
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isActive={activeIndex === index}>
                <p>{item.answer}</p>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
      </Container>
    </FAQSection>
  );
};

export default FAQ;