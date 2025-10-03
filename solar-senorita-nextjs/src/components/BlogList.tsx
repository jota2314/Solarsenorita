'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

const BlogContainer = styled.section`
  background-color: #1a1a1a;
  padding: 6rem 2rem;
  min-height: 80vh;
  
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
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BlogCard = styled.article`
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.05) 0%, rgba(18, 18, 18, 0.95) 100%);
  border: 1px solid rgba(255, 105, 180, 0.2);
  border-radius: 15px;
  padding: 2rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 105, 180, 0.4);
  }
`;

const BlogImage = styled.div<{ $hasImage: boolean }>`
  width: 100%;
  height: 200px;
  background: ${props => props.$hasImage 
    ? 'linear-gradient(45deg, #ff69b4, #00ff88)' 
    : 'linear-gradient(45deg, #ff69b4, #00ff88)'};
  border-radius: 10px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  
  &::after {
    content: '☀️';
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  }
`;

const BlogTitle = styled.h2`
  color: #ff69b4;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.3;
`;

const BlogExcerpt = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: rgba(0, 255, 136, 0.2);
  color: #00ff88;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ReadMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #ff69b4, #00ff88);
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: rgba(255, 255, 255, 0.6);
  
  h3 {
    color: #ff69b4;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

// Mock data for development - will be replaced by API/automated content
const mockPosts: BlogPost[] = [
  {
    slug: 'massachusetts-solar-incentives-2025',
    title: 'Massachusetts Solar Incentives Guide 2025: Everything You Need to Know',
    excerpt: 'Discover all the solar incentives available in Massachusetts for 2025, including the SMART program, federal tax credits, and local rebates that can save you thousands.',
    content: '',
    publishedAt: '2025-01-15T00:00:00Z',
    image: '/blog/solar-incentives-ma.jpg',
    tags: ['Massachusetts', 'Solar Incentives', 'SMART Program', 'Tax Credits'],
    author: 'Solar Señorita',
    readTime: 8,
    featured: true
  },
  {
    slug: 'winter-solar-performance-massachusetts',
    title: 'How Solar Panels Perform in Massachusetts Winters',
    excerpt: 'Learn why solar panels can actually perform better in cold weather and how to maximize your solar energy production during Massachusetts winters.',
    content: '',
    publishedAt: '2025-01-08T00:00:00Z',
    image: '/blog/winter-solar-ma.jpg',
    tags: ['Winter Solar', 'Massachusetts Weather', 'Solar Performance'],
    author: 'Solar Señorita',
    readTime: 6,
    featured: false
  },
  {
    slug: 'boston-solar-success-story',
    title: 'Boston Family Saves $2,400 Annually with Solar Installation',
    excerpt: 'Read how the Johnson family in Boston reduced their electricity bills by 85% with their new solar panel system and why they chose Solar Señorita.',
    content: '',
    publishedAt: '2025-01-01T00:00:00Z',
    image: '/blog/boston-solar-success.jpg',
    tags: ['Boston', 'Customer Success', 'Solar Savings', 'Case Study'],
    author: 'Solar Señorita',
    readTime: 5,
    featured: true
  }
];

const BlogList: React.FC = () => {
  // In production, this would fetch from the blog API or file system
  const posts = mockPosts;

  if (posts.length === 0) {
    return (
      <BlogContainer>
        <ContentWrapper>
          <MainTitle>Solar Blog</MainTitle>
          <Subtitle>Expert tips, news, and insights for Massachusetts solar homeowners</Subtitle>
          
          <EmptyState>
            <h3>Coming Soon!</h3>
            <p>Our automated blog system is being set up to bring you weekly solar tips and Massachusetts energy news.</p>
            <p>Check back soon for expert insights on solar incentives, installation tips, and local energy updates.</p>
          </EmptyState>
        </ContentWrapper>
      </BlogContainer>
    );
  }

  return (
    <BlogContainer>
      <ContentWrapper>
        <MainTitle>Solar Señorita Blog</MainTitle>
        <Subtitle>
          Expert tips, latest news, and insights for Massachusetts solar homeowners
        </Subtitle>
        
        <BlogGrid>
          {posts.map((post) => (
            <BlogCard key={post.slug}>
              <BlogImage $hasImage={!!post.image} />
              
              <BlogTitle>{post.title}</BlogTitle>
              
              <BlogMeta>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                <span>{post.readTime} min read</span>
              </BlogMeta>
              
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              
              <BlogTags>
                {post.tags.slice(0, 3).map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </BlogTags>
              
              <ReadMoreButton href={`/blog/${post.slug}`}>
                Read More →
              </ReadMoreButton>
            </BlogCard>
          ))}
        </BlogGrid>
      </ContentWrapper>
    </BlogContainer>
  );
};

export default BlogList;