'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 105, 180, 0.15) 0%, rgba(18, 18, 18, 0) 70%);
    z-index: 1;
  }
`;

const LoginCard = styled.div`
  position: relative;
  z-index: 2;
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(18, 18, 18, 0.95) 100%);
  border: 2px solid rgba(255, 105, 180, 0.4);
  border-radius: 20px;
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  margin: 2rem;
  box-shadow: 0 15px 40px rgba(255, 105, 180, 0.2), 0 5px 15px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #ff69b4;
    margin-bottom: 0.5rem;
    font-weight: 700;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 105, 180, 0.3);
  border-radius: 10px;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff69b4;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  border: none;
  border-radius: 10px;
  padding: 1rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 105, 180, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1rem;
  color: #ff6b6b;
  font-size: 0.9rem;
  text-align: center;
`;

const SuccessMessage = styled.div`
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 10px;
  padding: 1rem;
  color: #00ff88;
  font-size: 0.9rem;
  text-align: center;
`;

export default function AdminLogin() {
  const router = useRouter();
  const { user, signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push('/admin/dashboard');
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      await signIn(email, password);
      setSuccess(true);
      // Redirect to admin dashboard after successful login
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 500);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Logo>
          <h1>Solar Señorita</h1>
          <p>Admin Portal</p>
        </Logo>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="jenny@solarsenorita.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>Login successful! Redirecting...</SuccessMessage>}

          <Button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
}
