'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { BlogPost as BlogPostType } from '@/lib/blog';

const BlogContainer = styled.article`
  background-color: #1a1a1a;
  padding: 6rem 2rem;
  min-height: 80vh;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff69b4;
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00ff88;
  }
`;

const BlogHeader = styled.header`
  margin-bottom: 3rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: #ff69b4;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background-color: rgba(0, 255, 136, 0.2);
  color: #00ff88;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const BlogImage = styled.div<{ $hasImage: boolean }>`
  width: 100%;
  height: 300px;
  background: ${props => props.$hasImage 
    ? 'linear-gradient(45deg, #ff69b4, #00ff88)' 
    : 'linear-gradient(45deg, #ff69b4, #00ff88)'};
  border-radius: 15px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  
  &::after {
    content: '☀️';
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.3));
  }
  
  @media (max-width: 768px) {
    height: 200px;
    font-size: 3rem;
  }
`;

const BlogContent = styled.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  font-size: 1.1rem;
  
  h2 {
    color: #ff69b4;
    font-size: 1.8rem;
    margin: 2rem 0 1rem 0;
    font-weight: 600;
  }
  
  h3 {
    color: #00ff88;
    font-size: 1.4rem;
    margin: 1.5rem 0 0.8rem 0;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  blockquote {
    border-left: 4px solid #ff69b4;
    background-color: rgba(255, 105, 180, 0.1);
    padding: 1rem 1.5rem;
    margin: 2rem 0;
    border-radius: 0 10px 10px 0;
    font-style: italic;
  }
  
  strong {
    color: #00ff88;
    font-weight: 600;
  }
  
  a {
    color: #ff69b4;
    text-decoration: underline;
    
    &:hover {
      color: #00ff88;
    }
  }
`;

const CallToAction = styled.div`
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(0, 255, 136, 0.1) 100%);
  border: 1px solid rgba(255, 105, 180, 0.3);
  border-radius: 15px;
  padding: 2rem;
  margin: 3rem 0;
  text-align: center;
  
  h3 {
    color: #ff69b4;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #ff69b4, #00ff88);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 105, 180, 0.4);
  }
`;

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  // Mock content for development
  const mockContent = `
# ${post.title}

${post.excerpt}

## Understanding Solar in Massachusetts

Massachusetts continues to be a leader in solar energy adoption, offering some of the best incentives and programs in the country. Whether you're in Boston, Worcester, or any other Massachusetts city, solar panels can provide significant savings on your energy bills.

### Key Benefits of Solar in Massachusetts:

- **Federal Tax Credit**: 30% of installation costs
- **SMART Program**: Earn credits for excess energy production
- **Net Metering**: Get credit for energy you send back to the grid
- **Property Tax Exemption**: Solar installations don't increase property taxes

## How Solar Panels Work in Massachusetts Weather

Many homeowners wonder if solar panels work effectively in Massachusetts' varied climate. The answer is yes! Solar panels actually perform better in cooler temperatures, and modern panels can generate electricity even on cloudy days.

### Winter Performance

Snow can actually help clean your panels when it melts, and the reflection from snow can boost energy production. Most panels are installed at an angle that allows snow to slide off naturally.

## Getting Started with Solar

If you're considering solar for your Massachusetts home, here are the key steps:

1. **Energy Assessment**: Evaluate your current energy usage
2. **Site Analysis**: Determine if your roof is suitable for solar
3. **Financial Analysis**: Calculate potential savings and payback period
4. **Installation**: Professional installation typically takes 1-3 days
5. **Interconnection**: Connect to the grid and start saving

## Massachusetts Solar Incentives

The state offers multiple incentive programs that make solar more affordable than ever:

- **SMART Program**: Declining block tariff that rewards early adopters
- **Solar Massachusetts Renewable Target (SMART)**: Long-term contracts for energy production
- **Green Communities**: Additional local incentives in participating municipalities

Ready to join thousands of Massachusetts homeowners who are saving money with solar energy?
  `;

  return (
    <BlogContainer>
      <ContentWrapper>
        <BackLink href="/blog">
          ← Back to Blog
        </BackLink>
        
        <BlogHeader>
          <BlogTitle>{post.title}</BlogTitle>
          
          <BlogMeta>
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </BlogMeta>
          
          <BlogTags>
            {post.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </BlogTags>
        </BlogHeader>
        
        <BlogImage $hasImage={!!post.image} />
        
        <BlogContent>
          {/* In production, this would render the actual markdown content */}
          <div dangerouslySetInnerHTML={{ __html: mockContent.replace(/\n/g, '<br/>') }} />
        </BlogContent>
        
        <CallToAction>
          <h3>Ready to Go Solar in Massachusetts?</h3>
          <p>
            Get your free solar consultation today and discover how much you can save 
            with solar panels for your Massachusetts home.
          </p>
          <CTAButton href="/#consultation">
            Get Free Consultation
          </CTAButton>
        </CallToAction>
      </ContentWrapper>
    </BlogContainer>
  );
};

export default BlogPost;