import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
// Using a YouTube video instead of a static image

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    gap: 2rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
`;

const VideoContainer = styled.div.attrs(props => ({
  // This prevents the isVisible prop from being passed to the DOM element
  className: props.className
}))`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.8s ease, transform 0.8s ease;
  
  @media (max-width: 768px) {
    min-width: 250px;
  }
  
  @media (max-width: 480px) {
    min-width: 200px;
  }
  
  iframe {
    width: 100%;
    max-width: 560px;
    height: 315px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
    
    @media (max-width: 768px) {
      max-width: 450px;
      height: 253px;
    }
    
    @media (max-width: 480px) {
      max-width: 300px;
      height: 169px;
    }
  }
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 300px;
  color: white;
  
  @media (max-width: 768px) {
    min-width: 100%;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #ff69b4;
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const AboutSection = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // When 30% of the element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  
  return (
    <AboutContainer>
      <VideoContainer ref={videoRef} isVisible={isVideoVisible}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1"
          title="Solar Señorita Introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
      <TextContainer>
        <h2>Meet Solar Señorita</h2>
        <p>
          Jenni is the Solar Señorita — passionate about helping families own their energy and unlock major savings.
        </p>
      </TextContainer>
    </AboutContainer>
  );
};

export default AboutSection;
