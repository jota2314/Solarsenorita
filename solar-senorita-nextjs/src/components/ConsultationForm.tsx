'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const FormContainer = styled.div`
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.1), rgba(0, 255, 136, 0.1));
  border: 2px solid #ff69b4;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
  position: relative;
  animation: popUp 0.3s ease-out;
  
  @keyframes popUp {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 105, 180, 0.1), transparent);
    animation: shimmer 3s infinite;
    pointer-events: none;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    width: 95%;
    max-width: 450px;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 0.8rem;
    width: 95%;
    max-width: 380px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #ff69b4;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00ff88;
    transform: scale(1.1);
  }
`;

const ScheduleButton = styled.button`
  background: linear-gradient(135deg, #ff69b4, #00ff88);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
  margin: 6rem auto 0;
  display: block;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.6);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    margin: 4rem auto 0;
  }
`;

const FormTitle = styled.h3`
  color: #ff69b4;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const FormSubtitle = styled.p`
  color: #00ff88;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 2;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  color: white;
  font-weight: bold;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: rgba(18, 18, 18, 0.8);
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff69b4;
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.5);
    transform: scale(1.02);
  }
  
  &::placeholder {
    color: #888;
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: rgba(18, 18, 18, 0.8);
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ff69b4;
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.5);
    transform: scale(1.02);
  }

  option {
    background-color: #333;
    color: white;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  background: rgba(255, 68, 68, 0.1);
  border: 1px solid #ff4444;
  border-radius: 8px;
  padding: 0.75rem;
  margin: 1rem 0;
  text-align: center;
  font-size: 0.9rem;
`;

const CalendarButton = styled.button`
  background: linear-gradient(135deg, #ff69b4, #00ff88);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
  margin-top: 0.5rem;
  
  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.6);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const SuccessMessage = styled.div`
  background-color: rgba(0, 255, 136, 0.2);
  border: 2px solid #00ff88;
  border-radius: 10px;
  padding: 1rem;
  color: #00ff88;
  font-weight: bold;
  margin-top: 1rem;
`;

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ScheduleConsultationButtonProps {
  onClick: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    projectType: '',
    address: '',
    urgency: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        phone: '',
        email: '',
        projectType: '',
        address: '',
        urgency: ''
      });
      setIsSubmitted(false);
      setIsLoading(false);
      setError(null);
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Send to our API endpoint with enhanced lead data
      const consultationData = {
        phone: formData.phone,
        email: formData.email,
        projectType: formData.projectType,
        address: formData.address,
        urgency: formData.urgency,
        submittedAt: new Date().toISOString(),
        source: 'website',
        pageUrl: window.location.href,
        userAgent: navigator.userAgent
      };

      console.log('Sending consultation request:', consultationData);

      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(consultationData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Consultation request sent successfully:', result);
        setIsSubmitted(true);
      } else {
        console.error('API request failed:', result);
        setError('Failed to submit. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error sending consultation request:', error);
      setError('Failed to submit. Please try again or call us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.phone.trim() && formData.email.trim() && formData.projectType && formData.address.trim() && formData.urgency;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <ModalOverlay onClick={handleOverlayClick}>
        <FormContainer>
          <CloseButton onClick={onClose}>×</CloseButton>
          <SuccessMessage>
            🎉 Thank you! Your consultation request has been received!
            <br/><br/>
            📱 <strong>We&apos;ll contact you within 15 minutes to:</strong>
            <br/>✅ Schedule your free consultation
            <br/>✅ Answer any questions you have
            <br/>✅ Start your qualification process
            <br/><br/>
            📞 Questions? Call us at <strong>(781) 426-6300</strong>
          </SuccessMessage>
        </FormContainer>
      </ModalOverlay>
    );
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <FormContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <FormTitle>Schedule Your FREE Consultation!</FormTitle>
        <FormSubtitle>Get your personalized solar savings estimate</FormSubtitle>
        
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(555) 123-4567"
              required
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="projectType">Project Type *</Label>
            <Select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select project type</option>
              <option value="residential">Residential (Home)</option>
              <option value="commercial">Commercial (Business)</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="address">Property Address *</Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="123 Main St, City, State"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="urgency">Timeline *</Label>
            <Select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleInputChange}
              required
            >
              <option value="">When would you like to start?</option>
              <option value="asap">ASAP - Ready to move forward</option>
              <option value="1-3months">Within 1-3 months</option>
              <option value="3-6months">Within 3-6 months</option>
              <option value="6-12months">Within 6-12 months</option>
              <option value="just-exploring">Just exploring options</option>
            </Select>
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <CalendarButton
            type="submit"
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? 'Sending...' : 'Get Your Free Consultation'}
          </CalendarButton>
        </Form>
      </FormContainer>
    </ModalOverlay>
  );
};

// Export both the modal and the trigger button
export const ScheduleConsultationButton: React.FC<ScheduleConsultationButtonProps> = ({ onClick }) => (
  <ScheduleButton onClick={onClick}>
    Schedule a Free Consultation
  </ScheduleButton>
);

export default ConsultationForm;