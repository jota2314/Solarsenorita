'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FAQContainer = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const FAQItem = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff69b4;
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #ff69b4;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.2rem;
  }

  svg {
    color: #ff69b4;
    font-size: 1.2rem;
    flex-shrink: 0;
    margin-left: 1rem;
  }
`;

const FAQAnswer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem')};

  @media (max-width: 768px) {
    padding: ${({ isOpen }) => (isOpen ? '0 1.2rem 1.2rem' : '0 1.2rem')};
  }

  p {
    color: #d1d5db;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;

    li {
      color: #d1d5db;
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 0.5rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }

  strong {
    color: #ff69b4;
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

interface FAQ {
  question: string;
  answer: string | React.ReactElement;
}

const ResidentialSolarFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "How much does a residential solar system cost in Massachusetts?",
      answer: (
        <>
          <p>The cost of a residential solar system varies based on your home&apos;s energy needs, roof size, and system capacity. Most Massachusetts homeowners install systems ranging from $15,000 to $30,000 before incentives.</p>
          <p><strong>However, after federal tax credits, state incentives, and SMART program benefits, your net cost could be 40-60% less!</strong> Many of our customers qualify for $0 down financing options, making solar affordable from day one.</p>
        </>
      )
    },
    {
      question: "What is the Massachusetts SMART Program?",
      answer: (
        <>
          <p>The Massachusetts Solar Massachusetts Renewable Target (SMART) program is a state incentive that pays you for the solar energy your system produces. You earn credits for every kilowatt-hour (kWh) your panels generate for 10 years.</p>
          <p><strong>This means you get paid just for having solar panels on your roof!</strong> The SMART program rate varies by utility company and location, but it significantly improves your return on investment.</p>
        </>
      )
    },
    {
      question: "Will solar panels work during a power outage?",
      answer: (
        <>
          <p>Standard solar panel systems are designed to shut off during power outages for safety reasons (to protect utility workers). However, <strong>if you add a battery storage system</strong> like the Tesla Powerwall or Enphase battery, you can have backup power during outages.</p>
          <p>Battery storage allows you to store excess solar energy generated during the day and use it at night or during grid outages, giving you true energy independence.</p>
        </>
      )
    },
    {
      question: "How long do solar panels last?",
      answer: (
        <>
          <p>Solar panels are built to last 25-30+ years with minimal maintenance. Most manufacturers offer a <strong>25-year performance warranty</strong> that guarantees at least 80-85% of the original output after 25 years.</p>
          <p>The inverter (which converts DC power to AC power) typically lasts 10-15 years, though many modern microinverters come with 25-year warranties. After 25 years, your panels will still generate electricity, just slightly less efficiently.</p>
        </>
      )
    },
    {
      question: "Do I need to replace my roof before installing solar panels?",
      answer: (
        <>
          <p>Not necessarily! We provide a free roof assessment as part of your solar consultation. If your roof is in good condition, we can proceed with installation right away.</p>
          <p><strong>If your roof needs replacement, you may qualify for a new roof through our financing partners.</strong> Installing solar and a new roof together is often more cost-effective than doing them separately, and some programs include roofing as part of the solar financing.</p>
        </>
      )
    },
    {
      question: "What is net metering and how does it work in Massachusetts?",
      answer: (
        <>
          <p>Net metering allows you to send excess solar energy back to the grid in exchange for credits on your electric bill. When your panels produce more electricity than you use (typically during sunny days), the surplus goes to the grid and your meter literally runs backward.</p>
          <p><strong>These credits can be used to offset your electric bill during times when your panels aren&apos;t producing enough</strong> (like at night or during winter). Massachusetts has strong net metering policies, making solar even more valuable for homeowners.</p>
        </>
      )
    },
    {
      question: "How much can I save with solar panels?",
      answer: (
        <>
          <p>The average Massachusetts homeowner saves <strong>$20,000 to $40,000</strong> over 25 years with solar panels. Your actual savings depend on:</p>
          <ul>
            <li>Your current electricity usage and rates</li>
            <li>System size and efficiency</li>
            <li>Available incentives (federal tax credit, SMART program, etc.)</li>
            <li>Net metering credits</li>
            <li>Future electricity rate increases (which you&apos;ll be protected from)</li>
          </ul>
          <p>Most customers see a <strong>return on investment within 6-10 years</strong> and enjoy 15-20+ years of virtually free electricity afterward.</p>
        </>
      )
    },
    {
      question: "What is the federal solar tax credit?",
      answer: (
        <>
          <p>The Federal Investment Tax Credit (ITC) allows you to deduct <strong>30% of your solar system cost</strong> from your federal taxes. If your system costs $25,000, you can claim a $7,500 tax credit!</p>
          <p>This credit applies to the total system cost including installation, equipment, and any associated expenses. The 30% rate is available through 2032, then steps down to 26% in 2033 and 22% in 2034.</p>
        </>
      )
    },
    {
      question: "Do solar panels require a lot of maintenance?",
      answer: (
        <>
          <p>Solar panels require <strong>very little maintenance</strong>. They have no moving parts and are designed to withstand Massachusetts weather including snow, rain, and hail.</p>
          <p>Occasional cleaning (1-2 times per year) can help optimize performance, though rain typically does most of the work. We recommend an annual inspection to ensure all components are functioning properly. Most systems include monitoring so you can track performance from your phone.</p>
        </>
      )
    },
    {
      question: "How long does the installation process take?",
      answer: (
        <>
          <p>From consultation to flip the switch, the entire process typically takes <strong>2-4 months</strong>:</p>
          <ul>
            <li><strong>Week 1-2:</strong> Free consultation, site assessment, and custom proposal</li>
            <li><strong>Week 2-4:</strong> Permit applications and utility interconnection paperwork</li>
            <li><strong>Week 4-12:</strong> Permit approval (timeline varies by municipality)</li>
            <li><strong>Week 12-14:</strong> Installation (typically 1-3 days)</li>
            <li><strong>Week 14-16:</strong> Final inspection and utility approval</li>
          </ul>
          <p>Once approved, your system is turned on and you start generating clean, free electricity!</p>
        </>
      )
    },
    {
      question: "Will solar panels damage my roof?",
      answer: (
        <>
          <p><strong>No!</strong> When installed properly by certified professionals, solar panels actually protect your roof from weather damage. We use specialized mounting systems that are designed to preserve your roof&apos;s integrity.</p>
          <p>Our installers are trained to seal all penetrations and ensure your roof remains watertight. In fact, the area under your solar panels will be better protected from UV rays, rain, and debris than the rest of your roof.</p>
        </>
      )
    },
    {
      question: "What happens if I sell my home?",
      answer: (
        <>
          <p>Solar panels <strong>increase your home&apos;s value</strong> by an average of 4-6%! When selling your home, you have several options:</p>
          <ul>
            <li><strong>Owned system:</strong> The solar panels transfer to the new owner, adding to your home&apos;s sale value</li>
            <li><strong>Leased system:</strong> The new homeowner can assume the lease, or you can pay off the remaining balance</li>
            <li><strong>Financed system:</strong> You can pay off the loan with sale proceeds or transfer the loan to the buyer</li>
          </ul>
          <p>Studies show homes with solar panels sell faster and for more money than comparable homes without solar.</p>
        </>
      )
    }
  ];

  return (
    <PageContainer>
      <Header />
      <HeroSection>
        <HeroTitle>Residential Solar FAQ</HeroTitle>
        <HeroSubtitle>
          Everything you need to know about going solar in Massachusetts. Get answers to the most common questions from homeowners just like you.
        </HeroSubtitle>
      </HeroSection>

      <FAQContainer>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </FAQQuestion>
            <FAQAnswer isOpen={openIndex === index}>
              {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQContainer>

      <CTASection>
        <h2>Ready to Start Your Solar Journey?</h2>
        <p>Get a free consultation and custom proposal for your Massachusetts home today.</p>
        <CTAButton href="tel:+17814266300">Call +1 781-426-6300</CTAButton>
      </CTASection>

      <Footer />
    </PageContainer>
  );
};

export default ResidentialSolarFAQ;