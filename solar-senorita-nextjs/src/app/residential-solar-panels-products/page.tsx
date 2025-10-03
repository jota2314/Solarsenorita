'use client';

import React from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaSolarPanel, FaBatteryFull, FaMicrochip, FaChartLine, FaShieldAlt, FaSnowflake, FaCheckCircle } from 'react-icons/fa';

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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ProductCard = styled.div`
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

const ProductHeader = styled.div`
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

const ProductTitle = styled.h2`
  font-size: 2.2rem;
  color: #ff69b4;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ProductDescription = styled.div`
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

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: start;
  gap: 0.75rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  svg {
    color: #00ff88;
    font-size: 1.3rem;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  span {
    color: #d1d5db;
    font-size: 1rem;
    line-height: 1.5;
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

const ResidentialSolarPanelsProducts: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <HeroSection>
        <HeroTitle>Premium Solar Panels & Products</HeroTitle>
        <HeroSubtitle>
          Solar Señorita installs only the highest quality solar equipment from industry-leading manufacturers. Every component is carefully selected for maximum performance, durability, and value.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <IntroText>
          <p>
            Your solar system is a <strong>25+ year investment</strong> in your home and your future. That&apos;s why we only work with proven, top-tier manufacturers who stand behind their products with industry-leading warranties.
          </p>
          <p>
            From high-efficiency panels to smart monitoring systems, every component works together to maximize your energy production and savings.
          </p>
        </IntroText>

        <ProductsGrid>
          <ProductCard>
            <ProductHeader>
              <IconWrapper>
                <FaSolarPanel />
              </IconWrapper>
              <ProductTitle>Premium Solar Panels</ProductTitle>
            </ProductHeader>
            <ProductDescription>
              <p>
                We install <strong>tier-1 monocrystalline solar panels</strong> from leading manufacturers including Q CELLS, REC Solar, Canadian Solar, and LONGi. These panels offer the perfect balance of efficiency, durability, and value.
              </p>
              <p>
                <strong>Our panels feature:</strong>
              </p>
              <ul>
                <li><strong>340-420+ watt output per panel</strong> for maximum energy production</li>
                <li><strong>21-22%+ efficiency ratings</strong> converting more sunlight into electricity</li>
                <li><strong>25-year performance warranty</strong> guaranteeing 85%+ output after 25 years</li>
                <li><strong>Weather-resistant construction</strong> built for Massachusetts winters</li>
                <li><strong>All-black sleek design</strong> for a modern, attractive appearance</li>
                <li><strong>Anti-reflective glass</strong> maximizing light absorption</li>
              </ul>
              <p>
                These premium panels are designed to withstand harsh New England weather including heavy snow loads, high winds, and extreme temperature fluctuations. They&apos;ll keep producing clean energy for decades to come.
              </p>
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductHeader>
              <IconWrapper>
                <FaMicrochip />
              </IconWrapper>
              <ProductTitle>Enphase Microinverters</ProductTitle>
            </ProductHeader>
            <ProductDescription>
              <p>
                We exclusively use <strong>Enphase microinverter technology</strong>, the gold standard in solar energy conversion. Unlike traditional string inverters, each panel gets its own microinverter for independent optimization.
              </p>
              <FeaturesList>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Panel-level optimization:</strong> Each panel performs independently for maximum production</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Shade tolerance:</strong> One shaded panel won&apos;t affect the entire system</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>25-year warranty:</strong> Industry-leading protection and reliability</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Safer system:</strong> No high-voltage DC on your roof</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Better monitoring:</strong> Track each panel&apos;s performance individually</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Easy expansion:</strong> Add more panels later without replacing equipment</span>
                </FeatureItem>
              </FeaturesList>
              <p style={{ marginTop: '1.5rem' }}>
                Enphase microinverters typically produce <strong>10-20% more energy</strong> than string inverter systems, especially on roofs with any shading, multiple orientations, or complex layouts.
              </p>
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductHeader>
              <IconWrapper>
                <FaBatteryFull />
              </IconWrapper>
              <ProductTitle>Battery Storage Systems</ProductTitle>
            </ProductHeader>
            <ProductDescription>
              <p>
                Take your energy independence to the next level with <strong>battery storage</strong>. Store excess solar energy generated during the day and use it at night or during power outages.
              </p>
              <p>
                <strong>We offer premium battery solutions:</strong>
              </p>
              <ul>
                <li><strong>Enphase IQ Battery:</strong> Modular design with 3.3-40 kWh capacity, seamless integration with Enphase microinverters</li>
                <li><strong>Tesla Powerwall:</strong> 13.5 kWh capacity with industry-leading efficiency and smart features</li>
                <li><strong>LG Energy Solution:</strong> High-capacity options with excellent warranty coverage</li>
              </ul>
              <FeaturesList style={{ marginTop: '1.5rem' }}>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Backup power:</strong> Keep lights, appliances, and devices running during outages</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Time-of-use savings:</strong> Use stored energy during expensive peak rate hours</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Energy independence:</strong> Reduce reliance on the grid</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>10-15 year warranty:</strong> Long-term protection and peace of mind</span>
                </FeatureItem>
              </FeaturesList>
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductHeader>
              <IconWrapper>
                <FaChartLine />
              </IconWrapper>
              <ProductTitle>Enphase Energy Monitoring</ProductTitle>
            </ProductHeader>
            <ProductDescription>
              <p>
                Every system includes the <strong>Enphase Enlighten monitoring platform</strong>, giving you complete visibility into your solar production from your smartphone, tablet, or computer.
              </p>
              <FeaturesList>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Real-time production:</strong> See exactly how much energy you&apos;re generating right now</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Panel-level data:</strong> Monitor each individual panel&apos;s performance</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Environmental impact:</strong> Track CO₂ offset and trees planted equivalent</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Historical data:</strong> View daily, monthly, and lifetime production</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Instant alerts:</strong> Get notified if any issue is detected</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Consumption monitoring:</strong> Optional add-on to track your home&apos;s energy usage</span>
                </FeatureItem>
              </FeaturesList>
              <p style={{ marginTop: '1.5rem' }}>
                Monitoring is completely free for the life of your system, and our team can access your data remotely if you ever need technical support.
              </p>
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductHeader>
              <IconWrapper>
                <FaShieldAlt />
              </IconWrapper>
              <ProductTitle>Premium Racking & Mounting</ProductTitle>
            </ProductHeader>
            <ProductDescription>
              <p>
                Your solar panels need a solid foundation. We use <strong>industry-leading racking systems</strong> from IronRidge, Unirac, and SnapNrack designed specifically for your roof type.
              </p>
              <FeaturesList>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Engineered for wind/snow:</strong> Meets or exceeds all Massachusetts building codes</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Waterproof flashings:</strong> Multiple sealing layers prevent any roof leaks</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Corrosion-resistant:</strong> Aluminum and stainless steel construction for 25+ year lifespan</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Low-profile design:</strong> Sleek appearance that complements your roof</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Critter guards included:</strong> Keep squirrels, birds, and pests away from wiring</span>
                </FeatureItem>
                <FeatureItem>
                  <FaCheckCircle />
                  <span><strong>Optional snow guards:</strong> Prevent dangerous snow/ice slides from your roof</span>
                </FeatureItem>
              </FeaturesList>
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductHeader>
              <IconWrapper>
                <FaSnowflake />
              </IconWrapper>
              <ProductTitle>Protection & Safety Features</ProductTitle>
            </ProductHeader>
            <ProductDescription>
              <p>
                We include additional protection features to ensure your system performs optimally and safely for decades in the harsh Massachusetts climate.
              </p>
              <ul>
                <li><strong>Critter Guards:</strong> Mesh barriers prevent animals from nesting under panels and chewing wiring</li>
                <li><strong>Snow Guards:</strong> Prevent dangerous snow and ice avalanches from sliding off solar panels</li>
                <li><strong>Rapid Shutdown:</strong> Required safety feature that instantly de-energizes panels in emergencies</li>
                <li><strong>Surge Protection:</strong> Protects your system and home from lightning strikes and power surges</li>
                <li><strong>GFCI Protection:</strong> Ground fault protection for maximum electrical safety</li>
              </ul>
            </ProductDescription>
          </ProductCard>
        </ProductsGrid>

        <HighlightBox>
          <h3>Why Equipment Quality Matters</h3>
          <p>
            Your solar system will be on your roof for 25-30+ years. Choosing quality equipment from reputable manufacturers means:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
            <li><strong>Higher energy production</strong> over the system&apos;s lifetime</li>
            <li><strong>Better warranties</strong> protecting your investment</li>
            <li><strong>Proven reliability</strong> with lower failure rates</li>
            <li><strong>Higher home resale value</strong> with recognized brands</li>
            <li><strong>Better financing options</strong> from lenders who trust quality equipment</li>
            <li><strong>Peace of mind</strong> knowing your system will perform as promised</li>
          </ul>
          <p style={{ marginTop: '1.5rem' }}>
            At Solar Señorita, we only install equipment we&apos;d put on our own homes. No shortcuts, no cheap alternatives, just proven products that deliver results.
          </p>
        </HighlightBox>

        <HighlightBox>
          <h3>All Equipment Includes Comprehensive Warranties</h3>
          <p>
            Every component comes protected by industry-leading warranties:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
            <li><strong>Solar Panels:</strong> 25-year performance warranty + 12-year product warranty</li>
            <li><strong>Enphase Microinverters:</strong> 25-year warranty</li>
            <li><strong>Battery Storage:</strong> 10-15 year warranty depending on model</li>
            <li><strong>Racking & Mounting:</strong> 10-25 year warranty</li>
            <li><strong>Workmanship:</strong> 10-year installation warranty from Solar Señorita</li>
          </ul>
        </HighlightBox>
      </ContentSection>

      <CTASection>
        <h2>Ready to Learn More About Our Premium Products?</h2>
        <p>Get a free consultation and custom proposal with detailed equipment specifications for your home.</p>
        <CTAButton href="tel:+17814266300">Call +1 781-426-6300</CTAButton>
      </CTASection>

      <Footer />
    </PageContainer>
  );
};

export default ResidentialSolarPanelsProducts;