'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ReviewSection = styled.section`
  padding: 6rem 2rem;
  background-color: #121212;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(255, 105, 180, 0.1) 0%, rgba(18, 18, 18, 0) 70%);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const ReviewTitle = styled.h2`
  font-size: 2.5rem;
  color: #ff69b4;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const CarouselContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ReviewCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.15) 0%, rgba(18, 18, 18, 0.95) 100%);
  border: 2px solid rgba(255, 105, 180, 0.4);
  border-radius: 20px;
  padding: 3rem;
  margin: 0 auto;
  max-width: 900px;
  box-shadow: 0 15px 40px rgba(255, 105, 180, 0.2), 0 5px 15px rgba(0, 0, 0, 0.5);
  animation: ${slideIn} 0.5s ease-out;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(255, 105, 180, 0.3), 0 8px 20px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    border-radius: 12px;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.4);

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`;

const AuthorInfo = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const AuthorName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.3rem;

  @media (max-width: 480px) {
    justify-content: center;
    font-size: 1.1rem;
  }
`;

const VerifiedBadge = styled.span`
  color: #00ff88;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
`;

const AuthorDate = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
`;

const Stars = styled.div`
  color: #ffd700;
  font-size: 1.3rem;
  display: flex;
  gap: 0.2rem;
  letter-spacing: 0.1rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
    justify-content: center;
  }
`;

const ReviewText = styled.p`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.3rem;
  line-height: 1.8;
  margin-bottom: 0;
  font-style: italic;
  position: relative;
  padding-left: 1.5rem;
  border-left: 3px solid rgba(255, 105, 180, 0.3);

  &::before {
    content: '"';
    position: absolute;
    left: -0.3rem;
    top: -0.5rem;
    font-size: 3rem;
    color: rgba(255, 105, 180, 0.3);
    font-family: Georgia, serif;
  }

  @media (max-width: 768px) {
    font-size: 1.15rem;
    padding-left: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff69b4;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:disabled {
    color: rgba(255, 105, 180, 0.3);
    cursor: not-allowed;
  }
  
  &.prev {
    left: 0;
  }
  
  &.next {
    right: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Indicator = styled.div<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#ff69b4' : 'rgba(255, 105, 180, 0.3)'};
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.$active ? '#ff69b4' : 'rgba(255, 105, 180, 0.6)'};
  }
  
  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
    margin: 0 4px;
  }
`;

interface Review {
  id: number;
  text: string;
  author: string;
  date: string;
  stars: number;
  location?: string;
  verified?: boolean;
}

interface ReviewCarouselProps {
  city?: string;
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ city }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const reviews: Review[] = [
    {
      id: 1,
      text: "We recently had solar installed on our two-family home, and Solar Señorita was fantastic to work with! Jenni Martinez was with us every step of the way, explaining what would be done, when, by whom, and why. The whole process felt streamlined and easy. Jenni was available to help us with all of our questions and kept us updated on status.",
      author: "Jennifer McFadden",
      date: "April 14, 2025",
      stars: 5,
      location: "Boston, MA",
      verified: true
    },
    {
      id: 2,
      text: "Solar Señorita exceeded my expectations. The crew arrived on time, worked efficiently, and walked me through every detail of the install. I started seeing savings on my energy bill within the first month. Highly recommended for anyone considering solar.",
      author: "Andre Geoffroy",
      date: "April 8, 2025",
      stars: 5,
      location: "Cambridge, MA",
      verified: true
    },
    {
      id: 3,
      text: "From start to finish, the team at Solar Señorita was a dream to work with. They helped me qualify for the tax credit and even coordinated my roof replacement. Everything was seamless, and now my home is fully solar-powered.",
      author: "Ana Allen",
      date: "October 19, 2024",
      stars: 5,
      location: "Worcester, MA",
      verified: true
    },
    {
      id: 4,
      text: "I manage several commercial properties, and Solar Señorita handled our transition to solar like pros. Transparent pricing, professional crew, and no disruption to our daily operations. We've already cut our electric costs by 60%.",
      author: "Carlos Ramirez",
      date: "June 12, 2024",
      stars: 5,
      location: "Springfield, MA",
      verified: true
    },
    {
      id: 5,
      text: "I had lots of questions about solar before starting, but the Solar Señorita team answered everything with patience and clarity. The installation was quick, and their support after the install has been fantastic. Couldn't be happier.",
      author: "Lena Morrison",
      date: "November 3, 2023",
      stars: 5,
      location: "Lowell, MA",
      verified: true
    },
    {
      id: 6,
      text: "Going solar felt intimidating, but Solar Señorita made it incredibly simple. They helped me understand financing options, got all the permits sorted, and now I'm paying way less for electricity. This was the best home upgrade I've made.",
      author: "Marcus Dean",
      date: "July 27, 2023",
      stars: 5,
      location: "Quincy, MA",
      verified: true
    }
  ];
  
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500); // Match animation duration
  }, [isAnimating, reviews.length]);
  
  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500); // Match animation duration
  }, [isAnimating, reviews.length]);
  
  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500); // Match animation duration
  }, [isAnimating, currentIndex]);
  
  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);
  
  const renderStars = (count: number) => {
    return '★'.repeat(count);
  };

  const getInitials = (name: string) => {
    const names = name.split(' ');
    return names.length >= 2
      ? `${names[0][0]}${names[names.length - 1][0]}`
      : name.substring(0, 2);
  };

  return (
    <ReviewSection>
      <ReviewTitle>What Our Customers Say{city ? ` in ${city}` : ''}</ReviewTitle>
      <CarouselContainer>
        <NavButton className="prev" onClick={prevSlide} disabled={isAnimating}>
          &#10094;
        </NavButton>

        <ReviewCard key={currentIndex}>
          <ReviewHeader>
            <Avatar>{getInitials(reviews[currentIndex].author)}</Avatar>
            <AuthorInfo>
              <AuthorName>
                {reviews[currentIndex].author}
                {reviews[currentIndex].verified && (
                  <VerifiedBadge title="Verified Customer">✓</VerifiedBadge>
                )}
              </AuthorName>
              <Stars>{renderStars(reviews[currentIndex].stars)}</Stars>
              <AuthorDate>
                {reviews[currentIndex].date}
                {reviews[currentIndex].location && ` • ${reviews[currentIndex].location}`}
              </AuthorDate>
            </AuthorInfo>
          </ReviewHeader>
          <ReviewText>{reviews[currentIndex].text}</ReviewText>
        </ReviewCard>

        <NavButton className="next" onClick={nextSlide} disabled={isAnimating}>
          &#10095;
        </NavButton>

        <IndicatorContainer>
          {reviews.map((_, index) => (
            <Indicator
              key={index}
              $active={currentIndex === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </IndicatorContainer>
      </CarouselContainer>
    </ReviewSection>
  );
};

export default ReviewCarousel;