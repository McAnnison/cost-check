
"use client";
import React from 'react';
import Header from '../components/Header';
import Calculator from '../components/Calculator';


const App: React.FC = () => {
  return (
    <div>
      <div className="app">
        <Header />
        <Calculator />
      {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;