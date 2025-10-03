'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(18, 18, 18, 0.95) 100%);
  border: 2px solid rgba(255, 105, 180, 0.4);
  border-radius: 15px;
  backdrop-filter: blur(10px);

  h1 {
    color: #ff69b4;
    font-size: 2rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: white;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoutButton = styled.button`
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  border: none;
  border-radius: 10px;
  padding: 0.75rem 1.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 105, 180, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(18, 18, 18, 0.95) 100%);
  border: 2px solid rgba(255, 105, 180, 0.4);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(255, 105, 180, 0.3);
  }

  h2 {
    color: #ff69b4;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);

  p {
    color: #ff69b4;
    font-size: 1.5rem;
  }
`;

export default function AdminDashboard() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <LoadingContainer>
        <p>Loading...</p>
      </LoadingContainer>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <DashboardContainer>
      <Header>
        <h1>Solar Señorita Admin Dashboard</h1>
        <UserInfo>
          <span>Welcome, {user.email}</span>
          <LogoutButton onClick={handleLogout}>Sign Out</LogoutButton>
        </UserInfo>
      </Header>

      <ContentGrid>
        <Card>
          <h2>Consultations</h2>
          <p>Manage customer consultation requests and appointments.</p>
        </Card>

        <Card>
          <h2>Analytics</h2>
          <p>View website traffic, conversion rates, and customer insights.</p>
        </Card>

        <Card>
          <h2>Content Management</h2>
          <p>Update website content, blog posts, and customer reviews.</p>
        </Card>

        <Card>
          <h2>Customer Database</h2>
          <p>Access customer information and project details.</p>
        </Card>

        <Card>
          <h2>Settings</h2>
          <p>Configure system settings and user preferences.</p>
        </Card>

        <Card>
          <h2>Reports</h2>
          <p>Generate and download business reports and metrics.</p>
        </Card>
      </ContentGrid>
    </DashboardContainer>
  );
}
