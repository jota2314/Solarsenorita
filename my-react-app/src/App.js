import React from 'react';
import styled from 'styled-components';
import './App.css';

// Import components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import AboutSection from './components/AboutSection';
import MissionSection from './components/MissionSection';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <MissionSection />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
