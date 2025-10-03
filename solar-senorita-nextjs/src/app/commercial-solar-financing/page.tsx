'use client';

import React from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaDollarSign, FaHandshake, FaFileInvoiceDollar, FaBuilding, FaChartLine, FaCheckCircle, FaTimes } from 'react-icons/fa';

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

const FinancingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const FinancingCard = styled.div`
  background-color: #1a1a1a;
  border: 2px solid #2a2a2a;
  border-radius: 12px;
  padding: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff69b4;
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FinancingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    font-size: 2rem;
    color: white;
  }
`;

const FinancingTitle = styled.h2`
  font-size: 2.2rem;
  color: #ff69b4;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const FinancingDescription = styled.div`
  color: #d1d5db;
  font-size: 1.15rem;
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
      margin-bottom: 0.75rem;
      position: relative;

      &::marker {
        color: #ff69b4;
      }
    }
  }
`;

const ProsCons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProConBox = styled.div<{ type: 'pro' | 'con' }>`
  background-color: ${({ type }) => type === 'pro' ? 'rgba(0, 255, 136, 0.05)' : 'rgba(255, 105, 180, 0.05)'};
  border: 1px solid ${({ type }) => type === 'pro' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 105, 180, 0.2)'};
  border-radius: 8px;
  padding: 1.5rem;

  h4 {
    font-size: 1.3rem;
    color: ${({ type }) => type === 'pro' ? '#00ff88' : '#ff69b4'};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.2rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: start;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      color: #d1d5db;
      font-size: 1rem;

      svg {
        color: ${({ type }) => type === 'pro' ? '#00ff88' : '#ff69b4'};
        font-size: 1rem;
        flex-shrink: 0;
        margin-top: 0.3rem;
      }
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

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;

    li {
      color: #d1d5db;
      margin-bottom: 0.75rem;
      line-height: 1.6;
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

const CommercialSolarFinancing: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <HeroSection>
        <HeroTitle>Commercial Solar Financing</HeroTitle>
        <HeroSubtitle>
          Flexible financing solutions designed for Massachusetts businesses. Find the perfect option to start saving with solar energy.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <IntroText>
          <p>
            Going solar doesn&apos;t have to strain your business&apos;s cash flow. We offer <strong>multiple financing pathways</strong> to help Massachusetts businesses access clean, affordable solar energy.
          </p>
          <p>
            Whether you want to own your system outright, lease equipment, or pay only for the power you use, Solar Señorita has a solution that fits your financial goals and operational needs.
          </p>
        </IntroText>

        <FinancingGrid>
          <FinancingCard>
            <FinancingHeader>
              <IconWrapper>
                <FaDollarSign />
              </IconWrapper>
              <FinancingTitle>Cash Purchase</FinancingTitle>
            </FinancingHeader>
            <FinancingDescription>
              <p>
                <strong>The fastest path to maximum savings.</strong> Purchase your solar system outright and immediately take advantage of all available federal and state incentives.
              </p>
              <p>
                <strong>How it works:</strong> Pay the full system cost upfront and own your solar array from day one. You&apos;ll receive all tax credits, depreciation benefits, and SMART program payments.
              </p>
              <p>
                <strong>Financial benefits:</strong>
              </p>
              <ul>
                <li><strong>30% Federal Investment Tax Credit (ITC)</strong> — deduct from federal taxes</li>
                <li><strong>85% MACRS accelerated depreciation</strong> — recover 85% of system cost over 5 years</li>
                <li><strong>Massachusetts SMART program payments</strong> — earn credits for 10 years</li>
                <li><strong>50%+ cost recovery in Year 1</strong> through combined incentives</li>
                <li><strong>Highest ROI</strong> — typically 15-25% annual return</li>
                <li><strong>3-7 year payback period</strong> on average</li>
              </ul>
              <ProsCons>
                <ProConBox type="pro">
                  <h4><FaCheckCircle /> Pros</h4>
                  <ul>
                    <li><FaCheckCircle /> Maximum financial return</li>
                    <li><FaCheckCircle /> All incentives go to you</li>
                    <li><FaCheckCircle /> Increased property value</li>
                    <li><FaCheckCircle /> Complete system control</li>
                    <li><FaCheckCircle /> Fastest payback period</li>
                  </ul>
                </ProConBox>
                <ProConBox type="con">
                  <h4><FaTimes /> Considerations</h4>
                  <ul>
                    <li><FaTimes /> Requires upfront capital</li>
                    <li><FaTimes /> You own maintenance responsibility</li>
                    <li><FaTimes /> Need sufficient tax appetite</li>
                  </ul>
                </ProConBox>
              </ProsCons>
            </FinancingDescription>
          </FinancingCard>

          <FinancingCard>
            <FinancingHeader>
              <IconWrapper>
                <FaChartLine />
              </IconWrapper>
              <FinancingTitle>Solar Loan / Financing Program</FinancingTitle>
            </FinancingHeader>
            <FinancingDescription>
              <p>
                <strong>Own your system with zero money down.</strong> Finance 100% of your solar installation and start saving immediately with low monthly payments.
              </p>
              <p>
                <strong>How it works:</strong> Secure a loan through our financing partners, pay nothing upfront, and make fixed monthly payments over 5-25 years. You own the system and receive all tax benefits.
              </p>
              <p>
                <strong>Financing features:</strong>
              </p>
              <ul>
                <li><strong>$0 down payment options</strong> available</li>
                <li><strong>Competitive interest rates</strong> for qualified businesses</li>
                <li><strong>Flexible terms</strong> — 5, 10, 15, 20, or 25 years</li>
                <li><strong>You keep all incentives</strong> — ITC, depreciation, SMART credits</li>
                <li><strong>Predictable monthly payments</strong> lower than most electric bills</li>
                <li><strong>Instant positive cash flow</strong> in many cases</li>
              </ul>
              <p>
                <strong>Example:</strong> A $100,000 system financed over 10 years at 4.5% = approximately $1,036/month. With energy savings of $1,200+/month, you&apos;re cash-flow positive from day one!
              </p>
              <ProsCons>
                <ProConBox type="pro">
                  <h4><FaCheckCircle /> Pros</h4>
                  <ul>
                    <li><FaCheckCircle /> No upfront capital required</li>
                    <li><FaCheckCircle /> Own system and all incentives</li>
                    <li><FaCheckCircle /> Predictable payments</li>
                    <li><FaCheckCircle /> Immediate cash flow savings</li>
                    <li><FaCheckCircle /> Build business equity</li>
                  </ul>
                </ProConBox>
                <ProConBox type="con">
                  <h4><FaTimes /> Considerations</h4>
                  <ul>
                    <li><FaTimes /> Interest costs over loan term</li>
                    <li><FaTimes /> Monthly payment obligation</li>
                    <li><FaTimes /> Credit approval required</li>
                  </ul>
                </ProConBox>
              </ProsCons>
            </FinancingDescription>
          </FinancingCard>

          <FinancingCard>
            <FinancingHeader>
              <IconWrapper>
                <FaFileInvoiceDollar />
              </IconWrapper>
              <FinancingTitle>Power Purchase Agreement (PPA)</FinancingTitle>
            </FinancingHeader>
            <FinancingDescription>
              <p>
                <strong>Save money with zero upfront costs and no system ownership.</strong> A third-party investor installs and maintains solar panels on your property. You simply purchase the electricity at a discounted rate.
              </p>
              <p>
                <strong>How it works:</strong> We install a solar system on your roof at no cost to you. You pay only for the solar electricity you use at a pre-negotiated rate that&apos;s lower than utility prices. The PPA provider owns the system, handles maintenance, and takes the tax benefits.
              </p>
              <p>
                <strong>PPA features:</strong>
              </p>
              <ul>
                <li><strong>$0 upfront investment</strong> — absolutely no capital required</li>
                <li><strong>Immediate savings</strong> — typically 10-20% below utility rates</li>
                <li><strong>No maintenance responsibility</strong> — provider handles everything</li>
                <li><strong>Fixed or escalating rates</strong> — predictable long-term costs</li>
                <li><strong>10-25 year contract terms</strong> available</li>
                <li><strong>Performance guarantee</strong> — you only pay for what&apos;s produced</li>
                <li><strong>Option to purchase</strong> after contract term</li>
              </ul>
              <ProsCons>
                <ProConBox type="pro">
                  <h4><FaCheckCircle /> Pros</h4>
                  <ul>
                    <li><FaCheckCircle /> Zero upfront cost</li>
                    <li><FaCheckCircle /> Immediate bill savings</li>
                    <li><FaCheckCircle /> No maintenance burden</li>
                    <li><FaCheckCircle /> No performance risk</li>
                    <li><FaCheckCircle /> Predictable energy costs</li>
                  </ul>
                </ProConBox>
                <ProConBox type="con">
                  <h4><FaTimes /> Considerations</h4>
                  <ul>
                    <li><FaTimes /> Don&apos;t own system</li>
                    <li><FaTimes /> No tax benefits for you</li>
                    <li><FaTimes /> Lower total savings vs. ownership</li>
                    <li><FaTimes /> Long-term contract commitment</li>
                  </ul>
                </ProConBox>
              </ProsCons>
            </FinancingDescription>
          </FinancingCard>

          <FinancingCard>
            <FinancingHeader>
              <IconWrapper>
                <FaHandshake />
              </IconWrapper>
              <FinancingTitle>Operating Lease</FinancingTitle>
            </FinancingHeader>
            <FinancingDescription>
              <p>
                <strong>Access solar energy with minimal upfront cost and preserve capital.</strong> Similar to leasing equipment, you make monthly lease payments while a third-party owns the system.
              </p>
              <p>
                <strong>How it works:</strong> A solar lease provider owns and maintains the system while you make fixed monthly payments for access to the solar energy. After the lease term (typically 7-10 years), you often have the option to purchase the system at fair market value.
              </p>
              <p>
                <strong>Operating lease features:</strong>
              </p>
              <ul>
                <li><strong>Low to zero upfront costs</strong> preserve working capital</li>
                <li><strong>Fixed monthly payments</strong> for predictable budgeting</li>
                <li><strong>Maintenance included</strong> in most agreements</li>
                <li><strong>Potential buyout option</strong> after 7 years at ~15% or fair market value</li>
                <li><strong>Off-balance-sheet financing</strong> in many cases</li>
                <li><strong>Immediate energy cost reduction</strong></li>
              </ul>
              <ProsCons>
                <ProConBox type="pro">
                  <h4><FaCheckCircle /> Pros</h4>
                  <ul>
                    <li><FaCheckCircle /> Preserves working capital</li>
                    <li><FaCheckCircle /> Predictable monthly costs</li>
                    <li><FaCheckCircle /> Maintenance typically included</li>
                    <li><FaCheckCircle /> Off-balance-sheet option</li>
                    <li><FaCheckCircle /> Potential buyout at term end</li>
                  </ul>
                </ProConBox>
                <ProConBox type="con">
                  <h4><FaTimes /> Considerations</h4>
                  <ul>
                    <li><FaTimes /> Don&apos;t own the system</li>
                    <li><FaTimes /> Tax benefits go to lessor</li>
                    <li><FaTimes /> Monthly payment obligation</li>
                    <li><FaTimes /> Lower total ROI than ownership</li>
                  </ul>
                </ProConBox>
              </ProsCons>
            </FinancingDescription>
          </FinancingCard>

          <FinancingCard>
            <FinancingHeader>
              <IconWrapper>
                <FaBuilding />
              </IconWrapper>
              <FinancingTitle>Solar Site Lease</FinancingTitle>
            </FinancingHeader>
            <FinancingDescription>
              <p>
                <strong>Earn passive income from unused roof or land space.</strong> A third-party developer installs and operates solar panels on your property, and you receive annual lease payments without using the electricity produced.
              </p>
              <p>
                <strong>How it works:</strong> An investor leases your roof or land, installs solar panels, and pays you an annual negotiated rate. They own and maintain the system, sell the power to the grid or other customers, and you receive steady lease income.
              </p>
              <p>
                <strong>Site lease features:</strong>
              </p>
              <ul>
                <li><strong>Zero investment required</strong> from property owner</li>
                <li><strong>Annual lease payments</strong> provide passive income stream</li>
                <li><strong>No operational involvement</strong> — investor handles everything</li>
                <li><strong>Long-term contracts</strong> (20-25 years) with payment escalations</li>
                <li><strong>Ideal for large roofs or land parcels</strong> with high sun exposure</li>
                <li><strong>Additional property value</strong> with income-generating lease</li>
              </ul>
              <p>
                <strong>Best for:</strong> Commercial properties with large, underutilized roof space or vacant land parcels. Common with warehouses, distribution centers, and agricultural properties.
              </p>
              <ProsCons>
                <ProConBox type="pro">
                  <h4><FaCheckCircle /> Pros</h4>
                  <ul>
                    <li><FaCheckCircle /> Passive income stream</li>
                    <li><FaCheckCircle /> Zero capital required</li>
                    <li><FaCheckCircle /> No operational responsibility</li>
                    <li><FaCheckCircle /> Long-term guaranteed payments</li>
                    <li><FaCheckCircle /> Monetize unused space</li>
                  </ul>
                </ProConBox>
                <ProConBox type="con">
                  <h4><FaTimes /> Considerations</h4>
                  <ul>
                    <li><FaTimes /> Don&apos;t use the power generated</li>
                    <li><FaTimes /> No direct energy cost savings</li>
                    <li><FaTimes /> Lease income may be lower than ownership savings</li>
                    <li><FaTimes /> Long-term property commitment</li>
                  </ul>
                </ProConBox>
              </ProsCons>
            </FinancingDescription>
          </FinancingCard>
        </FinancingGrid>

        <HighlightBox>
          <h3>Which Financing Option Is Right for Your Business?</h3>
          <p>
            The best choice depends on your business goals, tax situation, cash flow, and long-term plans:
          </p>
          <ul>
            <li><strong>Choose Cash Purchase if:</strong> You have available capital, strong tax appetite, and want maximum ROI</li>
            <li><strong>Choose Solar Loan if:</strong> You want ownership benefits without upfront costs and have good credit</li>
            <li><strong>Choose PPA if:</strong> You want immediate savings with zero investment and no ownership responsibility</li>
            <li><strong>Choose Operating Lease if:</strong> You want to preserve capital while accessing solar with predictable payments</li>
            <li><strong>Choose Site Lease if:</strong> You have unused roof/land space and want passive income without using the power</li>
          </ul>
        </HighlightBox>

        <HighlightBox>
          <h3>Federal & State Incentives for Commercial Solar</h3>
          <p>
            Massachusetts businesses benefit from exceptional solar incentives:
          </p>
          <ul>
            <li><strong>30% Federal Investment Tax Credit (ITC)</strong> through 2032</li>
            <li><strong>85% MACRS Accelerated Depreciation</strong> — recover most costs over 5 years</li>
            <li><strong>Massachusetts SMART Program</strong> — earn $0.20-0.30/kWh for 10 years</li>
            <li><strong>Net Metering</strong> — credit for excess production sent to grid</li>
            <li><strong>Property & Sales Tax Exemptions</strong> — no additional taxes on solar value</li>
          </ul>
          <p>
            These incentives can reduce your effective system cost by 50-60% in the first year, dramatically improving ROI regardless of which financing option you choose.
          </p>
        </HighlightBox>
      </ContentSection>

      <CTASection>
        <h2>Ready to Explore Financing Options?</h2>
        <p>Schedule a free consultation and we&apos;ll help you find the perfect financing solution for your business.</p>
        <CTAButton href="tel:+17814266300">Call +1 781-426-6300</CTAButton>
      </CTASection>

      <Footer />
    </PageContainer>
  );
};

export default CommercialSolarFinancing;