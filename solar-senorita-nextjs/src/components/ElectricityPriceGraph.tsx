'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const countUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const GraphContainer = styled.section`
  background-color: #121212;
  padding: 5rem 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 30%, rgba(255, 105, 180, 0.1) 0%, rgba(18, 18, 18, 0) 70%);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const GraphTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
  color: #ff69b4;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const GraphSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
  animation: ${fadeIn} 1s ease-out 0.3s forwards;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ExplanationBox = styled.div`
  max-width: 900px;
  margin: 0 auto 3rem;
  padding: 2rem;
  background: rgba(255, 105, 180, 0.1);
  border-left: 4px solid #ff69b4;
  border-radius: 8px;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out 0.4s forwards;
  opacity: 0;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: #00ff88;
    font-weight: 600;
  }
`;

const PercentageHighlight = styled.div`
  font-size: 5rem;
  font-weight: bold;
  color: #ff69b4;
  text-align: center;
  margin: 2rem 0;
  animation: ${countUp} 1.5s ease-out 0.5s forwards;
  opacity: 0;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const SmallText = styled.div`
  font-size: 1rem;
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const GraphSVGContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 400px;
  position: relative;
  
  @media (max-width: 768px) {
    height: 300px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
  }
`;

const YearLabel = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  
  &.start {
    left: 0;
  }
  
  &.middle {
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.end {
    right: 0;
  }
`;

const ElectricityPriceGraph: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const graphRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Data points for the graph (year, percentage increase)
  const data = [
    { year: 2003, value: -10 },
    { year: 2005, value: 0 },
    { year: 2007, value: 15 },
    { year: 2009, value: 12 },
    { year: 2011, value: 20 },
    { year: 2013, value: 8 },
    { year: 2015, value: 15 },
    { year: 2017, value: 25 },
    { year: 2019, value: 30 },
    { year: 2021, value: 40 },
    { year: 2022, value: 40 },
    { year: 2023, value: 50 },
    { year: 2024, value: 120 }
  ];
  
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
    
    if (graphRef.current) {
      observer.observe(graphRef.current);
    }
    
    return () => {
      if (graphRef.current) {
        observer.unobserve(graphRef.current);
      }
    };
  }, []);
  
  // Calculate points for the SVG path
  const getPathPoints = () => {
    const svgWidth = 1000;
    const svgHeight = 350;
    const padding = 30;
    
    // Map data to SVG coordinates
    const points = data.map((point, index) => {
      const x = padding + (index / (data.length - 1)) * (svgWidth - 2 * padding);
      // Invert the y-axis and normalize values
      const normalizedValue = (point.value + 20) / 140; // Adjust based on data range
      const y = svgHeight - padding - normalizedValue * (svgHeight - 2 * padding);
      return `${x},${y}`;
    });
    
    return points.join(' ');
  };
  
  return (
    <GraphContainer ref={graphRef}>
      <GraphTitle>Average retail price of electricity, annual</GraphTitle>
      <GraphSubtitle>According to Energy Information Administration (EIA)</GraphSubtitle>

      <ExplanationBox>
        <p>
          <strong>What does this mean for you?</strong> Since 2003, electricity prices have increased by <strong>169%</strong> — that&apos;s more than doubled! If you paid $100/month for electricity 20 years ago, you&apos;d be paying around $269/month today.
        </p>
        <p>
          This graph shows how much electricity costs keep rising year after year. Without solar, your electric bill will likely keep increasing. With solar panels, you lock in your energy costs and protect yourself from these price hikes for decades to come.
        </p>
      </ExplanationBox>

      <PercentageHighlight>
        169%
        <SmallText>in 20 years</SmallText>
      </PercentageHighlight>
      
      <GraphSVGContainer>
        <svg 
          ref={svgRef} 
          width="100%" 
          height="100%" 
          viewBox="0 0 1000 400" 
          preserveAspectRatio="none"
          style={{ overflow: 'visible' }}
        >
          {/* Grid lines */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line 
              key={`grid-${i}`}
              x1="30" 
              y1={30 + i * 50} 
              x2="970" 
              y2={30 + i * 50} 
              stroke="rgba(255, 255, 255, 0.1)" 
              strokeDasharray="5,5"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease',
                transitionDelay: `${0.1 * i}s`
              }}
            />
          ))}
          
          {/* Y-axis labels */}
          {[120, 100, 80, 60, 40, 20, 0, -20].map((value, i) => (
            <text 
              key={`label-${i}`} 
              x="25" 
              y={30 + i * 50} 
              textAnchor="end" 
              fill="white" 
              fontSize="12"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease',
                transitionDelay: `${0.2 + 0.1 * i}s`
              }}
            >
              {value}
            </text>
          ))}
          
          {/* The graph line */}
          <polyline
            points={getPathPoints()}
            fill="none"
            stroke="#ff69b4"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: isVisible ? 0 : 1000,
              transition: 'stroke-dashoffset 2s ease-out'
            }}
          />
        </svg>
        
        <YearLabel className="start">2003</YearLabel>
        <YearLabel className="middle">2013</YearLabel>
        <YearLabel className="end">2024</YearLabel>
      </GraphSVGContainer>
    </GraphContainer>
  );
};

export default ElectricityPriceGraph;