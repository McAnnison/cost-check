
"use client";
import React from 'react';
import Header from '../components/Header';
import Calculator from '../components/Footer';
import Footer from '../components/Calculator';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;