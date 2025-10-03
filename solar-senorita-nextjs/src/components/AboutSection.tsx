'use client';

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ConsultationForm, { ScheduleConsultationButton } from './ConsultationForm';


const AboutContainer = styled.section`
  padding: 6rem 2rem;
  background-color: #1a1a1a;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

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

const VideoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  animation: popIn 0.5s forwards;
  animation-delay: 0.3s;

  @keyframes popIn {
    0% { transform: scale(0.5); }
    70% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @media (max-width: 768px) {
    min-width: 250px;
  }

  @media (max-width: 480px) {
    min-width: 200px;
  }

  iframe, video {
    width: 100%;
    max-width: 100%;
    height: 675px;
    border-radius: 12px;
    border: none;
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 12px 30px rgba(255, 105, 180, 0.7);
    }

    @media (max-width: 768px) {
      max-width: 650px;
      height: 366px;
    }

    @media (max-width: 480px) {
      max-width: 340px;
      height: 191px;
    }
  }
`;

const TextContainer = styled.div`
  color: white;
  text-align: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    width: 90%;
  }

  h2 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: #ff69b4;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
  
  .free-money {
    color: #00ff88;
    font-weight: bold;
    animation: zoomPulse 2s infinite;
    display: inline-block;
    text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
    transform-origin: center;
    will-change: transform;
  }

  @keyframes zoomPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
`;



const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

interface AboutSectionProps {
  city?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ city }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const hasLoadedRef = useRef(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Load video when 30% visible and hasn't been loaded yet
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && !hasLoadedRef.current) {
            // Autoplay muted (browser requirement) but with full controls for user to unmute
            setVideoUrl('https://player.vimeo.com/video/1123669531?autoplay=1&muted=1&controls=1&transparent=0&title=0&byline=0&portrait=0&playsinline=1');
            hasLoadedRef.current = true;
          }
        });
      },
      {
        threshold: 0.3 // Trigger when 30% of the video is visible
      }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  return (
    <AboutContainer>
      <ContentContainer>
        <TextContainer>
          <h2>Meet Solar Señorita{city ? ` in ${city}` : ''}</h2>
          <p>
            Jenni is the Solar Señorita — making solar{' '}
            <span className="free-money">simple, affordable, and rewarding</span>
            {' '}for you{city ? ` right here in ${city}, Massachusetts` : ''}.
          </p>
        </TextContainer>
        <VideoContainer ref={videoContainerRef}>
          {videoUrl ? (
            <iframe
              src={videoUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Solar Señorita Introduction"
            ></iframe>
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(0, 255, 136, 0.2)), url('/Untitled design (25).png') center/cover`,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: 'white',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>▶️</div>
                Loading video...
              </div>
            </div>
          )}
        </VideoContainer>
        <ScheduleConsultationButton onClick={openModal} />
      </ContentContainer>
      <ConsultationForm isOpen={isModalOpen} onClose={closeModal} />
    </AboutContainer>
  );
};

export default AboutSection;