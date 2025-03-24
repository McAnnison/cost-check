
"use client";
import React from 'react';
import "../public/style/header.css";
import Image from "next/image";



const Header: React.FC = () => {
  return (
    <header className="header">
        <div className="logo">
          <Image src="/broom.png" alt="Logo" width={50} height={50} />  
          <h1>CleanMate</h1>
        </div>
        <div className='background'>
          <Image src="/image.png" alt='back-image' width={1080} height={400}/>
        </div>
        <div className="hero-text">
         <h4>Service Calculator</h4> 
        </div>
    </header>
  );
};

export default Header;