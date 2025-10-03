'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { getCityLocalContent, getNearbyCity } from '@/lib/localSolarData';

const LocalContentContainer = styled.section`
  background-color: #1a1a1a;
  padding: 6rem 2rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  color: #ff69b4;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const LocalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.05) 0%, rgba(18, 18, 18, 0.95) 100%);
  border: 1px solid rgba(255, 105, 180, 0.2);
  border-radius: 15px;
  padding: 2rem;
  
  h2 {
    color: #ff69b4;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid rgba(255, 105, 180, 0.3);
    padding-bottom: 0.5rem;
  }
  
  h3 {
    color: #00ff88;
    font-size: 1.2rem;
    margin: 1.5rem 0 0.5rem 0;
  }
  
  p, li {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    margin-bottom: 0.8rem;
  }
  
  ul {
    padding-left: 1.2rem;
    margin-bottom: 1rem;
    
    li {
      margin-bottom: 0.3rem;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const StatItem = styled.div`
  background-color: rgba(255, 105, 180, 0.1);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  
  .stat-value {
    color: #00ff88;
    font-size: 1.2rem;
    font-weight: bold;
    display: block;
  }
  
  .stat-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin-top: 0.3rem;
  }
`;

const NearbyLinks = styled.div`
  margin-top: 2rem;
  
  h3 {
    color: #ff69b4;
    margin-bottom: 1rem;
  }
  
  .nearby-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    
    a {
      background-color: rgba(255, 105, 180, 0.2);
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #ff69b4;
        color: white;
      }
    }
  }
`;

const ServiceAreas = styled.div`
  background-color: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem 0;
  
  h3 {
    color: #00ff88;
    margin-bottom: 1rem;
  }
  
  .area-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    
    span {
      background-color: rgba(0, 255, 136, 0.1);
      color: rgba(255, 255, 255, 0.9);
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.9rem;
    }
  }
