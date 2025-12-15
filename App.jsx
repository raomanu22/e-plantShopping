import React from 'react';
import AboutUs from './components/AboutUs';
import './App.css';

const App = () => {
  const handleGetStarted = () => {
    window.location.href = '/ProductList'; // assuming routing is configured
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <button onClick={handleGetStarted}>Get Started</button>
      <AboutUs />
    </div>
  );
};

export default App;
