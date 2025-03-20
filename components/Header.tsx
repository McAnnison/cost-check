"use client";
import React from 'react';
import Link from 'next/link';
import "../public/style/header.css";
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Background Image */}
      <div className="header-background">
        <Image 
          src="/image.png" 
          alt="Background image" 
          width={1920} 
          height={1080} 
          className="background-image"
        />
         <div className="hero" >
        <h2 className="hero-content" >Service Calculator</h2>
    </div>
      </div>

      {/* Logo and Navigation */}
      <div className="header-content">
        <nav className="header-nav">
        <div className="logo"> 
            <Image src='/broom.png' alt='logo'  width={50} height={50} className='logo-image'></Image>
            <h1>cleanmate</h1>
        </div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/calculator" className="nav-link">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    
  );
};

export default Header;