`;

interface LocalContentSectionProps {
  citySlug: string;
}

const LocalContentSection: React.FC<LocalContentSectionProps> = ({ citySlug }) => {
  const cityData = getCityLocalContent(citySlug);
  const nearbyCity = getNearbyCity(citySlug);

  if (!cityData) return null;

  return (
    <LocalContentContainer>
      <ContentWrapper>
        <MainTitle>
          Solar Panel Installation in {cityData.displayName}, Massachusetts
        </MainTitle>
        
        <ContentCard>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '2rem' }}>
            {cityData.longDescription}
          </p>
          
          <StatsGrid>
            <StatItem>
              <span className="stat-value">{cityData.stats.avgSavings}</span>
              <div className="stat-label">Average Annual Savings</div>
            </StatItem>
            <StatItem>
              <span className="stat-value">{cityData.stats.paybackPeriod}</span>
              <div className="stat-label">Payback Period</div>
            </StatItem>
            <StatItem>
              <span className="stat-value">{cityData.stats.avgElectricityCost}</span>
              <div className="stat-label">Avg. Electricity Cost</div>
            </StatItem>
            <StatItem>
              <span className="stat-value">{cityData.stats.solarPotential}</span>
              <div className="stat-label">Solar Potential</div>
            </StatItem>
          </StatsGrid>
        </ContentCard>

        <LocalGrid>
          <ContentCard>
            <h2>💰 Solar Incentives in {cityData.displayName}</h2>
            
            <h3>Federal Incentives</h3>
            <ul>
              {cityData.incentives.federal.map((incentive, index) => (
                <li key={index}>{incentive}</li>
              ))}
            </ul>
            
            <h3>Massachusetts State Programs</h3>
            <ul>
              {cityData.incentives.state.map((incentive, index) => (
                <li key={index}>{incentive}</li>
              ))}
            </ul>
            
            <h3>Local {cityData.displayName} Programs</h3>
            <ul>
              {cityData.incentives.local.map((incentive, index) => (
                <li key={index}>{incentive}</li>
              ))}
            </ul>
            
            <h3>Utility Company Incentives</h3>
            <ul>
              {cityData.incentives.utility.map((incentive, index) => (
                <li key={index}>{incentive}</li>
              ))}
            </ul>
          </ContentCard>

          <ContentCard>
            <h2>📋 {cityData.displayName} Solar Installation Process</h2>
            
            <h3>Permits & Approvals</h3>
            <ul>
              {cityData.services.permits.map((permit, index) => (
                <li key={index}>{permit}</li>
              ))}
            </ul>
            
            <h3>Required Inspections</h3>
            <ul>
              {cityData.services.inspections.map((inspection, index) => (
                <li key={index}>{inspection}</li>
              ))}
            </ul>
            
            <h3>Utility Companies</h3>
            <ul>
              {cityData.services.utilities.map((utility, index) => (
                <li key={index}>{utility}</li>
              ))}
            </ul>
            
            <p>
              <strong>Average Installation Time:</strong> 1-3 days for residential systems in {cityData.displayName}
            </p>
            <p>
              <strong>Permit Processing:</strong> 2-4 weeks typical for {cityData.displayName} building department
            </p>
          </ContentCard>

          <ContentCard>
            <h2>📊 {cityData.displayName} Solar Market Data</h2>
            
            <p><strong>Population:</strong> {cityData.stats.population} residents</p>
            <p><strong>Total Households:</strong> {cityData.stats.households}</p>
            <p><strong>County:</strong> {cityData.geo.county}</p>
            <p><strong>Average System Size:</strong> {cityData.stats.avgSystemSize}</p>
            
            <h3>Why {cityData.displayName} Residents Choose Solar</h3>
            <ul>
              <li>High electricity rates make solar savings significant</li>
              <li>Strong state and local incentive programs</li>
              <li>Excellent solar potential in Massachusetts</li>
              <li>Increase property value while reducing carbon footprint</li>
              <li>Protection against rising energy costs</li>
            </ul>
          </ContentCard>
        </LocalGrid>

        <ServiceAreas>
          <h3>Service Areas in {cityData.displayName}</h3>
          <p>We provide solar installation services throughout {cityData.displayName} including these neighborhoods:</p>
          <div className="area-list">
            {cityData.geo.neighborhoods.map((neighborhood, index) => (
              <span key={index}>{neighborhood}</span>
            ))}
          </div>
        </ServiceAreas>

        <ContentCard>
          <h2>📞 Contact Solar Señorita in {cityData.displayName}</h2>
          <p><strong>Phone:</strong> <a href="tel:+17814266300" style={{color: '#00ff88'}}>(781) 426-6300</a></p>
          <p><strong>Email:</strong> <a href="mailto:TheSolarSenorita@gmail.com" style={{color: '#00ff88'}}>TheSolarSenorita@gmail.com</a></p>
          <p><strong>Service Area:</strong> {cityData.displayName} and surrounding {cityData.geo.county} communities</p>
          <p><strong>Local Office:</strong> Serving {cityData.displayName}, MA {cityData.geo.zipCodes[0]}</p>
          <p><strong>Licensed:</strong> Massachusetts Solar Contractor #MA-SOL-2024</p>
          <p><strong>Certifications:</strong> NABCEP Certified, BBB A+ Rating</p>
          
          <h3>Business Hours</h3>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 5:00 PM</p>
          <p>Sunday: Closed</p>
          
          <h3>Emergency Solar Service</h3>
          <p>24/7 emergency solar system support available for {cityData.displayName} residents</p>
        </ContentCard>

        {nearbyCity.length > 0 && (
          <NearbyLinks>
            <h3>Solar Installation in Nearby Cities</h3>
            <div className="nearby-list">
              {nearbyCity.map((city, index) => (
                <Link 
                  key={index} 
                  href={`/${city.toLowerCase().replace(' ', '-')}`}
                >
                  Solar Panels {city}, MA
                </Link>
              ))}
            </div>
          </NearbyLinks>
        )}
      </ContentWrapper>
    </LocalContentContainer>
  );
};

export default LocalContentSection;