import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LifestylePillars from './components/LifestylePillars';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <LifestylePillars />
    </div>
  );
};

export default App;