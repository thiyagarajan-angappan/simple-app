import React from 'react';
import './App.css';
import SAThemeContainer from '../components/SAThemeContainer';
import LoginPage from '../pages/LoginPage';

function App() {
  return (
    <SAThemeContainer>
      <LoginPage />
    </SAThemeContainer>
  );
}

export default App;