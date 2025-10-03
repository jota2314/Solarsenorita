'use client';

import React from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaDollarSign, FaBolt, FaHome, FaLeaf, FaPercent, FaCheckCircle } from 'react-icons/fa';

const PageContainer = styled.div`
  background-color: #121212;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a0d1a 0%, #2d1b2e 50%, #1a0d1a 100%);
  padding: 6rem 2rem 4rem;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  color: #ff69b4;
  margin-bottom: 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const IntroText = styled.div`
  color: #d1d5db;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: #ff69b4;
  }
`;

const IncentivesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const IncentiveCard = styled.div`
  background-color: #1a1a1a;
  border: 2px solid #2a2a2a;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff69b4;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.8rem;
    color: white;
  }
`;

const IncentiveTitle = styled.h3`
  font-size: 1.8rem;
  color: #ff69b4;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const IncentiveDescription = styled.div`
  color: #d1d5db;
  font-size: 1.1rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: #00ff88;
    font-weight: 600;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(255, 20, 147, 0.15));
  border-left: 4px solid #ff69b4;
  border-radius: 8px;
  padding: 2rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  h3 {
    font-size: 2rem;
    color: #ff69b4;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  p {
    color: #d1d5db;
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: #00ff88;
  }
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  svg {
    color: #00ff88;
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  span {
    color: #d1d5db;
    font-size: 1.1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
  padding: 4rem 2rem;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1.2rem 3rem;
  background-color: white;
  color: #ff1493;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ResidentialSolarIncentives: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <HeroSection>
        <HeroTitle>Massachusetts Residential Solar Incentives</HeroTitle>
        <HeroSubtitle>
          Discover how federal and state incentives can reduce your solar installation cost by 40-60%. Massachusetts offers some of the best solar incentives in the nation!
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <IntroText>
          <p>
            Going solar in Massachusetts has never been more affordable. With a combination of <strong>federal tax credits, state incentives, and utility programs</strong>, homeowners can significantly reduce their upfront costs and enjoy long-term savings.
          </p>
          <p>
            The average Massachusetts homeowner can save <strong>$20,000 to $40,000</strong> over 25 years after taking advantage of all available incentives. Here&apos;s everything you need to know about solar incentives in 2025.
          </p>
        </IntroText>

        <IncentivesGrid>
          <IncentiveCard>
            <IconWrapper>
              <FaPercent />
            </IconWrapper>
            <IncentiveTitle>Federal Solar Tax Credit (ITC)</IncentiveTitle>
            <IncentiveDescription>
              <p>
                The <strong>Federal Investment Tax Credit (ITC)</strong> is the largest solar incentive available, allowing you to deduct <strong>30% of your total system cost</strong> from your federal taxes.
              </p>
              <p>
                <strong>Example:</strong> If your solar system costs $25,000, you can claim a $7,500 tax credit when you file your taxes!
              </p>
              <p>
                The 30% rate is available through 2032, then decreases to 26% in 2033 and 22% in 2034. This applies to the full cost including equipment, installation, permits, and even battery storage.
              </p>
            </IncentiveDescription>
          </IncentiveCard>

          <IncentiveCard>
            <IconWrapper>
              <FaBolt />
            </IconWrapper>
            <IncentiveTitle>Massachusetts SMART Program</IncentiveTitle>
            <IncentiveDescription>
              <p>
                The <strong>Solar Massachusetts Renewable Target (SMART)</strong> program pays you for every kilowatt-hour (kWh) of solar electricity your system produces for 10 years.
              </p>
              <p>
                <strong>You literally get paid just for having solar panels!</strong> The payment rate varies by utility company and location, but most homeowners receive $0.20-$0.30 per kWh generated.
              </p>
              <p>
                This adds thousands of dollars in additional value over the program&apos;s 10-year term, significantly improving your return on investment.
              </p>
            </IncentiveDescription>
          </IncentiveCard>

          <IncentiveCard>
            <IconWrapper>
              <FaDollarSign />
            </IconWrapper>
            <IncentiveTitle>Net Metering</IncentiveTitle>
            <IncentiveDescription>
              <p>
                <strong>Net metering</strong> allows you to send excess solar energy back to the grid in exchange for credits on your electric bill. When your panels produce more than you use, your meter runs backward!
              </p>
              <p>
                These credits offset your electricity costs during times when your panels aren&apos;t producing enough (nights, cloudy days, winter). Massachusetts has strong net metering policies with 1:1 credit rates.
              </p>
              <p>
                <strong>Result:</strong> You only pay for your &quot;net&quot; electricity usage, dramatically reducing or even eliminating your electric bill.
              </p>
            </IncentiveDescription>
          </IncentiveCard>

          <IncentiveCard>
            <IconWrapper>
              <FaHome />
            </IconWrapper>
            <IncentiveTitle>Property Tax Exemption</IncentiveTitle>
            <IncentiveDescription>
              <p>
                Solar panels <strong>increase your home&apos;s value by an average of 4-6%</strong>, but thanks to Massachusetts law, this added value is <strong>100% exempt from property taxes</strong>.
              </p>
              <p>
                <strong>Example:</strong> If solar adds $30,000 to your home&apos;s value, you won&apos;t pay a single penny more in property taxes. You get all the value appreciation without the tax burden!
              </p>
              <p>
                This exemption continues for the full 20-year duration, saving you thousands over time.
              </p>
            </IncentiveDescription>
          </IncentiveCard>

          <IncentiveCard>
            <IconWrapper>
              <FaLeaf />
            </IconWrapper>
            <IncentiveTitle>Sales Tax Exemption</IncentiveTitle>
            <IncentiveDescription>
              <p>
                Massachusetts offers a <strong>100% sales tax exemption</strong> on solar panel systems. With the state&apos;s 6.25% sales tax rate, this saves homeowners an additional $1,500+ on a typical installation.
              </p>
              <p>
                This exemption applies to all residential solar equipment including panels, inverters, mounting hardware, and battery storage systems.
              </p>
            </IncentiveDescription>
          </IncentiveCard>

          <IncentiveCard>
            <IconWrapper>
              <FaCheckCircle />
            </IconWrapper>
            <IncentiveTitle>Massachusetts State Tax Credit</IncentiveTitle>
            <IncentiveDescription>
              <p>
                On top of the federal credit, Massachusetts offers a <strong>state income tax credit of 15%</strong> of your system cost, up to <strong>$1,000</strong>.
              </p>
              <p>
                While smaller than the federal credit, this is essentially free money that reduces your state tax burden the year you install solar.
              </p>
              <p>
                Combined with the federal credit, you&apos;re getting over 30% of your system cost back in tax incentives alone!
              </p>
            </IncentiveDescription>
          </IncentiveCard>
        </IncentivesGrid>

        <HighlightBox>
          <h3>How Much Can You Really Save?</h3>
          <p>
            Let&apos;s break down the real numbers for a typical Massachusetts homeowner installing a $25,000 solar system:
          </p>
          <BenefitsList>
            <BenefitItem>
              <FaCheckCircle />
              <span><strong>Federal Tax Credit (30%):</strong> -$7,500</span>
            </BenefitItem>
            <BenefitItem>
              <FaCheckCircle />
              <span><strong>MA State Tax Credit:</strong> -$1,000</span>
            </BenefitItem>
            <BenefitItem>
              <FaCheckCircle />
              <span><strong>Sales Tax Exemption:</strong> -$1,563</span>
            </BenefitItem>
            <BenefitItem>
              <FaCheckCircle />
              <span><strong>SMART Program (10 years):</strong> -$6,000+</span>
            </BenefitItem>
            <BenefitItem>
              <FaCheckCircle />
              <span><strong>Net Metering Savings:</strong> $1,500-$2,500/year</span>
            </BenefitItem>
            <BenefitItem>
              <FaCheckCircle />
              <span><strong>Property Tax Exemption:</strong> Thousands saved over 20 years</span>
            </BenefitItem>
          </BenefitsList>
          <p style={{ marginTop: '2rem' }}>
            <strong>Your Net Cost After Year 1:</strong> Approximately $15,000 (40% reduction!)<br />
            <strong>Total 25-Year Savings:</strong> $30,000 - $50,000 when factoring in eliminated electric bills and rising energy costs
          </p>
        </HighlightBox>

        <HighlightBox>
          <h3>$0 Down Financing Options Available</h3>
          <p>
            Don&apos;t have the cash upfront? No problem! Solar Señorita partners with leading financing companies to offer:
          </p>
          <BenefitsList>
            <BenefitItem>
              <FaCheckCircle />
              <span><strong>$0 down payment</strong> to get started immediately</span>
            </BenefitItem>
            <BenefitItem>
              <FaCheckCircle />
              <span><strong>Low monthly payments</strong> often less than your current electric bill</span>
            </BenefitItem>
            <BenefitItem>
              <FaCheckCircle />
              <span><strong>Competitive interest rates</strong> for qualified homeowners</span>
            </BenefitItem>
            <BenefitItem>
              <FaCheckCircle />
              <span><strong>Start saving from day one</strong> while building equity in your system</span>
            </BenefitItem>
          </BenefitsList>
          <p style={{ marginTop: '1.5rem' }}>
            Many homeowners find their solar loan payment is <strong>lower than their previous electric bill</strong>, meaning they save money immediately while owning their own power generation!
          </p>
        </HighlightBox>
      </ContentSection>

      <CTASection>
        <h2>Ready to Take Advantage of These Incentives?</h2>
        <p>Get a free consultation and find out exactly how much you can save with solar in Massachusetts.</p>
        <CTAButton href="tel:+17814266300">Call +1 781-426-6300</CTAButton>
      </CTASection>

      <Footer />
    </PageContainer>
  );
};

export default ResidentialSolarIncentives;